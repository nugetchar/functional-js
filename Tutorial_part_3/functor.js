const R = require('ramda');   //  via node or webpack/browserify

//In this file, we want to avoid creating a new function for each functor
//when it is always the same

// maybe function
const maybe = {
	//we will create an object by calling this method
	of: val => functor(maybe, val), //it will bind the fmap function with a new value
	fmap: function(f) {
		if (this.val === null) return maybe.of(null);
		return maybe.of(f(this.val));
	}
}

//This function just has to create a new Object
const functor = function(functorType, val) {
	return Object.assign( //Merging the functorType (here "maybe") and the value
		Object.create(functorType),
		{val: val}
	);
}

//Instead of currying each function,
//We'll curry once and for all the map function body,
//And then map over the piping (instead of piping over the maping)
const map = R.curry((fn, functor) => functor.fmap(fn));

//Getting the first initial is all about
//piping the two previous functions
const firstInitial = map(
  R.pipe(R.split(' '), R.nth(1), R.nth(0))
);

const user = maybe.of('Thomas Toledo');
console.log(firstInitial(user).val);