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

//Instead of currying each function,
//We'll curry once and for all the map function body,
//And then map over the piping (instead of piping over the maping)
const map = R.curry((fn, functor) => functor.fmap(fn));

//Functions called in order to get the firstname initial
const getWords = R.split(' '); //curried function spliting
const getFirstName = R.nth(1); // curried function returning the second item of an array
const getFirstLetter = R.nth(0) // curried function returning the first item of an array

//Getting the first initial is all about
//piping the two previous functions
const firstInitial = map(
  R.pipe(getWords, getFirstName, getFirstLetter)
);

const user = Maybe('Thomas Toledo');
console.log(firstInitial(user).val);