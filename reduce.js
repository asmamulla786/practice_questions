// ------------------------------------sumOf------------------------------------

const add = function (number1, number2) {
  return number1 + number2;
};

const sumOf = function (numbers) {
  return numbers.reduce(add, 0);
};

// ----------------------------------productOf----------------------------------

const product = function (multiplier, multiplicand) {
  return multiplicand * multiplier;
};

const productOf = function (numbers) {
  return numbers.reduce(productOf, 1);
};

// ----------------------------------averageOf----------------------------------

const averageOf = function (numbers) {
  const sum = sumOf(numbers);

  return sum / numbers.length;
};

// minOf([3, 1, 4, 1, 5, 9, 2]) => 1
const minOf = function (numbers) { };

// maxOf([3, 1, 4, 1, 5, 9, 2]) => 9
const maxOf = function (numbers) { };

// -----------------------------sumPositiveNumbers-----------------------------

const isPositive = function (number) {
  return number > 0;
};

const sumPositiveNumbers = function (numbers) {
  return numbers.filter(isPositive).reduce(add, 0);
};

// --------------------------------sumOfSquares--------------------------------

const square = function (number) {
  return number * number;
};

const sumOfSquares = function (numbers) {
  return numbers.map(square).reduce(add, 0);
};

// -------------------------------sumOfOddNumbers-------------------------------

const isOdd = function (number) {
  return number % 2 === 1;
};

const sumOfOddNumbers = function (numbers) {
  return numbers.filter(isOdd).reduce(add, 0);
};

// ----------------------------countNegativeNumbers----------------------------

const isNegative = function (count, number) {
  return isPositive(number) ? count : count + 1;
};

const countNegativeNumbers = function (numbers) {
  return numbers.reduce(isNegative, 0);
};

// ----------------------------findSumOfEvenSquares----------------------------

const isEven = function (number) {
  return !isOdd(number);
};

const findSumOfEvenSquares = function (numbers) {
  return numbers.map(square).filter(isEven).reduce(add, 0);
};

// ------------------------------concatenateWords------------------------------

const concatenateWords = function (words) {
  return words.reduce(add, "");
}

// ---------------------------------longestWord---------------------------------

const longWord = function (word1, word2) {
  return word1.length >= word2.length ? word1 : word2;
};

const longestWord = function (words) {
  return words.reduce(longWord, "");
};

// --------------------------------shortestWord--------------------------------

const shortWord = function (word1, word2) {
  return word1.length <= word2.length ? word1 : word2;
};

const shortestWord = function (words) {
  return words.reduce(shortWord);
}

// joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"
const joinWithComma = function (words) {

};

// --------------------------------ReverseWords--------------------------------

const pushWord = function (array, word) {
  array.unshift(word);
  return array;
};

const reverseWords = function (words) {
  return words.reduce(pushWord, []).join(" ");
};

// -----------------------------joinWordsWithSpace-----------------------------

// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
const joinWordsWithSpace = function (words) {

};

// ------------------------------concatenateNames------------------------------

const concatenateNames = function (names) {
  return names.reduce(add, "");
};

// -----------------------------countVowelsInWords-----------------------------

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

// --------------------------------makeCamelCase--------------------------------

const camelCase = function (camelCaseWords, word) {
  return camelCaseWords + word.replace(word[0], word[0].toUpperCase());
};

const makeCamelCase = function (words) {
  return words.reduce(camelCase, "");
};

// --------------------------------reverseString--------------------------------

const addReversedWord = function (reversedWords, word) {
  return reversedWords += [...word].reverse().join("");
}

const reverseString = function (words) {
  return words.reduce(addReversedWord, "");
};

// ------------------------------duplicateNumbers------------------------------

const duplicateNumber = function (array, number) {
  array.push(number);
  array.push(number);

  return array;
};

const duplicateNumbers = function (numbers) {
  return numbers.reduce(duplicateNumber, []);
};

// concatenateArrays([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const concatenateArrays = function (arrays) { }

// flattenArray([[1, 2], [3, 4], [5, 6]]) => [1, 2, 3, 4, 5, 6]
const flattenArray = function (arrays) { }

// uniqueNumbers([1, 2, 2, 3, 4, 4, 5]) => [1, 2, 3, 4, 5]
const uniqueNumbers = function (numbers) { }

// groupByLength(["apple", "banana", "cherry", "date"]) => { 5: ["apple", "cherry"], 6: ["banana"], 4: ["date"] }
const groupByLength = function (strings) { }

// countOccurrences(["apple", "banana", "cherry", "banana"]) => { apple: 1, banana: 2, cherry: 1 }
const countOccurrences = function (strings) { }

// mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]) => { a: 6, b: 5, c: 4 }
const mergeObjects = function (objects) { }

