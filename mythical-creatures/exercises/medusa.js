var Person = require('./person');
var Statue = require('./statue');

class Medusa {
  constructor(name) {
    this.name = name;
    this.statues = [];
  };

  gazeAtVictim(person) {
    var freedPerson;
    if (this.statues.length === 3) {
      var freedStatue = this.statues[0];
      freedPerson = new Person(freedStatue.name);
      freedPerson.mood = 'relieved';
      this.statues.shift();
    };
    if (this.statues.length < 3) {
      this.statues.push(new Statue(person.name));
    };
    if (freedPerson) {
      return freedPerson;
    };
  };
};

module.exports = Medusa;
