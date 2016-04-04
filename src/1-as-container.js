function Promise(value) {
  this._value = value;
}

Promise.prototype = {
  value: function() {
    return this._value;
  }
};

// No cambiar succ!
function succ(num) {
   return new Promise(num + 1);
}

module.exports = {
  succ: succ
};