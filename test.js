'use strict'

const util = require('util')
const envPath = require('./index')

var promise = envPath.pathVar(function (err, result) {
  if (err) console.log('callback has err!')
  if (result) console.log('callback has result!')
})

promise.then((array) => {
  console.log('promise has array!')
  console.log(util.inspect(array, {
    showHidden: true,
    colors: true,
    depth: null
  }))
}).catch((err) => {
  console.log('promise has err!')
  console.log(util.inspect(err, {
    showHidden: true,
    colors: true,
    depth: null
  }))
})
