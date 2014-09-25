var fs   = require('fs');
var xml  = require('xml2json');
var util = require('./_util');

module.exports = function(file, opts) {
  if(typeof file === 'string') {
    file = util.resolveFile(file);
  }
  var ret;
  opts = opts || {};
  opts.object = true;
  ret = xml.toJson( fs.readFileSync( file.name ), opts );
  return ret[Object.keys(ret)[0]];
};
