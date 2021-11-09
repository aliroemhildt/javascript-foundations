class LunchBox {
  constructor(info) {
    this.owner = info.owner;
    this.material = info.madeOf;
    this.shape = info.shape;
    this.color = info.color;
    this.snacks = [];
  };

  acquireSnack(snack) {
    this.snacks.push(snack);
    snack.isInLunchBox = true;
  };

  findHealthySnacks() {
    var healthySnacks = [];
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].checkForHealthy()) {
        healthySnacks.push(this.snacks[i].type);
      };
    };

    return healthySnacks;
  };
  
};

module.exports = LunchBox;
