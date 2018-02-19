# Detect-Ie
Detection of Internet Explorer 7-11 and Edge (>= 12), based on either Feature or User-Agent. See [demo](https://adi518.github.io/detect-ie/).
## Install
```
npm install --save detect-msie
```
## Usage
Default detection is based on Feature, as it is a more reliable method. To use a User-Agent based detection instead, see options below.
```js
import { detectIe } from 'detect-msie'

const report = detectIe()

// Available Queries:
console.log(report.isDetected)
console.log(report.isEdge)
console.log(report.isBelowEdge)
console.log(report.isIe7OrLower)
console.log(report.isIe7)
console.log(report.isIe8)
console.log(report.isIe9)
console.log(report.isIe10)
console.log(report.isIe11)
console.log(report.version)
```
## Options
#### `useUserAgent`
* Type: `Boolean`
* Default: `false`
* Description: Use User-Agent based detection instead (less reliable, [spoofable](https://developer.mozilla.org/en-US/docs/Glossary/User_agent)).