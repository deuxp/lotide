# Project: Lotide

## About

The Lotide project is a library of useful data processing utilites for common Javascript tasks.

Heavily inspired by the Lodash library, Lotide offers simpler, singular purpose derivatives. Lightwieght and powerful. Enjoy!

## Table of contents

1. [assertArraysEqual](https://github.com/deuxp/lotide/blob/master/README.md#1-assertarraysequal)
1. [assertEqual](https://github.com/deuxp/lotide/blob/master/README.md#2-assertequal)
1. [assertObjectsEqual](https://github.com/deuxp/lotide/blob/master/README.md#3-assertobjectsequal)
1. [countLetters](https://github.com/deuxp/lotide/blob/master/README.md#4-countletters)
1. [countOnly](https://github.com/deuxp/lotide/blob/master/README.md#5-countonly)
1. [eqArrays](https://github.com/deuxp/lotide/blob/master/README.md#6-eqarrays)
1. [eqObjects](https://github.com/deuxp/lotide/blob/master/README.md#7-eqobjects)
1. [findKey](https://github.com/deuxp/lotide/blob/master/README.md#8-findkey)
1. [findKeyByValue](https://github.com/deuxp/lotide/blob/master/README.md#9-findkeybyvalue)
1. [flatten](https://github.com/deuxp/lotide/blob/master/README.md#10-flatter)
1. [head](https://github.com/deuxp/lotide/blob/master/README.md#11-head)
1. [letterPositions](https://github.com/deuxp/lotide/blob/master/README.md#12-letterpositions)
1. [map](https://github.com/deuxp/lotide/blob/master/README.md#12-map)
1. [middle](https://github.com/deuxp/lotide/blob/master/README.md#13-middle)
1. [tail](https://github.com/deuxp/lotide/blob/master/README.md#14-tail)
1. [takeUntil](https://github.com/deuxp/lotide/blob/master/README.md#15-takeuntil)
1. [without](https://github.com/deuxp/lotide/blob/master/README.md#16-without)

---
## 1. assertArraysEqual

`assertArraysEqual(array1, array2)`: a function that determines whether 2 arrays are strictly equal.

#___Params___:

- (A) Type: array -- should be the array you want to test. Actual
- (B) type: array -- expected outcome.

___ Behaviour___:

dependancy: eqArrays(). Takes in a truthy statment based on a comparison made by calling back eqArrays(), then logs the results of that assertion to the console. Does not return a value.

---

## 2. assertEqual

`assertEqual(actual, expected)`: a function that determines whether two primitives are strictly equal.

___Params___:

- (a) primitive data type, to be tested.
- (b) the expected primitive data type.

___Behaviour___:
Uses strict equality `===` of the two primitives and then logs the results of the assertion to the console. Returns a Boolean value.

---

## 3. assertObjectsEqual

`assertObjectsEqual(obj1, obj2)`: is a function that determines whether two objects are strictly equal. Does not return a value.

___Params___:

- (a) the object to be tested. Actual.
- (b) the expected object. To test against.

___Behaviour___:

dependancy: eqObjects(). Takes in a truthy statment based on a comparison made by calling back eqObjects(), then logs the results of that assertion to the console. Does not return a value.

---

## 4. countLetters

`countLetters('string')`: a function that counts the letters of a string.

___Params___:

- (a) a String.

___Behaviour___:

Returns a new Object. The key/value pairs of the return object are comprised of letters that appear in the string and the numeric quantity of times they appear.

---

## 5. countOnly

`countOnly(allItems, itemsToCount)`: a function that counts the specified items from an array.

___Params___:

- (a) an array of items
- (b) an object of truthy values 

___Behaviour___:

The key from parameter B has a truthy value. If true and the key matches an item from parameter A, this returns an object of the items counted and their numerical quantity.

---

## 6. eqArrays

`eqArrays(array1, array2)`: is a function that determines whether 2 arrays are strictly equal.

___Params___:

- (a) array to test
- (b) the expected array to test against

___Behaviour___:

Returns a Boolean value. Loops through each of the items in the array testing for strict equality. Will return false if the index of the items are out of order.

---

## 7. eqObjects

`eqObjects(obj1, obj2)`: is a function that determines whether 2 objects are strictly equal.

___Params___:

- (a) object to test
- (b) the expected object to test against

___Behaviour___:

Returns a Boolean value. Loops through each of the key:value pairs in both objects testing for strict equality, using one array of keys.

---

## 8. findKey

`findKey(object, callback)`: returns the key of an object based on the criteria, defined in a callback function.

___Params___:

- (a) an object
- (b) a callback function

___Behaviour___:

Returns the first key, as a String, for which the callback returns a truthy value. If no key is found, it returns undefined.

---

## 9. findKeyByValue

`findKeyByValue(object, value)`: returns the first key of an objects property whos value matches the provided argument.

___Params___:

- (a) an object
- (b) any primitive value to check for

___Behaviour___:

Returns the first key, as a String, that matches the argument passed to the second parameter, by looping through the key:value pairs. If no key is found, it returns undefined.

---

## 10. flatten

`flatten(array)`: returns nested arrays as one flat array.

___Params___:

- (a) an array

___Behaviour___:

Iterates through the array and pushes each item to a new array. If the item is an array, it will be concatenated to the new array. Only works with one level of depth or nesting.

---

## 11. head

`head(array)`: returns the first item in an array.

___Params___:

- (a) an array

___Behaviour___:

Slices and returns a shallow copy of the first item of the array passed as an argument. Does not alter the array.

---

## 12. letterPositions

`letterPositions('string')`: Returns an object of letters that appear in the string and their index positions, listed in an array.

___Params___:

- (a) a String

___Behaviour___:

Returns a new Object with the letters that appear in the string as the keys, and the array of numbers representing thier index positions in the string. Upper Case and whitespace are ignored.

---

## 13. map

`map(array, callback)`: Performs a callback function on each item of an array.

___Params___:

- (a) an array
- (b) a callback function

___Behaviour___:

Returns a new array based on the results of a callback function being performed on each item in the array.

---

## 14. middle

`middle(array)`: Return the middle item or items of an array.

___Params___:

- (a) an array

___Behaviour___:

Returns a new array that contains the middle item of an array passed as an argument. If the array length is even numbered, the two middle items will be returned. 

---

## 15. tail

`tail(array)`: Returns an array of all items except for the first one.

___Params___:

- (a) an array

___Behaviour___:

Returns a new array that contains the all items of an array passed as an argument, except for the item at index[0]. If the argument passed is an array of one item or less, the function will return an empty array.

---

## 16. takeUntil

`takeUntil(array, callback)`: Returns a new array, from the beginning up to an item that evaluates to true, based on a truthy evaluation of a callback.

___Params___:

- (a) an array
- (b) a callback function

___Behaviour___:

Returns a new array, by looping the array, comparing for strict equality, every item to a value provided by the callback function. The value provided by the callback is the item in the list you want to stop at. The new array is every item up until said value.

---

## 17. without

`without(source, itemsToRemove)`: Returns an array without the items specified.

___Params___:

- (a) an source array
- (b) an array of items to remove 

___Behaviour___:

Returns a new array of items without certain items specified by another array passed in as an argument in parameter b, by iterating through the list of unwanted items and filtering each one out at every pass.

---
