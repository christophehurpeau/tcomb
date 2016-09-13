var irreducible = require('./irreducible');
var isPromise = require('./isThenable');

module.exports = irreducible('Promise', isPromise);
