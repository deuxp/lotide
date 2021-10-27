// ====================================
// helper function --> assertEqual
// ====================================
const isString = input => typeof input === "string";

// ====================================
/* assertEqual: custom assert function which will log Pass || Fail message to console */
// ====================================
const assertEqual = (actual, expected) => {
  if (actual !== expected) {
    console.log(`🚨🚨🚨 Assertion Failed: ${isString(actual) ? '"' + actual + '"' : actual} !== ${isString(expected) ? '"' + expected + '"' : expected}`);
  } else {
    console.log(`💎💎💎 Assertion Passed: ${isString(actual) ? '"' + actual + '"' : actual} === ${isString(expected) ? '"' + expected + '"' : expected}`);
  }
};

// ====================================
// findKey fucntion:
// ====================================
/*
input -> (a) object, (b) callback[function]
output-> return (a) the first key that [String]
                (b) callback returns truthy
Whatdo-> return the first key for which the callback returns a truthy value
Else  -> if no key is found return undefined --> return nothing
*/
const findKey = function(object, callback) {
  for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
      const value = object[key];
      if (callback(value)) return key;
    }
  }
};


// ====================================
// ====================================
// tests
// ====================================

const hardwareStores = {
  etobicoke: 15,
  northYork: 35,
  thornHill: 40,
  stockyards: 8,
  bayDundas: 5,
};

const closestHardware = store => store < 10;
const closestHardwareStore = findKey(hardwareStores, closestHardware); // return stockyards
assertEqual(closestHardwareStore, 'stockyards');

const notInTorontoHardware = store => store > 20;
const notInTorontoHardwareStore = findKey(hardwareStores, notInTorontoHardware);
assertEqual(notInTorontoHardwareStore, 'northYork');
assertEqual(notInTorontoHardwareStore, 'northyork'); // Error

// ====================================

const springfieldPeople = {
  homer: {lastName: "Simpson", townRole: 'nuclearTechnician'},
  bart: {lastName: "Simpson", townRole: 'underAchiever'},
  marge: {lastName: "Simpson", townRole: 'homeMaker'},
  ralph: {lastName: "Wiggum", townRole: 'dork'},
  maggie: {lastName: "Simpson", townRole: 'baby'},
  lisa: {lastName: "Simpson", townRole: 'knowItAll'},
  barney: {lastName: "Gumble", townRole: 'drunk'},
  moe: {lastName: "Syzlak", townRole: 'barTender'},
  montgomery: {lastName: "Burns", townRole: 'millionaire'},
};

const notASimpson = character => character.lastName !== 'Simpson'; // callback
const firstNotASimpson = findKey(springfieldPeople, notASimpson);// Whatdo ? function call
assertEqual(firstNotASimpson, 'ralph');
// assertEqual(firstNotASimpson, 'barney');

const townDrunk = character => character.townRole === 'drunk';
const whoIsTheTownDrunk = findKey(springfieldPeople, townDrunk);
assertEqual(whoIsTheTownDrunk, 'barney');