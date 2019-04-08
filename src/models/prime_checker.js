const PubSub = require("../helpers/pub_sub.js");
const PrimeChecker = function() {};

PrimeChecker.prototype.bindEvents = function() {
  callback = event => {
    const inputNumber = event.detail;
    const primeNumber = this.evaluateNumbers(inputNumber);
    PubSub.publish("numbers-evaluated", primeNumber);
  };
  PubSub.subscribe("numbers-inputted", callback);
};

PrimeChecker.prototype.evaluateNumbers = function(number) {
  if (number <= 1) {
    return `Really? you thought this was a prime number? No...`;
  }
  for (let i = 2; i < number; i++) {
    if (number % i === 0) {
      return `For heaven's sake...of course it's not!`;
    }
  }
  return `Yey, you win at life!`;
};

module.exports = PrimeChecker;
