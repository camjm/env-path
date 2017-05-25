const util = require('util');

var info = util.inspect(process, { showHidden: true, depth: null });

console.log(info);
