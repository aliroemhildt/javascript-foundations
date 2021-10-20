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

//tests
var test1 = new Unicorn("Joe", "red");
console.log(test1);
console.log(test1.isWhite());

var test2 = new Unicorn("Sue");
console.log(test2);
console.log(test2.isWhite());

module.exports = Unicorn;

// 1. read the test
// 2. ask yourself if its going to fail and why
// 3. run the test
// 4. make it pass
