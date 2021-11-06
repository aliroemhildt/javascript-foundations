class Craft {
  constructor(craftInfo) {
    this.name = craftInfo.type;
    this.materials = craftInfo.materials
    this.completed = false;
  };

  completeCraft() {
    this.completed = true;
    return 'All done! It looks great!';
  };

  calculateProjectTotal() {
    // create totalCost variable, set to 0
    // loop through materials array
    // - for each material, calculate material cost
    // - add the cost for that material to the totalCost
    // return the totalCost

    var totalCost = 0;
    for (var i = 0; i <this.materials.length; i++) {
      var materialCost = this.materials[i].calculateMaterialCost();
      totalCost += materialCost;
    };
    return totalCost;
  };
};

module.exports = Craft;
