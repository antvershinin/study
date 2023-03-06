"use strict";

// 1
function numPow(a, b) {
  if (b === 1) return a;
  else return a * numPow(a, b - 1);
}

// 2
// [1, 2, [3, 4, [5, 6, [7, 8, [9, 10]]]]] => [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]\

function concatArr(arr) {
  const newArr = [];
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
];
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
  const numToString = String(number);

  if (numToString.length === 1) {
    return oneDigit[+numToString];
  } else if (numToString.length === 2) {
    return number % 10 === 0
      ? tens[numToString[0] - 1]
      : numToString[0] === "1"
      ? elevenToNineteen[numToString[1] - 1]
      : `${tens[numToString[0] - 1]} ${oneDigit[numToString[1]]}`;
  } else if (numToString.length === 3) {
    return number % 100 === 0
      ? hundreds[numToString[0] - 1]
      : `${hundreds[+numToString.slice(0, 1) - 1]} ${numberToText(
          +numToString.slice(1)
        )}`;
  } else
    return `${numberToText(+numToString.slice(0, -3))} тысяч ${numberToText(
      +numToString.slice(-3)
    )}`;
}

console.log(numberToText(579012));
