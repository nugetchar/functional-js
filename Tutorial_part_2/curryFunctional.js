const R = require('ramda');   //  via node or webpack/browserify

// Maybe functor factory
const Maybe = val => {
  return {
    val: val,
    fmap: function(fn) {
      if(this.val === null) return Maybe(null);
      return Maybe(fn(this.val));
    }
  }
};

//Maping function between callback and functor
const map = (fn, functor) => functor.fmap(fn);
//Currying this function
const mapCurried = R.curry(map);

//Functions called in order to get the firstname initial
const getFirstName = name => name.split(' ')[1];
const getFirstLetter = string => string[0];

//Getting the first initial is all about
//piping the two previous functions
const firstInitial = R.pipe(
	//As the second function takes in input the first function's output
	//We can use the mapping curried function
	mapCurried(getFirstName), //Returns a function taking a functor f(functor)
	//Returns a function g(functor2) taking a functor
	//this functor2 will be the result of f(functor);
	mapCurried(getFirstLetter) 
);

const user = Maybe('Thomas Toledo');
console.log(firstInitial(user).val);