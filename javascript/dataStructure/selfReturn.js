function outer(x){
	var a = x;
	return function inner(y){
		a = a+y;
		console.log(a);
		return inner;
	}
}
outer(3)(5)(4)(1)(1);
