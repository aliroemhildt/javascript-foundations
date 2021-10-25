class Dragon {
  constructor(name, rider) {
    this.name = name;
    this.rider = rider;
    this.hungry = true;
    this.eatCount = 0;
  };

  greet() {
    return `Hi, ${this.rider}!`;
  };

  eat() {
    this.eatCount += 1;
    if (this.eatCount > 2) {
      this.hungry = false;
    };
    return this.eatCount;
  };
};

module.exports = Dragon
