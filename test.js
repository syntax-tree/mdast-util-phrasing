import assert from 'node:assert/strict'
import test from 'node:test'
import {phrasing} from './index.js'

test('phrasing', () => {
  assert.equal(phrasing(), false, 'should return `false` without node')

  assert.equal(phrasing(null), false, 'should return `false` with `null`')

  assert.equal(
    phrasing({type: 'foo'}),
    false,
    'should return `false` when without known `node`'
  )

  assert.equal(
    phrasing({type: 'link'}),
    true,
    'should return `true` when with a phrasing `node`'
  )

  assert.equal(
    phrasing({type: 'strong'}),
    true,
    'should return `true` when with another phrasing `node`'
  )

  assert.equal(
    phrasing({type: 'paragraph'}),
    false,
    'should return `false` when with a block `node`'
  )

  assert.equal(
    phrasing({type: 'list'}),
    false,
    'should return `false` when with another block `node`'
  )
})
