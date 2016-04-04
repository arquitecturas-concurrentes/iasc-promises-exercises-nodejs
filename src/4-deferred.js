// TODO: Implement Deferred and Promise
function Deferred() {
  this._promise = new Promise()
}
Deferred.prototype = {
  promise: function () {}
}

function Promise() {

}
Promise.prototype = {}

// No cambiar las funciones de ajax!
var timeToWait = 500

function ajax(url) {
  var deferred = new Deferred();

  setTimeout(function () {
    deferred.resolve("html");
  }, timeToWait)

  return deferred.promise();
}

function brokenAjax(url) {
  var deferred = new Deferred();
  setTimeout(function () {
    deferred.reject("http error");
  }, timeToWait)
  return deferred.promise();
}

module.exports = {
  timeToWait: timeToWait,
  ajax: ajax,
  brokenAjax: brokenAjax
};
