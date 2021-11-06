class Roadrace {
  constructor(raceInfo) {
    this.name = raceInfo.title;
    this.location = raceInfo.city;
    this.distance = 0;
    this.participants = [];
  };

  setDistance(raceDistance) {
    this.distance = raceDistance;
    return `The ${this.name} in ${this.location} is a ${this.distance} mile race.`;
  };

  registerParticipants(runner) {
    this.participants.push(runner);
  };

  completeRace() {
    // loop through participants of that race
    // run race (arguments)

    for (var i = 0; i < this.participants.length; i++){
      this.participants[i].runRace(this.name, this.distance);
    };
  };
};

module.exports = Roadrace;
