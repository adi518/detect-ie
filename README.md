# Detect-Ie
Detect Internet Explorer 7-11, Edge (>= 12).
## Install
```
npm install --save detect-ie
```
## Usage
```js
import { detectIe } from 'detect-msie'

const detection = detectIe()

console.log(detection.isDetected)
console.log(detection.isEdge)
console.log(detection.isBelowEdge)
console.log(detection.isIe7OrLower)
console.log(detection.isIe7)
console.log(detection.isIe8)
console.log(detection.isIe9)
console.log(detection.isIe10)
console.log(detection.isIe11)
console.log(detection.version)
```
## Options

#### `useUserAgent`
* Type: `Boolean`
* Default: `false`
* Description: Use User-Agent based detection instead (less reliable, spoofable).