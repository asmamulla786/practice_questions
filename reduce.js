//01-----------------------------------sumOf------------------------------------

const add = function (number1, number2) {
  return number1 + number2;
};

const sumOf = function (numbers) {
  return numbers.reduce(add, 0);
};

//02---------------------------------productOf----------------------------------

const product = function (multiplier, multiplicand) {
  return multiplicand * multiplier;
};

const productOf = function (numbers) {
  return numbers.reduce(productOf, 1);
};

//03---------------------------------averageOf----------------------------------

const averageOf = function (numbers) {
  const sum = sumOf(numbers);

  return sum / numbers.length;
};

// minOf([3, 1, 4, 1, 5, 9, 2]) => 1
const minOf = function (numbers) {};

// maxOf([3, 1, 4, 1, 5, 9, 2]) => 9
const maxOf = function (numbers) {};

//04----------------------------sumPositiveNumbers-----------------------------

const isPositive = function (number) {
  return number > 0;
};

const sumPositiveNumbers = function (numbers) {
  return numbers.filter(isPositive).reduce(add, 0);
};

//05-------------------------------sumOfSquares--------------------------------

const square = function (number) {
  return number * number;
};

const sumOfSquares = function (numbers) {
  return numbers.map(square).reduce(add, 0);
};

//06------------------------------sumOfOddNumbers-------------------------------

const isOdd = function (number) {
  return number % 2 === 1;
};

const sumOfOddNumbers = function (numbers) {
  return numbers.filter(isOdd).reduce(add, 0);
};

//07---------------------------countNegativeNumbers----------------------------

const isNegative = function (count, number) {
  return isPositive(number) ? count : count + 1;
};

const countNegativeNumbers = function (numbers) {
  return numbers.reduce(isNegative, 0);
};

//08---------------------------findSumOfEvenSquares----------------------------

const isEven = function (number) {
  return !isOdd(number);
};

const findSumOfEvenSquares = function (numbers) {
  return numbers.map(square).filter(isEven).reduce(add, 0);
};

//09-----------------------------concatenateWords------------------------------

const concatenateWords = function (words) {
  return words.reduce(add, "");
};

//10--------------------------------longestWord---------------------------------

const longWord = function (word1, word2) {
  return word1.length >= word2.length ? word1 : word2;
};

const longestWord = function (words) {
  return words.reduce(longWord, "");
};

//11-------------------------------shortestWord--------------------------------

const shortWord = function (word1, word2) {
  return word1.length <= word2.length ? word1 : word2;
};

const shortestWord = function (words) {
  return words.reduce(shortWord);
};

//12 joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"
const joinWithComma = function (words) {};

//13-------------------------------ReverseWords--------------------------------

const pushWord = function (array, word) {
  array.unshift(word);
  return array;
};

const reverseWords = function (words) {
  return words.reduce(pushWord, []).join(" ");
};

//14----------------------------joinWordsWithSpace-----------------------------

// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
const joinWordsWithSpace = function (words) {};

//15-----------------------------concatenateNames------------------------------

const concatenateNames = function (names) {
  return names.reduce(add, "");
};

//16----------------------------countVowelsInWords-----------------------------

const isVowel = function (character) {
  return "aeiouAEIOU".includes(character);
};

const addVowels = function (vowels, word) {
  vowels += [...word].filter(isVowel).join("");

  return vowels;
};

const countVowelsInWords = function (words) {
  return words.reduce(addVowels, "");
};

//17-------------------------------makeCamelCase--------------------------------

const camelCase = function (camelCaseWords, word) {
  return camelCaseWords + word.replace(word[0], word[0].toUpperCase());
};

const makeCamelCase = function (words) {
  return words.reduce(camelCase, "");
};

//18-------------------------------reverseString--------------------------------

const addReversedWord = function (reversedWords, word) {
  return (reversedWords += [...word].reverse().join(""));
};

const reverseString = function (words) {
  return words.reduce(addReversedWord, "");
};

//19-----------------------------duplicateNumbers------------------------------

const duplicateNumber = function (array, number) {
  array.push(number);
  array.push(number);

  return array;
};

const duplicateNumbers = function (numbers) {
  return numbers.reduce(duplicateNumber, []);
};

//20-----------------------------concatenateArrays------------------------------

const addElements = function (array, elements) {
  array.push(elements);

  return array.flat();
};

const concatenateArrays = function (arrays) {
  return arrays.reduce(addElements, []);
};

//21-------------------------------flattenArray--------------------------------

const flattenArray = function (arrays) {
  return arrays.reduce(addElements, []);
};

//22-------------------------------uniqueNumbers--------------------------------

const addIfItIsNotPresent = function (array, number) {
  if (!array.includes(number)) {
    array.push(number);
  }

  return array;
};

const uniqueNumbers = function (numbers) {
  return numbers.reduce(addIfItIsNotPresent, []);
};

//23-------------------------------groupByLength--------------------------------

const addIntoObject = function (object, string) {
  if (!object[string.length]) {
    object[string.length] = [];
  }
  object[string.length].push(string);

  return object;
};

const groupByLength = function (strings) {
  return strings.reduce(addIntoObject, {});
};

//24-----------------------------countOccurrences------------------------------

const countOccurence = function (object, string) {
  if (!(string in object)) {
    object[string] = 0;
  }

  object[string] = object[string] + 1;
  return object;
};

const countOccurrences = function (strings) {
  return strings.reduce(countOccurence, {});
};

//25--------------------------------mergeObjects--------------------------------

// mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]) => { a: 6, b: 5, c: 4 }
const mergeObject = function (mergedObject, object) {};
const mergeObjects = function (objects) {
  objects.reduce(mergeObject, {});
};

