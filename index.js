const uniqueRandomArray = require('unique-random-array');
const data = require('./bullshit/data.js');

// const repoUrl = 'https://github.com/joelbandi/marketing-bullshite';
// const reportText = `Please report to ${repoUrl}/issues if anything`;

module.exports.buzzword = uniqueRandomArray(data.buzzwords);
module.exports.catchPhrase = uniqueRandomArray(data.catchPhrases);

