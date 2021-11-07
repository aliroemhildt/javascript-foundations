class Golfer {
  constructor(golferInfo) {
    this.name = golferInfo.name;
    this.handicap = golferInfo.handicap;
    this.frustration = 0;
    this.confidence = 0;
  };

  calculateAvg(par) {
    var avg = par + this.handicap;
    return `I usually shoot a ${avg} on average.`
  };

  playRound(golfCourse) {
    if (golfCourse.difficulty === 'hard') {
      this.frustration += 500;
    };
    if (golfCourse.difficulty === 'moderate') {
      this.frustration += 100;
    };
  };

  hitTheRange() {
    this.confidence += 10;
  };

  marvel(golfCourse) {
    var phrase = `I love the `;
    for (var i = 0; i < golfCourse.features.length; i++) {
      phrase += `${golfCourse.features[i]} and`;
      if (golfCourse.features[i] === (golfCourse.features.length - 1)) {
        phrase += `${golfCourse.features[i]} on this course!`
      };
    };
  };
};

module.exports = Golfer;
