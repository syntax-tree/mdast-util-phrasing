'use strict'

var is = require('unist-util-is')

module.exports = isPhrasing

var phrasing = [
  'inlineCode',
  'emphasis',
  'break',
  'strong',
  'delete',
  'link',
  'image',
  'footnote',
  'linkReference',
  'imageReference',
  'footnoteReference',
  'text'
]

// Check if a node is a phrasing element.
function isPhrasing(node) {
  return is(phrasing, node)
}
