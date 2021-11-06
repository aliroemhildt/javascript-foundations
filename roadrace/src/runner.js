class Runner {
  constructor(name, age) {
    this.name = name;
    this.age = age;
    this.milesRun = 0;
    this.fitness = 25;
    this.completedRaces = [];
  };

  runSomeMiles(distance) {
    this.milesRun += distance;
    this.fitness += distance;
  };

  stretch() {
    this.fitness += 0.5;
  };

  runRace(raceName, distance) {
    this.completedRaces.push(raceName);
    this.runSomeMiles(distance);
  };
};

module.exports = Runner;
