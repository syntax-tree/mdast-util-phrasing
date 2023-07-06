import assert from 'node:assert/strict'
import test from 'node:test'
import {phrasing} from 'mdast-util-phrasing'

test('phrasing', async function (t) {
  await t.test('should expose the public api', async function () {
    assert.deepEqual(Object.keys(await import('mdast-util-phrasing')).sort(), [
      'phrasing'
    ])
  })

  await t.test('should return `false` without node', async function () {
    assert.equal(phrasing(), false)
  })

  await t.test('should return `false` with `null`', async function () {
    assert.equal(phrasing(null), false)
  })

  await t.test(
    'should return `false` when without known `node`',
    async function () {
      assert.equal(phrasing({type: 'foo'}), false)
    }
  )

  await t.test(
    'should return `true` when with a phrasing `node`',
    async function () {
      assert.equal(phrasing({type: 'link'}), true)
    }
  )

  await t.test(
    'should return `true` when with another phrasing `node`',
    async function () {
      assert.equal(phrasing({type: 'strong'}), true)
    }
  )

  await t.test(
    'should return `false` when with a block `node`',
    async function () {
      assert.equal(phrasing({type: 'paragraph'}), false)
    }
  )

  await t.test(
    'should return `false` when with another block `node`',
    async function () {
      assert.equal(phrasing({type: 'list'}), false)
    }
  )
})
