console.log("JS OOP Exercise");

class Person {
  constructor(name, numPets, residence, hobbies) {
    this.name = name;
    this.numPets = numPets;
    this.residence = residence;
    this.hobbies = hobbies;
  }

  info() {
    console.log(
      `${this.name} has ${this.numPets} pet(s), lives in ${
        this.residence
      }, and enjoys ${this.hobbies.join(" and ")}.`
    );
  }

  greet() {
    console.log("Hello!");
  }
}

class Coder extends Person {
  constructor(name, numPets, residence, hobbies) {
    super(name, numPets, residence, hobbies);

    this.occupation = "Full Stack Web Developer";
  }

  info() {
    console.log(
      `${this.name} is a ${this.occupation}, has ${
        this.numPets
      } pet(s), lives in ${this.residence}, and enjoys ${this.hobbies.join(
        " and "
      )}.`
    );
  }

  greet() {
    console.log("Hello World!");
  }
}

function addUser() {
  let name = prompt("What is your name?");
  let numPets = prompt("How many pets do you have?");
  let residence = prompt("Where do you live?");
  let hobbies = prompt(
    "What are you hobbies?\nAnswer with hobbies seperated by commas:"
  ).split(",");
  let type = prompt("Are you a coder?\nType 'yes' or 'no':");
  let newPerson;
  if (type == "yes") {
    newPerson = new Coder(name, numPets, residence, hobbies);
  } else {
    newPerson = new Person(name, numPets, residence, hobbies);
  }

  return newPerson;
}

let newUser = addUser();

newUser.greet();
newUser.info();
