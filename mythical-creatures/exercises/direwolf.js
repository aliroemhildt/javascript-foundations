class Direwolf {
  constructor(name, home, size) {
    this.name = name;
    this.home = home || 'Beyond the Wall';
    this.size = size || 'Massive';
    this.starksToProtect = [];
    this.huntsWhiteWalkers = true;
  };

  protect(stark) {
    if (this.home === stark.location && this.starksToProtect.length < 2) {
      this.starksToProtect.push(stark);
      stark.safe = true;
      this.huntsWhiteWalkers = false;
    };
  };

  leave(stark) {
    for (var i = 0; i < this.starksToProtect.length; i++) {
      if (stark.name === this.starksToProtect[i].name){
        this.starksToProtect.splice(i, 1);
      };
    };
    stark.safe = false;
  };
};

module.exports = Direwolf;
