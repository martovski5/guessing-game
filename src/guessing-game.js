class GuessingGame {
  constructor() {
    this.number;
    this.min;
    this.max;
  }

  setRange(min, max) {
    this.min = min;
    this.max = max;
  }

  guess() {
    this.number = Math.ceil((this.max - this.min) / 2 + this.min);
    return this.number;
  }

  lower() {
    this.setRange(this.min, this.number);
  }

  greater() {
    this.setRange(this.number, this.max);
  }
}

module.exports = GuessingGame;
