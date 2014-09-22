var myModule = require('./index.js')
var test = require('tape')

test('The value of the index is 1', function(t) {
  t.plan(1)
  t.equal(myModule, 1)
})


console.log(myModule)
