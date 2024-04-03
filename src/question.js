class Question {
<<<<<<< HEAD
  // YOUR CODE HERE:
  //
  // 1. constructor (text, choices, answer, difficulty)
=======
>>>>>>> origin
  constructor(text, choices, answer, difficulty) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
    this.difficulty = difficulty;
  }
<<<<<<< HEAD
  shuffleChoices() {
    let currentIndex = this.choices.length;
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      [this.choices[currentIndex], this.choices[randomIndex]] = [this.choices[randomIndex],this.choices[currentIndex]];
    };
=======

  shuffleChoices() {
    let currentIndex = this.choices.length;
    while (currentIndex != 0) {
      let randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      [this.choices[currentIndex], this.choices[randomIndex]] = [
        this.choices[randomIndex],
        this.choices[currentIndex],
      ];
    }
>>>>>>> origin
  }
}
