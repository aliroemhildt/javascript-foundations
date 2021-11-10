class Settler {
  constructor(info) {
    this.name = info.name;
    this.age = info.age;
    this.nationality = info.nationality || 'unknown';
    this.status = 'healthy';
    this.ailments = [];
  };

  experienceDistress(ailment) {
    if (this.status !== 'dead') {
      this.ailments.push(ailment);
    };
    if (this.status === 'healthy') {
      this.status = 'fair';
    } else if (this.status === 'fair') {
      this.status = 'poor';
    } else if (this.status === 'poor') {
      this.status = 'dead';
    };
  };

  heal() {
    if (this.status !== 'dead') {
      this.ailments = [];
      this.status = 'healthy';
    } else {
      return `Sorry, we can\'t heal a corpse. ${this.name} needs a proper burial!`;
    };
  };
};

module.exports = Settler;