//26------------------------------------zip------------------------------------

const zip = function (keys, values) {
  return keys.reduce(function (object, key, index) {
    object[key] = values[index];
    return object;
  }, {});
};

//27---------------------------------makeObject---------------------------------

const makeObject = function (keys, values) {
  return zip(keys, values);
};

//28--------------------------------invertObject--------------------------------

const invertKeyValue = function (invertedObject, object) {
  invertedObject[object[1]] = object[0];
  return invertedObject;
};

const invertObject = function (obj) {
  return Object.entries(obj).reduce(invertKeyValue, {});
};

//29--------------------------------mergeArrays--------------------------------

const addToObject = function (object, keyValueArray) {
  object[keyValueArray[0]] = keyValueArray[1];
  return object;
};

const mergeArrays = function (arr1, arr2) {
  const mergedArray = arr1.reduce(addToObject, {});
  return arr2.reduce(addToObject, mergedArray);
};

//30------------------------------groupByProperty------------------------------

// groupByProperty([{name: "John", age: 25}, {name: "Jane", age: 30}]) => { 25: [{name: "John", age: 25}], 30: [{name: "Jane", age: 30}] }
const groupByProperty = function (objects) {};

//31------------------------------ascendingGroups------------------------------

const addToGroup = function (group, number) {
  const lastNumber = group.at(-1).at(-1);
  if (lastNumber + 1 !== number) {
    group.push([]);
  }

  group.at(-1).push(number);
  return group;
};

const ascendingGroups = function (numbers) {
  const ascendingGroup = numbers.reduce(addToGroup, [[Infinity]]);
  ascendingGroup.shift();
  return ascendingGroup;
};

// flattenToObject([['a', 1], ['b', 2], ['c', 3]]) => { a: 1, b: 2, c: 3 }
const flattenToObject = function (pairs) {};

// longestString(["apple", "banana", "cherry", "dates"]) => "banana"
const longestString = function (strings) {};

// mergeIntervals([[1,3], [2,4], [5,7]]) => [[1, 4], [5, 7]]
const mergeIntervals = function (intervals) {};

// sumAndCount([1, 2, 3, 4]) => { sum: 10, count: 4 }
const sumAndCount = function (numbers) {};

// deepFlatten([[1,2], [3,4, [5,6]], 7]) => [1,2,3,4,5,6,7]
const deepFlatten = function (arr) {};

// findMax([1, 2, 3, 4, 5]) => 5
const findMax = function (numbers) {};

// cumulativeSum([1,2,3,4]) => [1, 3, 6, 10]
const cumulativeSum = function (numbers) {};

// equalChunksOfAtLeast([1, 1, 1, 2, 2, 5, 1, 1]) => [[1,1,1], [2,2], [1,1]]
const equalChunksOfAtLeast = function (numbers) {};

// groupByType([1, 'a', 2, 'b', 3, 'c', 4]) => { number: [1, 2, 3, 4], string: ['a', 'b', 'c'] }
const groupByType = function (array) {};

// runningAverages([1, 2, 3, 4]) => [1, 1.5, 2, 2.5]
const runningAverages = function (numbers) {};

// flattenObject({a: {b: {c: 1}}, d: {e: 2}}) => { 'a.b.c': 1, 'd.e': 2 }
const flattenObject = function (obj) {};

// splitIntoSubarrays([1,2,3,4,5,6,7], 3) => [[1,2,3], [4,5,6], [7]]
const splitIntoSubarrays = function (arr, size) {};

// groupByFirstLetter(["apple", "banana", "cherry", "date"]) => { a: ["apple"], b: ["banana"], c: ["cherry"], d: ["date"] }
const groupByFirstLetter = function (words) {};

// findFirstNonRepeated([1,2,3,4,2,1,5]) => 3
const findFirstNonRepeated = function (numbers) {};

// countVowels(["apple", "banana", "grape"]) => { a: 6, e: 3, i: 0, o: 0, u: 0 }
const countVowels = function (words) {};

// mergeConsecutiveDuplicates([1,1,1,2,3,3,4]) => [1,2,3,4]
const mergeConsecutiveDuplicates = function (array) {};

// longestConsecutiveSubsequence([1, 2, 0, 1, 3, 4, 5]) => [0, 1, 2, 3, 4, 5]
const longestConsecutiveSubsequence = function (numbers) {};

// topKFrequent([1,1,1,2,2,3], 2) => [1, 2]
const topKFrequent = function (numbers, k) {};

// nestedAverage([[[1, 2]], [3, 4], [5, [6, 7]]]) => 4
const nestedAverage = function (nestedNumbers) {};

// cartesianProduct([1, 2], ['a', 'b']) => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
const cartesianProduct = function (arr1, arr2) {};

// groupByDate([{ date: '2024-01-01', value: 10 }, { date: '2024-01-01', value: 20 }, { date: '2024-01-02', value: 30 }]) => { '2024-01-01': [10, 20], '2024-01-02': [30] }
const groupByDate = function (records) {};

// findMinMax([1, 2, 3, 4, 5]) => { min: 1, max: 5 }
const findMinMax = function (numbers) {};

// sumByCategory([{ category: 'A', value: 10 }, { category: 'B', value: 20 }, { category: 'A', value: 30 }]) => { A: 40, B: 20 }
const sumByCategory = function (items) {};

//--------------------------------TESSTING PART--------------------------------

function printMessage(actual, expected) {
  console.log("\nexpected :: ", expected);
  console.log("actual   :: ", actual);
}

function testSumOf() {
  printMessage(sumOf([1, 2, 3, 4, 5]), 15);
  printMessage(sumOf([]), 0);
}

function testAll() {
  testSumOf();
}

testAll();
