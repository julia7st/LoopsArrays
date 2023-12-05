let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const getPaired = (array) => {
  return array.filter(number => number % 2 === 0);
};
const pairedNumbers = getPaired(numbers);

const reversedPairedNumbers = pairedNumbers.reverse();
console.log(reversedPairedNumbers);







