var da = require('./index');

console.log(JSON.stringify(da('./test.yaml'), null, 2));
console.log(JSON.stringify(da('./test.ini'), null, 2));
console.log(JSON.stringify(da('./test.xml'), null, 2));
