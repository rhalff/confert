var fs  = require('fs');
var ini = require('ini');

module.exports = function(file) {
  return ini.parse( fs.readFileSync(file, 'utf8') );
};
