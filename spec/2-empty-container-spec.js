var assert = require("assert");
var inverse = require("../src/2-empty-container.js").inverse;

//
// Ejemplo de uso
//
// var inversePromise = inverse(20);
// if(inversePromise.hasValue()) {
//   var result = inversePromise.value();
//   //...hacer algo ....
// } 

describe("Promise with an empty container", function() {
  context("when the argument produces a value", function () {
    it("returns true when asked for a value", function() {
      var inversePromise = inverse(20);
      assert(inversePromise.hasValue() === true);
    });

    it("returns the value stored on the promise", function() {
      var inversePromise = inverse(20);
      assert(inversePromise.value() === 0.05);
    });
  });

  context("when the argument does not produce a value", function () {
    it("returns false when asked for a value", function() {
      var inversePromise = inverse(0);
      assert(inversePromise.hasValue() === false);
    });

    it("throws an error when asked for the value", function() {
      var inversePromise = inverse(0);
      assert.throws(function () {
        inversePromise.value()
      }, /Empty Promise/);
    });
  });
});
