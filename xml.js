var fs = require('fs');
var xml = require('xml2json');

module.exports = function(file, opts) {
  var ret;
  opts = opts || {};
  opts.object = true;
  ret = xml.toJson( fs.readFileSync( file ), opts );
  return ret[Object.keys(ret)[0]];
};
