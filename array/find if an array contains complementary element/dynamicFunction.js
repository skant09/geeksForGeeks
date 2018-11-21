var o = {}
o.callMyName =  function () {
  console.log("surya")
}
o.callAnotherName = function () {
  console.log('another name')
}

var a = "callMyName"
var b = "callAnotherName"
// new Array(10000).fill(1).forEach((v, i)=> i%2===0 ?  o[a]() : o[b]());
new Array(10000).fill(1).forEach((v, i) => i%3 ===0 ? o.callMyName(): o.callAnotherName());
