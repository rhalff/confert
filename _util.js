'use strict';

var path = require('path');
var   fs = require('fs');

var extensions = ['.yml', '.yaml', '.ini', '.xml'];

function resolve(filename) {
  var dirname;
  if(/confert\/index.js$/.test(module.parent.parent.filename)) {
    dirname = module.parent.parent.parent.filename;
  } else {
    dirname = module.parent.parent.filename;
  }
  return path.resolve(
    path.dirname(dirname),
    filename
  );
}

function findFile(filename) {
  var file;
  extensions.every(function(x) {
    var f = resolve(filename + x);
    if(fs.existsSync(f)) {
      file = f;
      return false;
    }
    return true;
  });

  if(!file) {
    throw Error('Unable to resolve file: ' + filename);
  }

  return file;
}


function resolveFile(filename) {
  var file;
  var ext = path.extname(filename);

  if(ext) {
    file = resolve(filename);
  } else {
    file = findFile(filename);
    ext = path.extname(file);
  }

  return {
    name: file,
    ext: ext
  };
}

module.exports = {
  resolve: resolve,
  findFile: findFile,
  resolveFile: resolveFile
};
