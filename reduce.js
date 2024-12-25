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

//04-----------------------------------minOf------------------------------------

const minimumNumber = function (number1, number2) {
  return number1 < number2 ? number1 : number2;
};

const minOf = function (numbers) {
  return numbers.reduce(minimumNumber, Infinity);
};

//05-----------------------------------maxOf------------------------------------

const maximumNumber = function (number1, number2) {
  return number1 > number2 ? number1 : number2;
};

const maxOf = function (numbers) {
  return numbers.reduce(maximumNumber, -Infinity);
};

//06----------------------------sumPositiveNumbers-----------------------------

const isPositive = function (number) {
  return number > 0;
};

const sumPositiveNumbers = function (numbers) {
  return numbers.filter(isPositive).reduce(add, 0);
};

//07-------------------------------sumOfSquares--------------------------------

const square = function (number) {
  return number * number;
};

const sumOfSquares = function (numbers) {
  return numbers.map(square).reduce(add, 0);
};

//08------------------------------sumOfOddNumbers-------------------------------

const isOdd = function (number) {
  return number % 2 === 1;
};

const sumOfOddNumbers = function (numbers) {
  return numbers.filter(isOdd).reduce(add, 0);
};

//09---------------------------countNegativeNumbers----------------------------

const isNegative = function (count, number) {
  return isPositive(number) ? count : count + 1;
};

const countNegativeNumbers = function (numbers) {
  return numbers.reduce(isNegative, 0);
};

//10---------------------------findSumOfEvenSquares----------------------------

const isEven = function (number) {
  return !isOdd(number);
};

const findSumOfEvenSquares = function (numbers) {
  return numbers.map(square).filter(isEven).reduce(add, 0);
};

//11-----------------------------concatenateWords------------------------------

const concatenateWords = function (words) {
  return words.reduce(add, "");
};

//12--------------------------------longestWord---------------------------------

const longWord = function (word1, word2) {
  return word1.length >= word2.length ? word1 : word2;
};

const longestWord = function (words) {
  return words.reduce(longWord, "");
};

//13-------------------------------shortestWord--------------------------------

const shortWord = function (word1, word2) {
  return word1.length <= word2.length ? word1 : word2;
};

const shortestWord = function (words) {
  return words.reduce(shortWord);
};

//14 joinWithComma(["apple", "banana", "cherry"]) => "apple,banana,cherry"
const joinWithComma = function (words) {};

//15-------------------------------ReverseWords--------------------------------

const pushWord = function (array, word) {
  array.unshift(word);
  return array;
};

const reverseWords = function (words) {
  return words.reduce(pushWord, []).join(" ");
};

//16----------------------------joinWordsWithSpace-----------------------------

// joinWordsWithSpace(["apple", "banana", "cherry"]) => "apple banana cherry"
const joinWordsWithSpace = function (words) {};

//17-----------------------------concatenateNames------------------------------

const concatenateNames = function (names) {
  return names.reduce(add, "");
};

//18----------------------------countVowelsInWords-----------------------------

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

//19-------------------------------makeCamelCase--------------------------------

const camelCase = function (camelCaseWords, word) {
  return camelCaseWords + word.replace(word[0], word[0].toUpperCase());
};

const makeCamelCase = function (words) {
  return words.reduce(camelCase, "");
};

//20-------------------------------reverseString--------------------------------

const addReversedWord = function (reversedWords, word) {
  return (reversedWords += [...word].reverse().join(""));
};

const reverseString = function (words) {
  return words.reduce(addReversedWord, "");
};

//21-----------------------------duplicateNumbers------------------------------

const duplicateNumber = function (array, number) {
  array.push(number);
  array.push(number);

  return array;
};

const duplicateNumbers = function (numbers) {
  return numbers.reduce(duplicateNumber, []);
};

//22-----------------------------concatenateArrays------------------------------

const addElements = function (array, elements) {
  array.push(elements);

  return array.flat(Infinity);
};

const concatenateArrays = function (arrays) {
  return arrays.reduce(addElements, []);
};

//23-------------------------------flattenArray--------------------------------

const flattenArray = function (arrays) {
  return arrays.reduce(addElements, []);
};

//24-------------------------------uniqueNumbers--------------------------------

const addIfItIsNotPresent = function (array, number) {
  if (!array.includes(number)) {
    array.push(number);
  }

  return array;
};

const uniqueNumbers = function (numbers) {
  return numbers.reduce(addIfItIsNotPresent, []);
};

//25-------------------------------groupByLength--------------------------------

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

//26-----------------------------countOccurrences------------------------------

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

//27--------------------------------mergeObjects--------------------------------

// mergeObjects([{ a: 1, b: 2 }, { b: 3, c: 4 }, { a: 5 }]) => { a: 6, b: 5, c: 4 }
const mergeObject = function (mergedObject, object) {};
const mergeObjects = function (objects) {
  objects.reduce(mergeObject, {});
};

