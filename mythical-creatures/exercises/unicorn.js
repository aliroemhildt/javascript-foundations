class Unicorn {
  constructor(name, color = "white") {
    this.name = name;
    this.color = color // could also use this instead of white in the param: || "white";
  };

  isWhite() {
    if (this.color === "white") {
      return true;
    } else {
      return false;
    };
  };

  says(phrase) {
    return `**;* ${phrase} *;**`;
  };
};

module.exports = Unicorn;
