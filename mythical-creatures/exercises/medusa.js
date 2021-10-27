var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  };

  gazeAtVictim(person) {
    this.statues.push(new Statue(person.name));
  };
};

module.exports = Medusa; Person;
