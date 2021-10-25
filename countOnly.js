// /*
// input -> (a) collection of items(strings). **Object (b) what to count. **Array
// output -> return counts for everything input listed. ** new object
// */
const countOnly = (allItems, itemsToCount) => {
  const results = {};
  for (let item of  allItems) {
    if (itemsToCount[item]) {
      if (!(results[item])) results[item] = 0;
      results[item] += 1;
    }
  }
  return results;
};

// tester used by assertEqual
const isString = input => {
  return typeof input === "string";
};


/* custom assert function which will log a message to console */
const assertEqual = (actual, expected) => {
  if (actual !== expected) {
    console.log(`🚨🚨🚨 Assertion Failed: ${isString(actual) ? '"' + actual + '"' : actual} !== ${isString(expected) ? '"' + expected + '"' : expected}`);
  } else {
    console.log(`💎💎💎 Assertion Passed: ${isString(actual) ? '"' + actual + '"' : actual} === ${isString(expected) ? '"' + expected + '"' : expected}`);
  }
};


const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

assertEqual(result1["Jason"], 1);
assertEqual(result1["Karima"], undefined);
assertEqual(result1["Fang"], 2);
assertEqual(result1["Agouhanna"], undefined);
