function FullPromise(value) {
  this._value = value;
}

FullPromise.prototype = {
  value: function() {
    return this._value;
  },
  hasValue: function() {
    return true
  }
};

var EmptyPromise = {
  value: function() {
    throw new Error("Empty Promise")
  },
  hasValue: function() {
    return false
  }
}

var Promise = {
  full: function(value) {
    return new FullPromise(value)
  },
  empty: function() {
    return EmptyPromise
  }
}

// No cambiar inverse!
function inverse(x) {
  if (x === 0) {
    return Promise.empty();
  } else {
    return Promise.full(1 / x);
  }
}

module.exports = {
  inverse: inverse
};