const concat = require('concat-stream')
const test = require('tape')

const fromString = require('./')

test('should assert input types', function (t) {
  t.plan(1)
  t.throws(fromString, /string/)
})

test('should create a stream from a string', function (t) {
  t.plan(1)
  fromString('hello world').pipe(concat(function (res) {
    t.equal(res.toString(), 'hello world')
  }))
})
