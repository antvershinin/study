"use strict";

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
  "семьнадцать",
  "восемьнадцать",
  "девятнадцать",
];

function numberToText(number) {
  function getOneDigit(a) {
    return oneDigit[numToString[a]];
  }

  function getElevenToNineteen(a) {
    return elevenToNineteen[numToString[a] - 1];
  }

  function getTens(a) {
    return tens[numToString[a] - 1];
  }

  function getHundreds(a) {
    return hundreds[numToString[a] - 1];
  }

  function getThousand(a) {
    return numToString[0] === "1"
      ? `одна тысяча`
      : numToString[0] === "2"
      ? `две тысячи`
      : numToString[0] === "3"
      ? `три тысячи`
      : numToString[0] === "4"
      ? `четыре тысячи`
      : `${getOneDigit(0)} тысяч`;
  }

  function getThreeDigits(a) {
    return number % 100 === 0
      ? getHundreds(a)
      : number % 10 === 0
      ? `${getHundreds(a)} ${getTens(a + 1)}`
      : numToString[1] === "0"
      ? `${getHundreds(a)} ${getOneDigit(a + 2)}`
      : numToString[1] === "1"
      ? `${getHundreds(a)} ${getElevenToNineteen(a + 2)}`
      : `${getHundreds(a)} ${getTens(a + 1)} ${getOneDigit(a + 2)}`;
  }

  let numToString = String(number);
  if (numToString.length === 1) {
    return getOneDigit(0);
  } else if (numToString.length === 2) {
    return number % 10 === 0
      ? getTens(0)
      : numToString[0] === "1"
      ? getElevenToNineteen(1)
      : `${getTens(0)} ${getOneDigit(1)}`;
  } else if (numToString.length === 3) {
    return getThreeDigits(0);
  }

  if (numToString.length === 4 && number % 1000 === 0) {
    return getThousand(0);
  } else {
    return `${getThousand(0)} ${getThreeDigits(1)}`;
  }
}

console.log(numberToText(3845));
