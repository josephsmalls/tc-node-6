console.log("Hello World!");

// Instance
// Class

class Person {
  // Class property
  classProp = true;

  constructor(name) {
    // Instance property
    this.name = name;
    this.instanceProperty = true;
    // Instance method
    this.instanceMethod = function () {
      console.log(this.name + " Instance method: " + this.instanceProperty);
    };
  }

  // Class method
  classMethod() {
    console.log(this.name + " Class method: " + this.classProp);
  }
}

let ben = new Person("Ben");
let seth = new Person("Seth");

ben.instanceMethod = function () {
  console.log(this.name + " changed instance method");
};

Person.prototype.classMethod = function () {
  console.log(this.name + " changed class method");
};

ben.instanceMethod();
ben.classMethod();
seth.instanceMethod();
seth.classMethod();
