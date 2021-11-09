const head = require('../head');
const assertEqual = require('../assertEqual')


assertEqual(head([5, 6, 7]), 5); // Pass
assertEqual(head([5]), 5); // Pass
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello'); // Pass
assertEqual(head([]), undefined); // Pass