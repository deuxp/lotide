

const data = [1,3,6,3,8,46,1,76,89,99,110,120];
const data2 = ["Cause", "i'M", "hungry", "like", "the", "woooooolf", ".", "I", "like"];
const lessThanThirty = x => x > 30; // less than 30, all items up until..
const lt30 = takeUntil(data, lessThanThirty);
const hungryWolf = w => w === '.';
const hungryLikeThe = takeUntil(data2, hungryWolf);

assertArraysEqual(lt30, [1,3,6,3,8]);
assertArraysEqual(hungryLikeThe, ["Cause", "i'M", "hungry", "like", "the", "woooooolf"]);
