'use strict'

var is = require('unist-util-is')

module.exports = isPhrasing

var phrasing = [
  'break',
  'delete',
  'emphasis',
  'footnote',
  'footnoteReference',
  'image',
  'imageReference',
  'inlineCode',
  'link',
  'linkReference',
  'strong',
  'text'
]

// Check if a node is a phrasing element.
function isPhrasing(node) {
  return is(phrasing, node)
}
