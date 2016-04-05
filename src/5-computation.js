// TODO: Implement Promise
function Promise(cont) {}


// No cambiar inverse!
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
