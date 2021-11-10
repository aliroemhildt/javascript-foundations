class Wagon {
  constructor(info) {
    this.title = info.name;
    this.wheels = info.wheels || [];
    this.axles = info.axles || [];
    this.oxen = info.oxen || [];
    this.yokes = info.yokes || [];
    this.food = info.food
    this.ammunition = info.ammunition
    this.clothes = info.clothes;
    this.settlers = info.settlers || [];
  };

  addPart(part) {
    if (part.type === 'wheel') {
      this.wheels.push(part);
    } else if (part.type === 'axle') {
      this.axles.push(part);
    } else if (part.type == 'ox') {
      this.oxen.push(part);
    } else if (part.type === 'yoke') {
      this.yokes.push(part);
    };
  };

  canTravel() {
    if (this.wheels.length < 4 || this.axles.length < 2 || this.oxen.length < 2 || this.yokes.length < 1 || this.settlers.length < 1 || this.yokes.length < (this.oxen.length / 2)) {
      return false;
    };
    for (var i = 0; i < this.wheels.length; i++) {
      if (this.wheels[i].broken && this.wheels.length === 4) {
        return false;
      };
    };
    for (var i = 0; i < this.axles.length; i++) {
      if (this.axles[i].broken && this.axles.length === 2) {
        return false;
      };
    };
    for (var i = 0; i < this.oxen.length; i++) {
      if (this.oxen[i].broken && this.oxen.length === 2) {
        return false;
      };
    };
    for (var i = 0; i < this.settlers.length; i++) {
      if (this.settlers[i].status === 'dead' && this.settlers.length === 1) {
        return false;
      }
    }
    return true;
  };
};

module.exports = Wagon;
