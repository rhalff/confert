var fs = require('fs');
var yaml = require('js-yaml');

module.exports = function(file) {
  return yaml.load( fs.readFileSync(file, 'utf8') );
};
