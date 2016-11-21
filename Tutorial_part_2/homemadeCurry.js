const addCurried = function(x) {
	return function(y) {
		//keeping reference to x thanks to closure
		return add(x, y);
	}
}

const add10 = addCurried(10);
add10(5);



