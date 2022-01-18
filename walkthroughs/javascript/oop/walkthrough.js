console.log("JS Object Oriented Programming");

class Question {
  constructor(prompt, answer) {
    this.prompt = prompt;
    this.answer = answer;
  }

  checkAnswer(userAnswer) {
    if (userAnswer == this.answer) {
      alert("Correct");
    } else {
      alert("Incorrect");
    }
  }

  askQuestion() {
    let userAnswer = prompt(this.prompt);
    this.checkAnswer(userAnswer);
  }
}

class MultipleChoiceQuestion extends Question {
  constructor(prompt, answer, choices) {
    super(prompt, answer);
    this.choices = choices;
  }

  askQuestion() {
    //   Dictionary Object has keys (indexes) and values
    const letters = ["A", "B", "C", "D"];

    let choicesStr = this.choices
      .map((choice, index) => {
        return `${letters[index]}. ${choice}`;
      })
      .join("\n");

    let userAnswer = prompt(
      this.prompt + "\nAnswer with the correct letter:\n" + choicesStr
    );

    this.checkAnswer(userAnswer);
  }
}

class Game {
  constructor() {
    this.questions = [
      new Question("What is the value of 2 + 2?", 4),
      new Question(
        "What is the service we use for hosting our git repos?",
        "github"
      ),
      new MultipleChoiceQuestion("What is Seth's favorite color?", "B", [
        "black",
        "red",
        "orange",
        "green",
      ]),
    ];
  }

  addQuestion(prompt, answer) {
    this.questions.push(new Question(prompt, answer));
  }

  askQuestions() {
    this.questions.forEach((q) => {
      console.log(q);
      q.askQuestion();
    });
  }
}

new Game().askQuestions();