import test from 'tape'
import {phrasing} from './index.js'

test('phrasing', (t) => {
  t.equal(phrasing(), false, 'should return `false` without node')

  t.equal(phrasing(null), false, 'should return `false` with `null`')

  t.equal(
    phrasing({type: 'foo'}),
    false,
    'should return `false` when without known `node`'
  )

  t.equal(
    phrasing({type: 'link'}),
    true,
    'should return `true` when with a phrasing `node`'
  )

  t.equal(
    phrasing({type: 'strong'}),
    true,
    'should return `true` when with another phrasing `node`'
  )

  t.equal(
    phrasing({type: 'paragraph'}),
    false,
    'should return `false` when with a block `node`'
  )

  t.equal(
    phrasing({type: 'list'}),
    false,
    'should return `false` when with another block `node`'
  )

  t.end()
})
