


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