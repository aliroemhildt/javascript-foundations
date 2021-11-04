class Fairy {
  constructor(name) {
    this.name = name;
    this.dust = 10;
    this.clothes = {
      dresses: ['Iris']
    };
    this.disposition = 'Good natured';
    this.humanWards = [];
  };

  receiveBelief() {
    this.dust += 1;
  };

  believe() {
    this.dust += 10;
  };

  makeDresses(listOfDresses) {
    for (var i = 0; i < listOfDresses.length; i++) {
      this.clothes.dresses.push(listOfDresses[i]);
    };
  };

  becomeProvoked() {
    this.disposition = 'Vengeful';
  };

  replaceInfant(infantInfo) {
    if (this.disposition === 'Vengeful') {
      infantInfo.disposition = 'Malicious';
      this.humanWards.push(infantInfo);
    };
    if (this.humanWards.length === 3) {
       this.disposition = 'Good natured';
     };
    return infantInfo;
  };
};

module.exports = Fairy;
