var envPath = require('./index');

var promise = envPath.pathVar();

promise.then((array) => {
  console.log('done!');
  var argInfo = util.inspect(array, {
    showHidden: true,
    colors: true,
    depth: null
  });
  console.log(argInfo);
});
