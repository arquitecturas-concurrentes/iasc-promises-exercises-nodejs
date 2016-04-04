function Deferred() {
  this._promise = new Promise()
}

Deferred.prototype = {
  resolve: function(value) {
    this._promise.resolve(value)
  },
  reject: function(value) {
    this._promise.reject(value)
  },
  promise: function() {
    return this._promise;
  }
}

function Promise() {
  this._resolvedValue = undefined
  this._rejectedValue = undefined
}

Promise.prototype = {
  resolve: function (resolvedValue) {
    this._resolvedValue = resolvedValue
  },
  reject: function (rejectedValue) {
    this._rejectedValue = rejectedValue
  },

  isResolved: function(){
    return !!this._resolvedValue;
  },
  isRejected: function(){
    return !!this._rejectedValue;
  },

  resolvedValue: function (resolvedValue) {
    return this._resolvedValue
  },
  rejectedValue: function (rejectedValue) {
    return this._rejectedValue
  }
}

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
