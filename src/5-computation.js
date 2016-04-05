function doNothing() {}

function Promise(cont) {
  this.cont = cont;
}

Promise.prototype = {
  onResolved: function(f) {
    this.cont(f, doNothing);
  },
  onRejected: function(f) {
    this.cont(doNothing, f);
  }
};


function inverse(x) {
  return new Promise(function(resolve, reject) {
    if(x === 0) {
      reject("Division by zero");
    } else {
      resolve(1 / x);
    }
  })
}

module.exports = {
  inverse: inverse
};