//28------------------------------------zip------------------------------------

const zip = function (keys, values) {
  return keys.reduce(function (object, key, index) {
    object[key] = values[index];
    return object;
  }, {});
};

//29---------------------------------makeObject---------------------------------

const makeObject = function (keys, values) {
  return zip(keys, values);
};

//30--------------------------------invertObject--------------------------------

const invertKeyValue = function (invertedObject, object) {
  invertedObject[object[1]] = object[0];
  return invertedObject;
};

const invertObject = function (obj) {
  return Object.entries(obj).reduce(invertKeyValue, {});
};

//31--------------------------------mergeArrays--------------------------------

const addToObject = function (object, pair) {
  object[pair[0]] = pair[1];
  return object;
};

const mergeArrays = function (arr1, arr2) {
  const mergedArray = arr1.reduce(addToObject, {});
  return arr2.reduce(addToObject, mergedArray);
};

//32------------------------------groupByProperty------------------------------

// groupByProperty([{name: "John", age: 25}, {name: "Jane", age: 30}]) => { 25: [{name: "John", age: 25}], 30: [{name: "Jane", age: 30}] }
const groupByProperty = function (objects) {};

//33------------------------------ascendingGroups------------------------------

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

//34------------------------------flattenToObject------------------------------

const flattenToObject = function (pairs) {
  return pairs.reduce(addToObject, {});
};

//35-------------------------------longestString-------------------------------

const longestString = function (strings) {
  return longestWord(strings);
};

//36-------------------------------mergeIntervals-------------------------------

// mergeIntervals([[1,3], [2,4], [5,7]]) => [[1, 4], [5, 7]]
const mergeIntervals = function (intervals) {};

//37--------------------------------sumAndCount--------------------------------

const sumAndCount = function (numbers) {
  return { sum: sumOf(numbers), count: numbers.length };
};

//38--------------------------------deepFlatten--------------------------------

const deepFlatten = function (arr) {
  return arr.reduce(addElements, []);
};

//39----------------------------------findMax----------------------------------

const findMax = function (numbers) {
  return maxOf(numbers);
};

//40-------------------------------cumulativeSum-------------------------------

// cumulativeSum([1,2,3,4]) => [1, 3, 6, 10]
// const cumulativeSum = function (numbers) {
//   return numbers.reduce(
//     (function () {
//       let sum = 0;
//       return function (arrayOfSums, number) {
//         sum = sum + number;
//         arrayOfSums.push(sum);
//         return arrayOfSums;
//       };
//     })(),
//     []
//   );
// };

const pushSum = function (sums, number) {
  const sum = sums.at(-1) + number;
  sums.push(sum);
  return sums;
};

const cumulativeSum = function (numbers) {
  const sums = numbers.reduce(pushSum, [0]);
  sums.shift();
  return sums;
};

//41----------------------------equalChunksOfAtLeast----------------------------

// equalChunksOfAtLeast([1, 1, 1, 2, 2, 5, 1, 1]) => [[1,1,1], [2,2], [1,1]]
const equalChunksOfAtLeast = function (numbers) {};

//42--------------------------------groupByType--------------------------------

const addToGroupByType = function (object, element) {
  if (!(typeof element in object)) {
    object[typeof element] = [];
  }

  object[typeof element].push(element);

  return object;
};

const groupByType = function (array) {
  return array.reduce(addToGroupByType, {});
};

//43------------------------------runningAverages------------------------------

// runningAverages([1, 2, 3, 4]) => [1, 1.5, 2, 2.5]
const runningAverages = function (numbers) {
  return numbers.reduce(runningAverages);
};

//44-----------------------------flattenObject-----------------------------

// flattenObject({a: {b: {c: 1}}, d: {e: 2}}) => { 'a.b.c': 1, 'd.e': 2 }
const flattenObject = function (obj) {};

//45-----------------------------splitIntoSubarrays-----------------------------

const splitIntoSubarrays = function (arr, size) {
  return arr.reduce(
    function (chunksArray, element) {
      if (chunksArray.at(-1).length === size) {
        chunksArray.push([]);
      }

      chunksArray.at(-1).push(element);

      return chunksArray;
    },
    [[]]
  );
};

//46-----------------------------groupByFirstLetter-----------------------------

const pointToFirstLetter = function (object, word) {
  if (!(word[0] in object)) {
    object[word[0]] = [];
  }

  object[word[0]].push(word);
  return object;
};

const groupByFirstLetter = function (words) {
  return words.reduce(pointToFirstLetter, {});
};

//46-----------------------------findFirstNonRepeated-----------------------------

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

//55-------------------------------sumByCategory-------------------------------

const categorySums = function (object, { category, value }) {
  if (!(category in object)) {
    object[category] = 0;
  }

  object[category] += value;
  return object;
};

const sumByCategory = function (items) {
  return items.reduce(categorySums, {});
};
