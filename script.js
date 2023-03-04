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
      return getOneDigit(+numToString);
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
      const thousand = numToString.slice(0, 1);
      const remaining = numToString.slice(1);
      return `${getThousand(+thousand)} ${numberToText(+remaining)}`;
    }
    case 5: {
      const twoDigitsThousand = numToString.slice(0, 2);
      const remaining = numToString.slice(2);

      return twoDigitsThousand % 10 === 0
        ? `${getTens(twoDigitsThousand[0])} тысяч ${numberToText(+remaining)}`
        : twoDigitsThousand[0] === "1"
        ? `${getElevenToNineteen(twoDigitsThousand[1])} тысяч ${numberToText(
            +remaining
          )}`
        : `${getTens(twoDigitsThousand[0])} ${getOneDigit(
            twoDigitsThousand[1]
          )} тысяч ${numberToText(+remaining)}`;
    }
  }
}

console.log(numberToText(99091));
