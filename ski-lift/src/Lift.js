var Skier = require('./Skier');

class Lift {
  constructor (limit) {
    this.inService = true;
    this.limit = limit;
    this.skiers = [];
    this.safetyBar = 'up';
  };

  admitSkier(name, ticket) {
    // instantiate new skier
    // push into skier array
    if (this.skiers.length < this.limit && ticket) {
      this.skiers.push(new Skier(name,ticket));
    } else if (ticket) {
        return `Sorry, ${name}. Please wait for the next lift!`;
    } else {
      return `Sorry, ${name}. You need a lift ticket!`;
    };
  };

  startLift() {
    // check if lift is is full
    // if it is, change safetyBar to down
    // if its not full, calculate how many seats are open
    // return string with inerpolate number
    if (this.skiers.length === this.limit) {
      this.safetyBar = 'down';
    } else {
      var openSeats = this.limit - this.skiers.length;
      if (openSeats === 1) {
        return `We still need ${openSeats} more skier!`
      } else {
        return `We still need ${openSeats} more skiers!`
      };
    };
  };
};


module.exports = Lift;
