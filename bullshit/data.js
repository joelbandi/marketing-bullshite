var b = require('./buzzword');
var c = require('./catch-phrase');

var _b = b.map(function (ob) {
    return ob.b;
});

var _c = c.map(function (ob) {
    return ob.c;
});

module.exports.catchPhrases = _c;
module.exports.buzzwords = _b;
