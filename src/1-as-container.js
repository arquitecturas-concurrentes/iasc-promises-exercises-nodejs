// TODO: Implement Promise
function Promise() {}

// No cambiar succ!
function succ(num) {
   return new Promise(num + 1);
}

module.exports = {
  succ: succ
};