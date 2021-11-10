class Gear {
  constructor(type, quantity) {
    this.type = type;
    this.quantity = quantity;
  };

  checkForValidity() {
    if (this.type === 'food' || this.type === 'ammunition' || this.type === 'clothes') {
      return `Great, we\'ll need lots of ${this.type}!`;
    } else {
      var phrase = `I don\'t think a ${this.type} will help us.`;
      this.type = null;
      return phrase;
    };
  };
};

module.exports = Gear;
