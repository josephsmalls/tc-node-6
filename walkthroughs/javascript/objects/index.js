console.log("JavaScript Objects");

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
