const stringLength = (string) => {
  if (string.length >= 1 && string.length <= 10) {

    return string.length;
  } else {

    throw new Error('check fail: string length not in between 1 and 10');
  }
}
let reverseString = (string) => {
  return string.split('').reverse().join('');
}



let capitalize = (string) => {
  let newString = string[0].toUpperCase() + string.slice(1);
  return newString;

}
class calculator {
  constructor(num1, num2) {
    this.num1 = num1;
    this.num2 = num2;
  }

  add() {
    return this.num1 + this.num2;
  }
  subtract() {
    return this.num1 - this.num2;
  }
  divide() {
    return this.num1 / this.num2;
  }
  multiply() {
    return this.num1 * this.num2;
  }
  capitalize(string) {
    return string.toUpperCase();
  }
}

module.exports = { stringLength, reverseString, capitalize, calculator }