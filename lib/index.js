/**
 * @typedef {import('mdast').PhrasingContent} PhrasingContent
 * @typedef {import('unist-util-is').AssertPredicate<PhrasingContent>} AssertPredicatePhrasing
 */

import {convert} from 'unist-util-is'

export const phrasing = /** @type {AssertPredicatePhrasing} */ (
  convert([
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
)
