var path = require('path');
var yaml = require('./yaml');
var  ini = require('./ini');
var  xml = require('./xml');

module.exports = function(file, opts) {

  switch(path.extname(file)) {

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
