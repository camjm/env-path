'use strict';

// Imports
const fs = require('fs');
const path = require('path');
const util = require('util');

const pathVar = () => {
  var paths = pathVariable();
  var promises = paths.map(pathStats);
  return Promise.all(promises);
}

const pathStats = (item) => {
  return new Promise((resolve, reject) => {
    fs.stat(item, (err, stats) => {
      resolve({
        path: item,
        exists: !err,
        isFile: stats && stats.isFile(),
        isDirectory: stats && stats.isDirectory()
      });
    });
  });
};

const pathVariable = () => {
  const pathVar = process.env.PATH;
  if (!pathVar) {
    throw new Error('PATH environment variable not set');
  }
  var paths = pathVar.split(path.delimiter);
  return paths;
};

const pathextVariable = () => {
  const pathextVar = process.env.PATHEXT;
  if (!pathextVar) {
    throw new Error('PATHEXT environment variable not set');
  }
  var pathexts = pathextVar.split(path.delimiter);
  return pathexts;
};

const pathExecutables = (path) => {
  //TODO:
};

// Expose
module.exports.pathVar = pathVar;
module.exports.pathStats = pathStats;
module.exports.pathVariable = pathVariable;
module.exports.pathextVariable = pathextVariable;
module.exports.pathExecutables = pathExecutables;
