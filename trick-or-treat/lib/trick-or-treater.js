class TrickOrTreater {
  constructor(costumeInfo, bag) {
    this.dressedUpAs = costumeInfo.style;
    this.bag = bag;
    this.hasCandy = false;
    this.countCandies = 0;
  };

  putCandyInBag(candyInfo) {
    this.hasCandy = true;
    this.bag.fill(candyInfo);
    this.countCandies++;
  };

  eat() {
    if (this.bag.candies.length >= 1) {
      this.countCandies--;
      this.bag.candies.pop();
    };
  };
};

module.exports = TrickOrTreater;
