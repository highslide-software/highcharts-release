/* *
 *
 *  (c) 2010-2024 Torstein Honsi
 *
 *  License: www.highcharts.com/license
 *
 *  !!!!!!! SOURCE GETS TRANSPILED BY TYPESCRIPT. EDIT TS FILE ONLY. !!!!!!!
 *
 * */
'use strict';
import H from '../../Globals.js';
const { composed } = H;
import SVGElement from '../SVG/SVGElement.js';
import U from '../../Utilities.js';
const { css, defined, extend, pushUnique, pInt } = U;
/* *
 *
 *  Class
 *
 * */
class HTMLElement extends SVGElement {
    /* *
     *
     *  Static Functions
     *
     * */
    /**
     * Modifies SVGElement to support HTML elements.
     * @private
     */
    static compose(SVGElementClass) {
        if (pushUnique(composed, this.compose)) {
            const htmlElementProto = HTMLElement.prototype, svgElementProto = SVGElementClass.prototype;
            svgElementProto.getSpanCorrection = htmlElementProto
                .getSpanCorrection;
            svgElementProto.htmlCss = htmlElementProto.htmlCss;
            svgElementProto.htmlGetBBox = htmlElementProto.htmlGetBBox;
            svgElementProto.htmlUpdateTransform = htmlElementProto
                .htmlUpdateTransform;
            svgElementProto.setSpanRotation = htmlElementProto.setSpanRotation;
        }
        return SVGElementClass;
    }
    /* *
     *
     *  Functions
     *
     * */
    /**
     * Get the correction in X and Y positioning as the element is rotated.
     * @private
     */
    getSpanCorrection(width, baseline, alignCorrection) {
        this.xCorr = -width * alignCorrection;
        this.yCorr = -baseline;
    }
    /**
     * Apply CSS to HTML elements. This is used in text within SVG rendering.
     * @private
     */
    htmlCss(styles) {
        const { element } = this, 
        // When setting or unsetting the width style, we need to update
        // transform (#8809)
        isSettingWidth = (element.tagName === 'SPAN' &&
            styles &&
            'width' in styles), textWidth = isSettingWidth && styles.width;
        let doTransform;
        if (isSettingWidth) {
            delete styles.width;
            this.textWidth = pInt(textWidth) || void 0;
            doTransform = true;
        }
        if (styles?.textOverflow === 'ellipsis') {
            styles.whiteSpace = 'nowrap';
            styles.overflow = 'hidden';
        }
        extend(this.styles, styles);
        css(element, styles);
        // Now that all styles are applied, to the transform
        if (doTransform) {
            this.htmlUpdateTransform();
        }
        return this;
    }
    /**
     * The useHTML method for calculating the bounding box based on offsets.
     */
    htmlGetBBox() {
        const { element } = this;
        return {
            x: element.offsetLeft,
            y: element.offsetTop,
            width: element.offsetWidth,
            height: element.offsetHeight
        };
    }
    /**
     * @private
     */
    htmlUpdateTransform() {
        // Aligning non added elements is expensive
        if (!this.added) {
            this.alignOnAdd = true;
            return;
        }
        const { element, renderer, rotation, styles, textAlign = 'left', textWidth, translateX = 0, translateY = 0, x = 0, y = 0 } = this, alignCorrection = {
            left: 0, center: 0.5, right: 1
        }[textAlign], whiteSpace = styles?.whiteSpace;
        // Get the pixel length of the text
        const getTextPxLength = () => {
            if (this.textPxLength) {
                return this.textPxLength;
            }
            // Reset multiline/ellipsis in order to read width (#4928,
            // #5417)
            css(element, {
                width: '',
                whiteSpace: whiteSpace || 'nowrap'
            });
            return element.offsetWidth;
        };
        // Apply translate
        css(element, {
            marginLeft: `${translateX}px`,
            marginTop: `${translateY}px`
        });
        if (element.tagName === 'SPAN') {
            const currentTextTransform = [
                rotation,
                textAlign,
                element.innerHTML,
                textWidth,
                this.textAlign
            ].join(',');
            let baseline, hasBoxWidthChanged = false;
            // Update textWidth. Use the memoized textPxLength if possible, to
            // avoid the getTextPxLength function using elem.offsetWidth.
            // Calling offsetWidth affects rendering time as it forces layout
            // (#7656).
            if (textWidth !== this.oldTextWidth) { // #983, #1254
                const textPxLength = getTextPxLength(), textWidthNum = textWidth || 0;
                if (((textWidthNum > this.oldTextWidth) ||
                    textPxLength > textWidthNum) && (
                // Only set the width if the text is able to word-wrap,
                // or text-overflow is ellipsis (#9537)
                /[ \-]/.test(element.textContent || element.innerText) ||
                    element.style.textOverflow === 'ellipsis')) {
                    css(element, {
                        width: (textPxLength > textWidthNum) || rotation ?
                            textWidth + 'px' :
                            'auto',
                        display: 'block',
                        whiteSpace: whiteSpace || 'normal' // #3331
                    });
                    this.oldTextWidth = textWidth;
                    hasBoxWidthChanged = true; // #8159
                }
            }
            this.hasBoxWidthChanged = hasBoxWidthChanged; // #8159
            // Do the calculations and DOM access only if properties changed
            if (currentTextTransform !== this.cTT) {
                baseline = renderer.fontMetrics(element).b;
                // Renderer specific handling of span rotation, but only if we
                // have something to update.
                if (defined(rotation) &&
                    ((rotation !== (this.oldRotation || 0)) ||
                        (textAlign !== this.oldAlign))) {
                    this.setSpanRotation(rotation, alignCorrection, baseline);
                }
                this.getSpanCorrection(
                // Avoid elem.offsetWidth if we can, it affects rendering
                // time heavily (#7656)
                ((!defined(rotation) && this.textPxLength) || // #7920
                    element.offsetWidth), baseline, alignCorrection);
            }
            // Apply position with correction
            css(element, {
                left: (x + (this.xCorr || 0)) + 'px',
                top: (y + (this.yCorr || 0)) + 'px'
            });
            // Record current text transform
            this.cTT = currentTextTransform;
            this.oldRotation = rotation;
            this.oldAlign = textAlign;
        }
    }
    /**
     * Set the rotation of an individual HTML span.
     * @private
     */
    setSpanRotation(rotation, alignCorrection, baseline) {
        // CSS transform and transform-origin both supported without prefix
        // since Firefox 16 (2012), IE 10 (2012), Chrome 36 (2014), Safari 9
        // (2015).;
        css(this.element, {
            transform: `rotate(${rotation}deg)`,
            transformOrigin: `${alignCorrection * 100}% ${baseline}px`
        });
    }
}
/* *
 *
 *  Default Export
 *
 * */
export default HTMLElement;
