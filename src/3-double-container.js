function ResolvedPromise(value) {
  this._value = value;
}

ResolvedPromise.prototype = {
  isResolved: function () {
    return true;
  },
  isRejected: function () {
    return false;
  },

  resolvedValue: function() {
    return this._value;
  },
  rejectedValue: function() {
    throw new Error("Promise resolved")
  }
};

function RejectedPromise(value) {
  this._value = value;
}

RejectedPromise.prototype = {
  isResolved: function () {
    return false;
  },
  isRejected: function () {
    return true;
  },

  resolvedValue: function() {
    throw new Error("Promise rejected")
  },
  rejectedValue: function() {
    return this._value;
  }
};


var Promise = {
  resolve: function(value) {
    return new ResolvedPromise(value)
  },
  reject: function(value) {
    return new RejectedPromise(value)
  }
}


// No cambiar inverse!
function inverse(x) {
  if (x === 0) {
    return Promise.reject("Division by zero");
  } else {
    return Promise.resolve(1 / x);
  }
}

module.exports = {
  inverse: inverse
};