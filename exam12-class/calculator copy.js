class calculator {
  add(a, b) {
    this._numInteger(a, b);
    return a + b;
  }

  minus(a, b) {
    this._numInteger(a, b);
    return a - b;
  }
  divide(a, b) {
    this._numInteger(a, b);
    return a / b;
  }
  multiply(a, b) {
    this._numInteger(a, b);
    return a * b;
  }
  _numInteger(a, b) {
    if (!Number.isInteger(a) || !Number.isInteger(b)) throw new Error("에러");
  }
}

module.exports = calculator;
