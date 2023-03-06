"use strict";

// 1
function numPow(a, b) {
  if (b === 1) return a;
  else return a * numPow(a, b - 1);
}

// 2
// [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]] => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\

function concatArr(arr) {
  let newArr = [];
  arr.forEach((el) => {
    typeof el === "number" ? newArr.push(el) : concatArr(el);
  });
  return newArr;
}

// 3
const oneDigit = [
  "ноль",
  "один",
  "два",
  "три",
  "четыре",
  "пять",
  "шесть",
  "семь",
  "восемь",
  "девять",
  "одна тысяча",
  "две тысячи",
  "три тысячи",
  "четыре тысячи",
];

// Indexes from 10 to 13 of the array are for unique number of thousands

const tens = [
  "десять",
  "двадцать",
  "тридцать",
  "сорок",
  "пятьдесят",
  "шестьдесят",
  "семьдесят",
  "восемьдесят",
  "девяносто",
];
const hundreds = [
  "сто",
  "двести",
  "триста",
  "четыреста",
  "пятьсот",
  "шестьсот",
  "семьсот",
  "восемьсот",
  "девятьсот",
];

const elevenToNineteen = [
  "одиннадцать",
  "двенадцать",
  "тринадцать",
  "четырнадцать",
  "пятнадцать",
  "шестнадцать",
  "семнадцать",
  "восемнадцать",
  "девятнадцать",
];

function numberToText(number) {
  // Conver input number to a string to find out the length of it and then make a slice method (later)
  const numToString = String(number);

  if (numToString.length === 1) {
    return oneDigit[+numToString];
  } else if (numToString.length === 2) {
    return number % 10 === 0
      ? // Check if the number is multiple of 10

        tens[numToString[0] - 1]
      : numToString[0] === "1"
      ? // Check if the number has uniqie text entry (11-19)

        elevenToNineteen[numToString[1] - 1]
      : // Other cases

        `${tens[numToString[0] - 1]} ${oneDigit[numToString[1]]}`;
  } else if (numToString.length === 3) {
    return number % 100 === 0
      ? // Check if the number is multiple of 100

        hundreds[numToString[0] - 1]
      : // Other cases

        `${hundreds[+numToString.slice(0, 1) - 1]} ${numberToText(
          +numToString.slice(1)
        )}`;
  } else if (
    // Checking if the number of thousands has not unique entry (11 to 199)
    // Also checking if the number of thousands has unique entry (1 to 4)

    numToString.slice(-5, -4) !== "1" &&
    +numToString.slice(-4, -3) >= 1 &&
    +numToString.slice(-4, -3) <= 4
  ) {
    return numToString.length !== 4
      ? // Slicing the last digit of thousands and adding zero
        // to complete the entry of thousands with unique entries (1 to 4)

        `${numberToText(+(numToString.slice(0, -4) + "0"))} ${
          oneDigit[+numToString.slice(-4, -3) + 9]
        } ${numberToText(+numToString.slice(-3))}`
      : // Converting the 4-digit number (without adding zero)

        `${oneDigit[+numToString.slice(-4, -3) + 9]} ${numberToText(
          +numToString.slice(-3)
        )}`;
  } else {
    // Other cases
    // The input number can be from 0 to 999 999

    return `${numberToText(+numToString.slice(0, -3))} тысяч ${numberToText(
      +numToString.slice(-3)
    )}`;
  }
}
