// TODO: Implement Promise
function Promise() {}

// No cambiar succ!
function succ(num) {
   return new Promise(num + 1);
}

// No cambiar sideEffect!
function sideEffect(toPrint) {
	return new Promise(console.log(toPrint));
}

module.exports = {
  succ: succ,
  sideEffect: sideEffect
};