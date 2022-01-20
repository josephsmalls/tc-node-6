console.log("Hello World!");

let input = document.getElementById("input");
let feedback = document.getElementById("feedback");
let submitBtn = document.getElementById("submitBtn");

class TooShortError extends Error {
  constructor(message, minLength) {
    super(message); // function call, calls the Error constructor

    this.minLength = minLength;
  }
}

class InvalidRequirementsError extends Error {}

submitBtn.addEventListener("click", () => {
  try {
    let value = input.value;
    if (value.length < 8) {
      throw new TooShortError("Must be at least 8 characters long", 8);
    }

    if (value.match(/\d/) && value.match(/[A-z]/)) {
      feedback.textContent = value;
    } else {
      throw new InvalidRequirementsError(
        "You did not include a letter and number."
      );
    }
  } catch (error) {
    if (
      error instanceof InvalidRequirementsError ||
      error instanceof TooShortError
    ) {
      feedback.textContent = error.message;
    } else {
      feedback.textContent = "Something went wrong. Try again later.";
    }
  }
});
