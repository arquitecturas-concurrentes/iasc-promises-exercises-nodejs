var assert = require("assert");
var succ = require("../src/1-as-container.js").succ;
var sideEffect = require("../src/1-as-container.js").sideEffect;


describe("Promise as a container", function() {
  it("should return a container with the result value", function() {
    var resultPromise = succ(3);
    var result = resultPromise.value();
    assert(result === 4);
  });

  it("should return a container with no result when introducing side effect", function() {
    var resultPromise = sideEffect("Hello side effect!");
    var result = resultPromise.value();
    assert(result === undefined);
  });
});
