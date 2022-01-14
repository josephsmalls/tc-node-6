console.log("Hello World!");

const mugWarmer = {
  brand: "Kin",
  color: "black",
  shape: "circle",
  isOn: false,
  level: null,
  toggleOn: function () {
    this.isOn = !this.isOn;
    console.log(`Mug Warmer turning ${this.isOn}...`);
  },
  toggleLevel: function () {
    if (!this.isOn) {
      this.toggleOn();
    }

    this.level++;

    if (this.level > 3) {
      this.toggleOn();
      this.level = null;
    }
    console.log(`Level is ${this.level}...`);
  },
};

mugWarmer.toggleLevel();
mugWarmer.toggleLevel();
mugWarmer.toggleLevel();
mugWarmer.toggleLevel();
mugWarmer.toggleLevel();

let name = "Ben";

name; // string data type, no properties or methods
// turns the string into a string object (polymorphism), to access the length property
name.length; // 3
name[1]; // "e"
name.slice(1); // "en"
name.toUpperCase(); // "BEN"

const scores = [1, 2, 3, 4, 5];

scores.forEach(function (num) {
  console.log(num);
});
