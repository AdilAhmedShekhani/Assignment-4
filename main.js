// Write a function that takes an array of numbers as input and returns the sum of all even numbers in the array.

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const AddofEven = sumEvenNumbers(numbers);

function sumEvenNumbers(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      sum += numbers[i];
    }
  }
  return sum;
}
console.log(AddofEven);

// Write a function that takes a string as input and returns the number of vowels in the string.
const string = "Hello World";
const NumbersOfVowels = getTheNumbersOfVowels(string);

function getTheNumbersOfVowels(string) {
  let vowelString = "";
  for (let index = 0; index < string.length; index++) {
    const element = string[index];

    if (element == "a") {
      vowelString += element;
    } else if (element == "e") {
      vowelString += element;
    } else if (element == "i") {
      vowelString += element;
    } else if (element == "o") {
      vowelString += element;
    } else if (element == "u") {
      vowelString += element;
    }
  }
  return vowelString.length;
}
console.log(NumbersOfVowels);

// Write a function that takes an array of strings as input and returns the length of the longest string in the array.
const Fruit = ["apple", "banana", "pear", "grapefruit"];
const longestLength = LongestLength(Fruit);
function LongestLength(Fruit) {
  let maxLength = 0;
  for (let i = 0; i < Fruit.length; i++) {
    if (Fruit[i].length > maxLength) {
      maxLength = Fruit[i].length;
    }
  }
  return maxLength;
}
console.log(longestLength);

// Write a function that takes an array of numbers as input and returns the average of all the numbers in the array.
const primenum = [1, 2, 3, 4, 5];
function findaveragenumbers(array) {
  let average = 0;
  for (let i = 0; i < array.length; i++) {
    let currentNum = array[i];
    average += currentNum;
  }
  average = average / array.length;
  return average;
}
console.log(findaveragenumbers(primenum));

// Write a function that takes an object as input and returns an array of all the keys in the object.
let Details = { name: "John", age: 30, city: "New York" };
let result = getKeys(Details);

function getKeys(obj) {
  let keys = Object.keys(obj);
  return keys;
}

console.log(result);

// Write a function that takes an array of objects as input and returns an array of all the values for a specified key in each object.
let namedata = [
  { name: "John", age: 30 },
  { name: "Mary", age: 25 },
  { name: "Peter", age: 35 },
];

let values = ObjectValuesByKey(namedata, "name");
function ObjectValuesByKey(arr, key) {
  return arr.map((obj) => obj[key]);
}

console.log(values);

// Write a function that takes an array of strings as input and returns an array of all the unique strings in the array.
const Fruits = ["apple", "banana", "apple", "pear", "pear", "orange"];
const singlefruitname = getUniqueStrings(Fruits);

function getUniqueStrings(arr) {
  return [...new Set(arr)];
}

console.log(singlefruitname);

// Write a function that takes an array of numbers as input and returns the product of all the numbers in the array.
const normalnumbers = [1, 2, 3, 4, 5];
const multiply = ProductOfNumbers(normalnumbers);
function ProductOfNumbers(arr) {
  return arr.reduce((acc, cur) => acc * cur, 1);
}
console.log(multiply);
