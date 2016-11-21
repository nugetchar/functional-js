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

//Getting the first initial is all about
//piping the two previous functions
const firstInitial = map(
  R.pipe(R.split(' '), R.nth(1), R.nth(0))
);

const user = Maybe('Thomas Toledo');
console.log(firstInitial(user).val);