// zip(["a", "b", "c"], [1, 2, 3]) => { "a": 1, "b": 2, "c": 3 }
const zip = function (keys, values) { }

// makeObject(["city", "country"], ["Paris", "France"]) => { "city": "Paris", "country": "France" }
const makeObject = function (keys, values) { }

// invertObject({ "a": 1, "b": 2, "c": 3 }) => { 1: "a", 2: "b", 3: "c" }
const invertObject = function (obj) { }

// mergeArrays([["a", 1], ["b", 2]], [["c", 3], ["d", 4]]) => { "a": 1, "b": 2, "c": 3, "d": 4 }
const mergeArrays = function (arr1, arr2) { }

// groupByProperty([{name: "John", age: 25}, {name: "Jane", age: 30}]) => { 25: [{name: "John", age: 25}], 30: [{name: "Jane", age: 30}] }
const groupByProperty = function (objects) { }

// ascendingGroups([1,2,3,4,3,4,5,10,6,7,8,9]) => [[1,2,3,4],[3,4,5],[10],[6,7,8,9]]
const ascendingGroups = function (numbers) { }

// flattenToObject([['a', 1], ['b', 2], ['c', 3]]) => { a: 1, b: 2, c: 3 }
const flattenToObject = function (pairs) { }

// longestString(["apple", "banana", "cherry", "dates"]) => "banana"
const longestString = function (strings) { }

// mergeIntervals([[1,3], [2,4], [5,7]]) => [[1, 4], [5, 7]]
const mergeIntervals = function (intervals) { }

// sumAndCount([1, 2, 3, 4]) => { sum: 10, count: 4 }
const sumAndCount = function (numbers) { }

// deepFlatten([[1,2], [3,4, [5,6]], 7]) => [1,2,3,4,5,6,7]
const deepFlatten = function (arr) { }

// findMax([1, 2, 3, 4, 5]) => 5
const findMax = function (numbers) { }

// cumulativeSum([1,2,3,4]) => [1, 3, 6, 10]
const cumulativeSum = function (numbers) { }

// equalChunksOfAtLeast([1, 1, 1, 2, 2, 5, 1, 1]) => [[1,1,1], [2,2], [1,1]]
const equalChunksOfAtLeast = function (numbers) { }

// groupByType([1, 'a', 2, 'b', 3, 'c', 4]) => { number: [1, 2, 3, 4], string: ['a', 'b', 'c'] }
const groupByType = function (array) { }

// runningAverages([1, 2, 3, 4]) => [1, 1.5, 2, 2.5]
const runningAverages = function (numbers) { }

// flattenObject({a: {b: {c: 1}}, d: {e: 2}}) => { 'a.b.c': 1, 'd.e': 2 }
const flattenObject = function (obj) { }

// splitIntoSubarrays([1,2,3,4,5,6,7], 3) => [[1,2,3], [4,5,6], [7]]
const splitIntoSubarrays = function (arr, size) { }

// groupByFirstLetter(["apple", "banana", "cherry", "date"]) => { a: ["apple"], b: ["banana"], c: ["cherry"], d: ["date"] }
const groupByFirstLetter = function (words) { }

// findFirstNonRepeated([1,2,3,4,2,1,5]) => 3
const findFirstNonRepeated = function (numbers) { }

// countVowels(["apple", "banana", "grape"]) => { a: 6, e: 3, i: 0, o: 0, u: 0 }
const countVowels = function (words) { }

// mergeConsecutiveDuplicates([1,1,1,2,3,3,4]) => [1,2,3,4]
const mergeConsecutiveDuplicates = function (array) { }

// longestConsecutiveSubsequence([1, 2, 0, 1, 3, 4, 5]) => [0, 1, 2, 3, 4, 5]
const longestConsecutiveSubsequence = function (numbers) { }

// topKFrequent([1,1,1,2,2,3], 2) => [1, 2]
const topKFrequent = function (numbers, k) { }

// nestedAverage([[[1, 2]], [3, 4], [5, [6, 7]]]) => 4
const nestedAverage = function (nestedNumbers) { }

// cartesianProduct([1, 2], ['a', 'b']) => [[1, 'a'], [1, 'b'], [2, 'a'], [2, 'b']]
const cartesianProduct = function (arr1, arr2) { }

// groupByDate([{ date: '2024-01-01', value: 10 }, { date: '2024-01-01', value: 20 }, { date: '2024-01-02', value: 30 }]) => { '2024-01-01': [10, 20], '2024-01-02': [30] }
const groupByDate = function (records) { }

// findMinMax([1, 2, 3, 4, 5]) => { min: 1, max: 5 }
const findMinMax = function (numbers) { }

// sumByCategory([{ category: 'A', value: 10 }, { category: 'B', value: 20 }, { category: 'A', value: 30 }]) => { A: 40, B: 20 }
const sumByCategory = function (items) { }

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
