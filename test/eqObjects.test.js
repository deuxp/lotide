


// ========================================================================
// tests
// ========================================================================
let a1 = {a: 1, b: 2, c: 3};
let a2 = {a: 1, c: 3, b: 2};
let a3 = {a: 1, b: 2, c: '3'}; // fail

let a4 = {a: 1, b: 2, c: 3, d: 4};

let b1 = {};
let b2 = {};
let b3 = {a: []};
let b4 = {a: undefined};
let b5 = {a: 0};
let b6 = {a: null};

assertEqual(eqObjects(a1, a2), true);
assertEqual(eqObjects(a1, a3), false);
assertEqual(eqObjects(a1, a4), false);
assertEqual(eqObjects(b1, b2), true);
assertEqual(eqObjects(b3, b4), false);
assertEqual(eqObjects(b5, b6), false);

const cd = { c: "1", d: ["2", 3] };
const dc = { d: ["2", 3], c: "1" };
assertEqual(eqObjects(cd, dc), true); // => true

const cd2 = { c: "1", d: ["2", 3, 4] };
assertEqual(eqObjects(cd, cd2), false); // => false

