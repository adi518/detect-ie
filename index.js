/* eslint-disable space-before-function-paren */

// As always with these things, YMMV.
// https://codepen.io/gapcode/pen/vEJNZN
// https://github.com/stowball/Layout-Engine
// https://stackoverflow.com/a/14658198/4106263
// https://en.wikipedia.org/wiki/Internet_Explorer_version_history
// https://stackoverflow.com/questions/9900311/how-do-i-target-only-internet-explorer-10-for-certain-situations-like-internet-e/14916454#14916454

export function detectIe(options = {}) {
  const report = { isDetected: false }
  const defaults = { useUserAgent: false }
  options = { ...defaults, ...options }
  let version

  // Should use User-Agent based detection? (less reliable, spoofable)  
  if (options.useUserAgent) {

    const { userAgent } = window.navigator
    const edge = userAgent.indexOf('Edge/')
    const trident = userAgent.indexOf('Trident/')
    const rv = userAgent.indexOf('rv:')
    const msie = userAgent.indexOf('MSIE ')
    const isEdge = edge > 0
    const isTrident = trident > 0
    const isMsie = msie > 0

    // Detect Edge
    if (isEdge) {
      version = parseInt(userAgent.substring(edge + 5, userAgent.indexOf('.', edge)), 10)
    }

    // Detect IE 11 (Trident)
    else if (isTrident) {
      version = parseInt(userAgent.substring(rv + 3, userAgent.indexOf('.', rv)), 10)
    }

    // Detect IE <= 10
    else if (isMsie) {
      version = parseInt(userAgent.substring(msie + 5, userAgent.indexOf('.', msie)), 10)
    }

  } else {

    // Feature based detection based on Matt Stow's Layout-Engine v0.10.2
    // https://github.com/stowball/Layout-Engine/blob/master/layout.engine.js

    const { style } = document.documentElement

    if ('msScrollLimit' in style || 'behavior' in style) {

      // Detect Edge
      if ('msTextSizeAdjust' in style && !('msFlex' in style)) {
        version = '>= 12'
      }

      // Detect IE 11
      else if ('msImeAlign' in style) {
        version = 11
      }

      // Detect IE 10
      else if ('msUserSelect' in style) {
        version = 10
      }

      // Detect IE 9
      else if ('fill' in style) {
        version = 9
      }

      // Detect IE 8
      else if ('widows' in style) {
        version = 8
      }
    }
  }

  if (version) {

    const versions = [8, 9, 10, 11]

    // Generate Queries for IE 8-11
    const queries = versions.reduce((o, v) => { o[`isIe${v}`] = v === version; return o }, {})

    // Special Queries (Edge)
    const isEdge = version === '>= 12' || version >= 12
    const isBelowEdge = version < 12

    report = {
      ...report,
      isDetected: true,
      isEdge,
      isBelowEdge,
      ...queries,
      version
    }
  }

  return report
}