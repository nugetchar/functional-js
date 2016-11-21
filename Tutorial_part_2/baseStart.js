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

// building blocks
const getFirstName = maybeName => maybeName.fmap(name => name.split(" ")[1]);
const getFirstLetter = maybeString => maybeString.fmap(string => string[0]);

// composition!
const firstInitial = R.pipe(getFirstName, getFirstLetter);

// try it
firstInitial(Maybe("Doc Emmmett Brown")).val;   // "E"
firstInitial(Maybe(null)).val;                  // null
