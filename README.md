[![Greenkeeper badge](https://badges.greenkeeper.io/jaebradley/url-path-sanitizer.svg)](https://greenkeeper.io/)
![URL Path Sanitizer](https://github.com/jaebradley/url-path-sanitizer/workflows/URL%20Path%20Sanitizer/badge.svg)
[![codecov](https://codecov.io/gh/jaebradley/url-path-sanitizer/branch/master/graph/badge.svg)](https://codecov.io/gh/jaebradley/url-path-sanitizer)
[![npm](https://img.shields.io/npm/v/url-path-sanitizer.svg)](https://www.npmjs.com/package/url-path-sanitizer)
[![npm](https://img.shields.io/npm/dt/url-path-sanitizer.svg)](https://www.npmjs.com/package/url-path-sanitizer)

# url-path-sanitizer

Strip any URL path part with a digit and replace with a placeholder

## Installation

```bash
npm install url-path-sanitizer
```

```bash
yarn add url-path-sanitizer
```

## Usage

### `urlPathSanitizer`

* `url` property is the URL to sanitize - this property is required
* `placeholder` - value to replace url path parts with digits. Default is `[:id]`
* `whitelist` - values to ignore when evaluating if it contains a digit

```javascript
import urlPathSanitizer from 'url-path-sanitizer';

urlPathSanitizer({ url: '/some/path/with/an/id/1' }); // /some/path/with/an/[:id]
urlPathSanitizer({ url: '/another/path/with/an/id/1', placeholder: 'jae' }); // /another/path/with/an/id/jae
urlPathSanitizer({ url: '/a/path/without/a/digit' }); // /a/path/without/a/digit
urlPathSanitizer({ url: '/v1/some/whitelisted/path', whitelist: ['v1'] }); // /v1/some/whitelisted/path
```
