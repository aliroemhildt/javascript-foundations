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
    return `I love the ${golfCourse.features[0]} and ${golfCourse.features[1]} on this course!`;
    // var phrase = `I love the `;
    // for (var i = 0; i < golfCourse.features.length; i++) {
    //   if (i < (golfCourse.features.length - 1)) {
    //     phrase += `${golfCourse.features[i]} and `;
    //   } else {
    //     phrase += `${golfCourse.features[i]} on this course!`;
    //   };
    // };
    // return phrase;
  };

  whatYaShoot(score) {
    if (score > 0) {
      this.frustration += 20;
      return 'Doh!';
    } else if (score === 0) {
      this.frustration -= 10;
      return 'Booyah!';
    } else if (score < 0) {
      this.frustration = 0;
      return 'I AM THE GREATEST GOLFER ALIVE!';
    };
  }
};

module.exports = Golfer;
