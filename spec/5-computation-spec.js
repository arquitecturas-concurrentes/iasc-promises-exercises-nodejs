var assert = require("assert");
var inverse = require("../src/5-computation.js").inverse;

//
// Ejemplo de uso
//
// var promise = inverse(4);
// promise.onResolved(function(result){ 
//   //... 
// })
// promise.onRejected(function(error){
//   //...
// })

describe("Promise as a computation", function() {
  context("onResolved", function () {
    it("should return the result on the callback", function() {
      var promise = inverse(4);
      promise.onResolved(function(result) { 
        assert(result === 0.25);
      });
    });

    it('should not call the onRejected callback', function() {
      var promise = inverse(4);
      promise.onRejected(function(error) { 
        assert.ifError('Should not be called');
      });
    });
  });

  context("onRejected", function() {
    it('should return the reject value on the callback', function() {
      var promise = inverse(0);
      promise.onRejected(function(error) {
        assert(error === 'Division by zero')
      });
    });

    it('should not call the onResolved callback', function() {
      var promise = inverse(0);
      promise.onResolved(function(result) { 
        assert.ifError('Should not be called');
      });
    });
  });
});
