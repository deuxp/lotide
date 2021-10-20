const assertEqual = (actual, expected) => {
  if (actual !== expected) {
    console.log(`🚨🚨🚨 Assertion Failed: ${actual} !== ${expected}`);
  } else {
    console.log(`💎💎💎 Assertion Passed: ${actual} === ${expected}`);
  }
};


const head = array => {
  return array.slice(0, 1)[0];
};


assertEqual(head([5, 6, 7]), 5); // Pass
assertEqual(head([5]), 5); // Pass
assertEqual(head(['Hello', 'Lighthouse', 'Labs']), 'Hello'); // Pass
assertEqual(head([]), undefined); // Pass