var Snowman = require("../src/Snowman");

class Human {
  constructor(name) {
    this.name = name;
    this.wantsToBuildASnowman = true;
    this.materials = {
      snowballs: 0,
      coal: 0,
      buttons: 0,
      carrots:0
    };
  };

  gatherMaterials(material, quantity) {
    this.materials[material] += quantity;

    // Can also do it this way:
    // if (material === 'snowballs') {
    //   this.materials.snowballs += quantity;
    // } else if (material === 'coal') {
    //   this.materials.coal += quantity;
    // } else if (material === 'buttons') {
    //   this.materials.buttons += quantity;
    // } else if (material === 'carrots') {
    //   this.materials.carrots += quantity;
    // };
  };

  buildASnowman() {
    var details = {
      snowballs: this.materials.snowballs,
      coal: this.materials.coal,
      buttons: this.materials.buttons,
      carrots: this.materials.carrots
    }
    var snowman = new Snowman(details);
    return snowman;
  };

  placeMagicHat() {
    if (this.materials.coal >= 2 && this.materials.buttons >= 5 && this.materials.carrots >= 1 && this.materials.snowballs >= 2) {
      return 'Woah, this snowman is coming to life!';
    } else {
      return 'I guess I didn\'t build it correctly.';
    };
  };
};

module.exports = Human;
