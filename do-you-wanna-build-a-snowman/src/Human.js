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
    };
  };

  gatherMaterials(type, amount) {
    if (type === "carrots") {
      this.materials.carrots += amount;
    } else if (type === "buttons") {
      this.materials.buttons += amount;
    } else if (type === "coal") {
      this.materials.coal += amount;
    } else if (type === "snowballs") {
      this.materials.snowballs += amount;
    };
  };

  buildASnowman() {
    return new Snowman({
      carrots: this.materials.carrots,
      coal: this.materials.coal,
      buttons: this.materials.buttons,
      snowballs: this.materials.snowballs
    });
    //   var snowmanMaterials = {
    //     coal: this.materials.coal,
    //     carrots: this.materials.carrots,
    //     snowballs: this.materials.snowballs,
    //     buttons: this.materials.buttons
    //   }
    //   var snowman = new Snowman(snowmanMaterials);
    // };
  };

  placeMagicHat() {
    if (this.materials.coal >= 2 && this.materials.buttons >= 5 && this.materials.carrots >= 1 && this.materials.snowballs >= 2) {
      return "Woah, this snowman is coming to life!";
    } else {
      return "I guess I didn't build it correctly.";
    };
  };
};





module.exports = Human;
