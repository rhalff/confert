var should   = require('should');
var Confert  = require('../index');
var expected = require('./fixtures/test.json');

describe('Confert', function() {

 describe('With an extension', function() {

   it('should load yaml', function() {
     Confert('./fixtures/test.yaml').should.eql(expected);
   });

   it('should load xml', function() {
     Confert('./fixtures/test.xml').should.eql(expected);
   });

   it('should load ini', function() {
     Confert('./fixtures/test.ini').should.eql(expected);
   });

 });

 describe('Without an extension', function() {

   it('should load yaml', function() {
     Confert('./fixtures/yaml').should.eql(expected);
   });

   it('should load xml', function() {
     Confert('./fixtures/xml').should.eql(expected);
   });

   it('should load ini', function() {
     Confert('./fixtures/ini').should.eql(expected);
   });

 });


});
