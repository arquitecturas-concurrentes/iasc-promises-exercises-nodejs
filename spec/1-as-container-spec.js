var assert = require("assert");
var succ = require("../src/1-as-container.js").succ;


describe("Promise as a container", function() {
  it("should return a container with the result value", function() {
    var resultPromise = succ(3);
    var result = resultPromise.value();
    assert(result === 4);
  });
});
