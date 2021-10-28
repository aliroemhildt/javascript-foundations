var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  };

  gazeAtVictim(person) {
    if (this.statues.length < 3) {
      this.statues.push(new Statue(person.name));
    };
  };
};

module.exports = Medusa; Person;
