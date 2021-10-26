class Pirate {
  constructor(name, job) {
    this.name = name;
    this.job = job || 'scallywag';
    this.cursed = false;
    this.booty = 0;
    this.numberOfRobberies = 0;
  };

  robShip() {
    this.numberOfRobberies += 1;
    if (this.numberOfRobberies <= 5) {
      this.booty += 100;
      return 'YAARRR!';
    } else {
      this.cursed = true;
      return 'ARG! I\'ve been cursed!';
    };
  };

  liftCurse() {
    if (this.booty >= 300 && this.cursed) {
      this.cursed = false;
      this.booty -= 300;
      return 'Your curse has been lifted!';
    } else {
      return 'You don\'t need to lift a curse!';
    };
  };
};

module.exports = Pirate;
