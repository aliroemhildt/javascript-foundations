class Part {
  constructor(type) {
    this.type = type;
    this.broken = false;

  };

  brokenCount = 0;

  break() {
    this.broken = true;
    this.brokenCount++;
  };

  repair() {
    if (this.brokenCount === 2) {
      return `This ${this.type} has seen better days, we\'ll need a brand new one!`;
    } else {
      this.broken = false;
    };
  };
};

module.exports = Part;
