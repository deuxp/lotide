const isString = input => {
  return typeof input === "string";
};
/* custom assert function which will log a message to console */
// paired with assertEqual: dependency
const assertEqual = (actual, expected) => {
  if (actual !== expected) {
    console.log(`🚨🚨🚨 Assertion Failed: ${isString(actual) ? '"' + actual + '"' : actual} !== ${isString(expected) ? '"' + expected + '"' : expected}`);
  } else {
    console.log(`💎💎💎 Assertion Passed: ${isString(actual) ? '"' + actual + '"' : actual} === ${isString(expected) ? '"' + expected + '"' : expected}`);
  }
};

// TEST CODE
assertEqual("Lighthouse Labs", "Bootcamp");
assertEqual("Bootcamp", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 1.1);
assertEqual(1, '1');

// String.isString(actual) ? '"'+actual+'"' : actual
// console.log(isString('hello'));
// console.log(isString(5));
// console.log(isString(['hello']));