var assert = require("assert");
var deferred = require("../src/4-deferred");

//
// Ejemplo de uso
//
// var req = ajax('http://www.google.com') 
// if(req.isResolved()) {
//   //.. hacer algo ...
// } else if(req.isRejected()) {
//   //.. ocurrió un error
// } else {
//   //...todavía no hay resultado...
// }

var timeToWait = deferred.timeToWait
var ajax = deferred.ajax;
var brokenAjax = deferred.brokenAjax;

var url = "http://www.google.com"

describe("Promise with a deferred value", function() {
  context("when the promise is resolved", function() {
    beforeEach(function () {
      this.ajaxPromise = ajax(url)
    })

    it("returns true when asked if it's resolved", function(done) {
      setTimeout(function () {
        assert(this.ajaxPromise.isResolved() === true);
        done()
      }.bind(this), timeToWait)
    });

    it("returns false when asked if it's rejected", function() {
      assert(this.ajaxPromise.isRejected() === false);
    });

    it("should be pending if the time has not passed yet", function() {
      assert(
        this.ajaxPromise.isResolved() === false && this.ajaxPromise.isRejected() === false
      );
    });

    it("returns the value stored on the promise", function(done) {
      setTimeout(function () {
        assert(this.ajaxPromise.resolvedValue() === "html");
        done()
      }.bind(this), timeToWait)
    });
  });

  context("when the promise is rejected", function () {
    beforeEach(function () {
      this.ajaxPromise = brokenAjax(url)
    })

    it("returns false when asked if it's resolved", function() {
      assert(this.ajaxPromise.isResolved() === false);
    });

    it("returns true when asked if it's rejected", function(done) {
      setTimeout(function () {
        assert(this.ajaxPromise.isRejected() === true);
        done()
      }.bind(this), timeToWait)
    });

    it("should be pending if the time has not passed yet", function() {
      assert(
        this.ajaxPromise.isResolved() === false && this.ajaxPromise.isRejected() === false
      );
    });

    it("returns the value stored on the promise", function(done) {
      setTimeout(function () {
        assert(this.ajaxPromise.rejectedValue() === "http error");
        done()
      }.bind(this), timeToWait)
    });
  });
});
