var path = require('path');
module.exports = function() {

  console.log('HEH', path.dirname(module.parent.filename));

};
