var path = require('path');
var yaml = require('./yaml');
var  ini = require('./ini');
var  xml = require('./xml');
var   fs = require('fs');

var extensions = ['.yml', '.yaml', '.ini', '.xml'];

function resolve(filename) {
  return path.resolve(
    path.dirname(module.parent.filename),
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

module.exports = function(filename, opts) {

  var file;
  var ext = path.extname(filename);

  if(ext) {
    file = resolve(filename);
  } else {
    file = findFile(filename);
    ext = path.extname(file);
  }

  switch(ext) {

    case '.yml':
    case '.yaml':
      return yaml(file);

    case '.ini':
      return ini(file);

    case '.xml':
      return xml(file, opts);

    default:
      return require(file);

  }

};
