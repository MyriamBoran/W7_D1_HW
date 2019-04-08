const PubSub = require("../helpers/pub_sub.js");
const ResultView = function() {};

ResultView.prototype.bindEvents = function() {
  PubSub.subscribe("numbers-evaluated", event => {
    const primeNumber = event.detail;
    this.displayResult(primeNumber);
  });
};

ResultView.prototype.displayResult = function(primeNumber) {
  const resultElement = document.querySelector("#result");
  resultElement.textContent = primeNumber;
};

module.exports = ResultView;
