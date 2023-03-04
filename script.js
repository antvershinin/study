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
  "семнадцать",
  "восемнадцать",
  "девятнадцать",
];

function getOneDigit(a) {
  return oneDigit[a];
}

function getElevenToNineteen(a) {
  return elevenToNineteen[a - 1];
}

function getTens(a) {
  return tens[a - 1];
}

function getHundreds(a) {
  return hundreds[a - 1];
}

function getThousand(a) {
  return a === "1"
    ? `одна тысяча`
    : a === "2"
    ? `две тысячи`
    : a === "3"
    ? `три тысячи`
    : a === "4"
    ? `четыре тысячи`
    : `${getOneDigit(a)} тысяч`;
}

function getTensThousands(a) {
  return `${tens[a - 1]} тысяч`;
}

function numberToText(number) {
  let numToString = String(number);
  switch (numToString.length) {
    case 1: {
      return getOneDigit(numToString[0]);
    }

    case 2: {
      return number % 10 === 0
        ? getTens(numToString[0])
        : numToString[0] === "1"
        ? getElevenToNineteen(numToString[1])
        : `${getTens(numToString[0])} ${getOneDigit(numToString[1])}`;
    }

    case 3: {
      return number % 100 === 0
        ? getHundreds(numToString[0])
        : number % 10 === 0
        ? `${getHundreds(numToString[0])} ${getTens(numToString[1])}`
        : numToString[1] === "0"
        ? `${getHundreds(numToString[0])} ${getOneDigit(numToString[2])}`
        : numToString[1] === "1"
        ? `${getHundreds(numToString[0])} ${getElevenToNineteen(
            numToString[2]
          )}`
        : `${getHundreds(numToString[0])} ${getTens(
            numToString[1]
          )} ${getOneDigit(numToString[2])}`;
    }

    case 4: {
      return number % 1000 === 0
        ? getThousand(numToString[0])
        : number % 100 === 0
        ? `${getThousand(numToString[0])} ${getHundreds(numToString[1])}`
        : number % 10 === 0
        ? `${getThousand(numToString[0])} ${getHundreds(
            numToString[1]
          )} ${getTens(numToString[2])}`
        : numToString[2] === "0"
        ? `${getThousand(numToString[0])} ${getHundreds(
            numToString[1]
          )} ${getOneDigit(numToString[3])}`
        : numToString[2] === "1"
        ? `${getThousand(numToString[0])} ${getHundreds(
            numToString[1]
          )} ${getElevenToNineteen(numToString[3])}`
        : `${getThousand(numToString[0])} ${getHundreds(
            numToString[1]
          )} ${getTens(numToString[2])} ${getOneDigit(numToString[3])}`;
    }

    case 5:
      return number % 10000 === 0
        ? getTensThousands(numToString[0])
        : number % 1000 === 0
        ? `${getTensThousands(numToString[0])} ${getThousand(numToString[1])}`
        : number % 100 === 0
        ? `${getTensThousands(numToString[0])} ${getThousand(
            numToString[1]
          )} ${getHundreds(numToString[2])}`
        : number % 10 === 0
        ? `${getTensThousands(numToString[0])} ${getThousand(
            numToString[1]
          )} ${getHundreds(numToString[2])} ${getTens(numToString[3])}`
        : numToString[3] === "0"
        ? `${getTensThousands(numToString[0])} ${getThousand(
            numToString[1]
          )} ${getHundreds(numToString[2])} ${getOneDigit(numToString[4])}`
        : numToString[3] === "1"
        ? `${getTensThousands(numToString[0])} ${getThousand(
            numToString[1]
          )} ${getHundreds(numToString[2])} ${getElevenToNineteen(
            numToString[4]
          )}`
        : `${getTensThousands(numToString[0])} ${getThousand(
            numToString[1]
          )} ${getHundreds(numToString[2])} ${getTens(
            numToString[3]
          )} ${getOneDigit(numToString[4])}`;
  }
}

console.log(numberToText(70975));
