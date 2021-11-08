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
};

module.exports = SkatePark;
