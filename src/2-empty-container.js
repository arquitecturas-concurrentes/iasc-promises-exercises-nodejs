// TODO: Implement Promise
var Promise = {
  full: function(value) {},
  empty: function() {}
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