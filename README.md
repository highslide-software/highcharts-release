Highcharts is a JavaScript charting library based on SVG rendering. This project includes Stock, the financial charting package, the Maps package for geo maps and the Gantt package.

This package is intended for supporting client-side JavaScript charting through bundlers like Parcel or Webpack and environments like Babel or TypeScript. If you intend to generate static charts on the server side, use the [Highcharts node.js Export Server](https://www.npmjs.com/package/highcharts-export-server) instead.

### License
Please note that commercial use of Highcharts requires a commercial license. For testing and demonstration purposes (POC), Highcharts can be used free of charge. Educational and personal projects are qualified for a free license. Read more about licenses in the [Highcharts shop](https://shop.highcharts.com/?utm_source=npmjs&utm_medium=referral&utm_campaign=highchartspage&utm_content=licenseinfo).

### Links
* Official website: [www.highcharts.com](http://www.highcharts.com)
* Download page: [www.highcharts.com/download](http://www.highcharts.com/download)
* License: [www.highcharts.com/license](http://www.highcharts.com/license)
* Support: [www.highcharts.com/support](http://www.highcharts.com/support)
* Issues: [Working repo](https://github.com/highcharts/highcharts/issues)

## Download and install Highcharts
Please note that there are several ways to use Highcharts. For general installation instructions, see [the docs](http://www.highcharts.com/docs/getting-started/installation).
### Use our CDN
Instead of downloading, you can use our CDN to access files directly. See [code.highcharts.com](https://code.highcharts.com) for details.
```
<script src="https://code.highcharts.com/highcharts.js"></script>
```
### Install from npm
See [npm documentation](https://docs.npmjs.com/) on how to get started with npm.
```
npm install --save highcharts
```

#### Install nightly build
See [highcharts documentation](https://www.highcharts.com/docs/getting-started/install-from-npm) for installing the nightly build.

Note that we do not recommend the use of the nightly build in production environments as it **may contain bugs and is not considered stable.**

```
npm install --save highcharts/highcharts-dist#nightly
```


### Install from Bower
See [Bower documentation](https://bower.io/) on how to get started with Bower.
```
bower install highcharts
```

## Load Highcharts as a CommonJS module
Highcharts uses a UMD (Universal Module Definition) module pattern, which provides support for CommonJS. However, starting from version 12, the module system has been simplified.
*The following examples presumes you are using npm to install Highcharts, see [Download and install Highcharts](#download-and-install-highcharts) for more details.*
```js
// Load Highcharts
const Highcharts = require('highcharts');

// Load the exporting module (no need to initialize explicitly from v12)
require('highcharts/modules/exporting');

// Generate the chart
Highcharts.chart('container', {
  // options - see https://api.highcharts.com/highcharts
});
```

## Load Highcharts as an ES6 module
Since Highcharts supports CommonJS, it can be loaded as an ES6 module with the use of transpilers. Two common transpilers are [Babel](https://babeljs.io/) and [TypeScript](https://www.typescriptlang.org/). These have different interpretations of a CommonJS module, which affects your syntax. With Highcharts v12, ES6 modules are supported out of the box without the need to initialize module factories.
*The following examples presumes you are using npm to install Highcharts, see [Download and install Highcharts](#download-and-install-highcharts) for more details.*
### Babel
```js
import Highcharts from 'highcharts';
// Alternatively, this is how to load Highcharts Stock. The Maps and Gantt
// packages are similar.
// import Highcharts from 'highcharts/highstock';

import 'highcharts/modules/exporting';

// Generate the chart
Highcharts.chart('container', {
  // options - see https://api.highcharts.com/highcharts
});
```
### TypeScript
```js
import Highcharts from 'highcharts';
// Alternatively, this is how to load Highcharts Stock. The Maps and Gantt
// packages are similar.
// import Highcharts from 'highcharts/highstock';

import 'highcharts/modules/exporting';

// Generate the chart
Highcharts.chart('container', {
  // options - see https://api.highcharts.com/highcharts
});
```

