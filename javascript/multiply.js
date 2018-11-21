function multiply(arg){
	multiply.cache = multiply.cache*arg || 1
	return multiply;
}
var ans = multiply(1)(2)(3)
console.log(ans.cache);
