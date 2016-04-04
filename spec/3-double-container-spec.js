var assert = require("assert");
var inverse = require("../src/3-double-container.js").inverse;

//
// Ejemplo de uso
//
// var inversePromise = inverse(20);
// if(inversePromise.isResolved()) {
//   var result = inversePromise.resolvedValue();
//   //...hacer algo ....
// } else {
//   var exception = inversePromise.rejectedValue();
//   //..hacer algo..
// }

describe("Promise with a double container", function() {
  context("when the promise is resolved", function () {
    before(function () {
      this.inversePromise = inverse(20)
    })

    it("returns true when asked if it's resolved", function() {
      assert(this.inversePromise.isResolved() === true);
    });

    it("returns false when asked if it's rejected", function() {
      assert(this.inversePromise.isRejected() === false);
    });

    it("returns the value stored on the promise", function() {
      assert(this.inversePromise.resolvedValue() === 0.05);
    });

    it("throws when asked for a rejected value", function() {
      assert.throws(function () {
        this.inversePromise.rejectedValue()
      }.bind(this), /Promise resolved/);
    });
  });

  context("when the promise is rejected", function () {
    before(function () {
      this.inversePromise = inverse(0)
    })

    it("returns false when asked if it's resolved", function() {
      assert(this.inversePromise.isResolved() === false);
    });

    it("returns true when asked if it's rejected", function() {
      assert(this.inversePromise.isRejected() === true);
    });

    it("returns the value stored on the promise", function() {
      assert(this.inversePromise.rejectedValue() === "zero division");
    });

    it("throws when asked for a resolved value", function() {
      assert.throws(function () {
        this.inversePromise.resolvedValue()
      }.bind(this), /Promise rejected/);
    });
  });
});
