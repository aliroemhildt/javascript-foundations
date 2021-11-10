class VendingMachine {
  constructor(info) {
    this.id = info.id;
    this.isBroken = info.isBroken;
    this.snacks = [];
  };

  addSnacks(snack) {
    var containsSnack = false;
    for (var i = 0; i < this.snacks.length; i++) {
      if (this.snacks[i].name === snack.name) {
        containsSnack = true;
      };
    };
    if (!containsSnack) {
      this.snacks.push(snack);
    } else {
      return 'Sorry, that snack is already stocked! Try adding a different snack.';
    }
  };
};

module.exports = VendingMachine;
