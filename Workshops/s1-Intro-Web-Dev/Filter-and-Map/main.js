let numbers = [1,2,3,4,5,6,7,8,9]

let oddNumbers = []

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 !== 0) {
    oddNumbers.push(numbers[i]);
  }
}

//console.log(oddNumbers);

let oddNumbersTwo = [];

numbers.forEach((number) => number % 2 !== 0 ? oddNumbersTwo.push(number) : null)
//console.log("Odd numbers forEach:", oddNumbersTwo);

// ONE
// Map is an array method that takes an argument. This argument takes
// a minimum of two arguments. the first being the item/element being iterated
// over, the second being the index of the item being iterated over.
// Map returns a "new" array based upon what the function passed to the method
// returns.

let mappedOddNumbers = numbers.map((number) => (number%2 !== 0) ? number : (number + 1))
//console.log("Mapped odd numbers", mappedOddNumbers)


let numObjects = []

for (let i = 0; i < numbers.length; i++) {
  numObjects.push({num: numbers[i]});
}

//console.log(numObjects);

// Number objects array via map
let numMappedObjects = numbers.map((number) => ({num: number}));
//console.log(numMappedObjects);

// Explicit return example
let explicitMappedObjects = numbers.map((number) => { return {num: number}});
//console.log(explicitMappedObjects);


// FILTER

let lessThanFour = []

for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] < 4)
      lessThanFour.push(numbers[i]);
}

//console.log(lessThanFour);

// Filter is an array method that takes a function as an argument and based upon
// the truthiness of the conditional that the function returns for each item
// iterated over, returns a new array of the original array's elements if and
// only if that element being interated over meets the conditional in the function.

let filteredLessThanFour = numbers.filter((number) => number < 4)
//console.log(filteredLessThanFour);

let filteredEvenNumbers = numbers.filter(number => number % 2 === 0);
//console.log(filteredEvenNumbers);

let numbersLessThanFive = numbers.filter(number => number < 5).map(number => ({num: number}));
console.log(numbersLessThanFive);
