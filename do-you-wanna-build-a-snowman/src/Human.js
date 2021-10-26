var Snowman = require('./Snowman');

class Human {
  constructor(name) {
    this.name = name;
    this.wantsToBuildASnowman = true;
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots: 0
    }
  }
  gatherMaterials(type, amount) {
    if (type === "carrots") {
      this.materials.carrots = amount;
    } else if (type === "buttons") {
      this.materials.buttons = amount;
    } else if (type === "coal") {
      this.materials.coal += amount;
    }
  }
  buildASnowman() {
    snowman.coal = this.materials.coal;
    snowman.carrots = this.materials.carrots;
    snowman.snowballs = this.materials.snowballs;
    snowman.buttons = this.materials.buttons;
  }
}

module.exports = Human;
