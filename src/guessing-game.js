class GuessingGame {
    constructor() { }

    setRange(min, max) {
        this.minValue = min;
        this.maxValue = max;
    }

    guess() {
        this.guessedValue = this.minValue + Math.round((this.maxValue - this.minValue) / 2);
        return this.guessedValue;
    }

    lower() {
        this.maxValue = this.guessedValue;
    }

    greater() {
        this.minValue = this.guessedValue
    }
}

module.exports = GuessingGame;
