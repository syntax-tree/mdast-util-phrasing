import {convert} from 'unist-util-is'

export const phrasing = convert([
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
])

phrasing.displayName = 'isPhrasing'
