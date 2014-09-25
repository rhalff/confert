var path = require('path');
var yaml = require('./yaml');
var  ini = require('./ini');
var  xml = require('./xml');
var   fs = require('fs');

module.exports = function(filename, opts) {

  var file = path.resolve(
    path.dirname(module.parent.filename),
    filename
  );

  switch(path.extname(filename)) {

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
