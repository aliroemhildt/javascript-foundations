class Skater {
  constructor(skaterInfo) {
    this.name = skaterInfo.name;
    this.skill = skaterInfo.skill;
    this.tricks = skaterInfo.tricks;
    this.money = skaterInfo.cash;
    this.frustration = 0;
  };

  practice(trick) {
    // access the trick in this.tricks []
    // if true: nothing
    // if false: frustration to increase by 1

    // create counter to track how many times trick has been practiced
    // check how many times trick has been practiced
    // if less than three: increase frustration by 1
    // if equal to three: change value to true
    if (!this.tricks[trick]) {
      this.frustration++;
    };
  };
};

module.exports = Skater;
