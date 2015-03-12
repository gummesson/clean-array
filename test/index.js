/**
 * Dependencies
 */

var test       = require('tape')
var cleanArray = require('../')

/**
 * Tests
 */

test('cleanArray(arr)', function(assert) {
  var actual   = cleanArray([null, undefined, [], {}, '', true, false, 1, 0, 'string'])
  var expected = [true, false, 1, 0, 'string']
  assert.deepEqual(actual, expected, 'removes empty values safely')
  assert.end()
})
