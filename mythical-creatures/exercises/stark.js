var Direwolf = require('./direwolf');

class Stark {
  constructor(info = {}) {
    this.name = info.name
    this.location = info.area || 'Winterfell';
    this.safe = false;
  };

  sayHouseWords() {
    if (!this.safe) {
      return 'Winter is Coming';
    } else {
      return 'The North Remembers';
    };
  };

  callDirewolf(name, location) {
    var direwolf = new Direwolf(name, location);
    direwolf.home = this.location;
    direwolf.protect(this);
    return direwolf;
  };
};

module.exports = Stark;
