'use strict';

const util = require('util');
const envPath = require('./index');

var promise = envPath.pathVar();

promise.then((array) => {
  var argInfo = util.inspect(array, {
    showHidden: true,
    colors: true,
    depth: null
  });
  console.log(argInfo);
}).catch(function(err) {
  console.log(err);
});
