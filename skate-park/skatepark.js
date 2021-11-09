class SkatePark {
  constructor(parkInfo) {
    this.name = parkInfo.name;
    this.yearFounded = parkInfo.year;
    this.style = parkInfo.type;
    this.features = parkInfo.features;
    this.isPrivate = parkInfo.isPrivate || false;
    this.cost = parkInfo.price || 0;
    this.occupants = [];
  };

  admit(skater) {
    if (this.occupants.length < 3 && this.isPrivate && skater.money < this.cost) {
      return `Sorry, you don't have enough money.`;
    } else if (this.occupants.length < 3 && this.isPrivate && skater.money >= this.cost) {
        this.occupants.push(skater);
        skater.money -= this.cost;
        return `Welcome to ${this.name}, the cost will be $${this.cost}.00.`;
    } else if (this.occupants.length < 3 && !this.isPrivate) {
        this.occupants.push(skater);
      return `Welcome to the free ${this.name} Skatepark!`;
    } else if (this.occupants.length === 3) {
      return `Sorry, we are at max capacity. Thank you for understanding.`;
    };
  };
};

module.exports = SkatePark;
