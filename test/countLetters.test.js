const assert = require('chai').assert
const countLetters = require('../countLetters')



assertEqual(countLetters('hello deAr')['h'], 1);
assertEqual(countLetters('hello deAr')['e'], 2);
assertEqual(countLetters('hello deAr')['l'], 2);
assertEqual(countLetters('hello deAr')['o'], 1);
assertEqual(countLetters('hello deAr')['d'], 1);
assertEqual(countLetters('hello deAr')['a'], 1);
assertEqual(countLetters('hello deAr')['r'], 1);



