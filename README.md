# Project: Lotide

## About

The Lotide project is inspired by the Lodash project, which is a utility library for JavaScript. While Lodash itself is quite powerful, our version of it is simpler in order to focus on learning the fundamentals of programming and data management using JavaScript.

The Lotide project is a library of useful data processing utilites for common Javascript tasks.

Draws heavily upon the Lodash library. But is considered a simpler derivative.

## table of contents

1. assertArraysEqual [An Internal Link to a Section Heading](/guides/content/editing-an-existing-page#modifying-front-matter)
1. assertEqual
1. assertObjectsEqual
1. countLetters
1. countOnly
1. eqArray
1. eqObjects
1. findKey
1. findKeyByValue
1. flatten
1. head
1. letterPositions
1. map
1. middle
1. tail
1. takeUntil
1. without

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

## Behaviour:
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

### 9. findKeyByValue

`findKeyByValue(object, value)`: returns the first key of an objects property whos value matches the provided argument.

___Params___:

- (a) an object
- (b) any primitive value to check for

___Behaviour___:

Returns the first key, as a String, that matches the argument passed to the second parameter, by looping through the key:value pairs. If no key is found, it returns undefined.

---

### 10. flatter

`flatten(array)`: returns nested arrays as one flat array.

___Params___:

- (a) an array

___Behaviour___:

Iterates through the array and pushes each item to a new array. If the item is an array, it will be concatenated to the new array. Only works with one level of depth or nesting.

---

### 11. head

`head(array)`: returns the first item in an array.

___Params___:

- (a) an array

___Behaviour___:

Slices and returns a shallow copy of the first item of the array passed as an argument. Does not alter the array.

---

### 12. letterPositions

`letterPositions('string')`: Returns an object of letters that appear in the string and their index positions, listed in an array.

___Params___:

- (a) a String

___Behaviour___:

Returns a new Object with the letters that appear in the string as the keys, and the array of numbers representing thier index positions in the string. Upper Case and whitespace are ignored.

---

### 12. map

`map(array, callback)`: Performs a callback function on each item of an array.

___Params___:

- (a) an array
- (b) a callback function

___Behaviour___:

Returns a new array based on the results of a callback function being performed on each item in the array.

---

## 13. middle

`middle(array)`: Return the middle item or items of an array.

___Params___:

- (a) an array

___Behaviour___:

Returns a new array that contains the middle item of an array passed as an argument. If the array length is even numbered, the two middle items will be returned. 

---

## 14. tail

`tail(array)`: Returns an array of all items except for the first one.

___Params___:

- (a) an array

___Behaviour___:

Returns a new array that contains the all items of an array passed as an argument, except for the item at index[0]. If the argument passed is an array of one item or less, the function will return an empty array.

---

## 15. takeUntil

`takeUntil(array, callback)`: Returns a new array, from the beginning up to an item that evaluates to true, based on a truthy evaluation of a callback.

___Params___:

- (a) an array
- (b) a callback function

___Behaviour___:

Returns a new array, by looping the array, comparing for strict equality, every item to a value provided by the callback function. The value provided by the callback is the item in the list you want to stop at. The new array is every item up until said value.

---

## 16. without

`without(source, itemsToRemove)`: Returns an array without the items specified.

___Params___:

- (a) an source array
- (b) an array of items to remove 

___Behaviour___:

Returns a new array of items without certain items specified by another array passed in as an argument in parameter b, by iterating through the list of unwanted items and filtering each one out at every pass.

---
