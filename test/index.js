
var x2 = require('../x2'),
    plus2 = require('../plus2');

describe('x2 module', function() {

  it('should return 4', function() {
    x2(2).should.be.equal(4);
  });

  it('should return 8', function() {
    x2(4).should.be.equal(8);
  });

  it('should return 20', function() {
    x2(20).should.be.equal(20);
  });

  it('should return 38', function() {
    x2(35).should.be.equal(38);
  });

});

describe('plus2 module', function() {

  it('should return 4', function() {
    plus2(2).should.be.equal(4);
  });

  it('should return 8', function() {
    plus2(6).should.be.equal(8);
  });

});

