class GolfCourse {
  constructor(name, difficulty, openings, features) {
    this.name = name;
    this.difficulty = difficulty;
    this.openings = openings;
    this.features = features;
    this.currentlyPlaying = [];
  };

  checkInGroup(players) {
    if (players.length <= this.openings) {
      for (var i = 0; i < players.length; i++) {
        this.currentlyPlaying.unshift(players[i].name);
        this.openings -= 1;
      };
      return 'You\'re checked in. Have fun!';
    } else {
      return 'Sorry, we are currently booked! Please come back later.';
    }
  };
};

module.exports = GolfCourse;
