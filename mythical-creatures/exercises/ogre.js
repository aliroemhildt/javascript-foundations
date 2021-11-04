class Ogre {
  constructor(info) {
    this.name = info.name;
    this.home = info.abode || 'Swamp';
    this.swings = 0;
  };

  encounter(human) {
    human.encounterCounter += 1;
    if (human.noticesOgre()) {
      this.swingAt(human);
    };
  };

  swingAt(human) {
    this.swings += 1;
    if (this.swings % 2 === 0 && this.swings > 0) {
      human.knockedOut = true;
    };
  };

    apologize(human) {
      human.knockedOut = false;
    };
  };

module.exports = Ogre;
