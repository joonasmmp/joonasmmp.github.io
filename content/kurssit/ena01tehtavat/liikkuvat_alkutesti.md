---
title: "Liikkuvat määreet: Lopputesti"
date: 2021-8-13
draft: false
type: page
layout: tehtava
---

<!-- raw html -->
{{< rawhtml >}}
<link rel="stylesheet" type="text/css" href="/css/monivalinta1.css"/>
<body>
<div id="quiz">

            <p style="text-align:center;" id="question"></p>
 <br>
            <div class="buttons">
            <button id="btn0"><span id="choice0"></span></button> 
            <button id="btn1"><span id="choice1"></span></button>
            <button id="btn2"><span id="choice2"></span></button>
</div>

</body>

<script>

function Quiz(questions) {
  this.score = 0;
  this.questions = questions;
  this.questionIndex = 0;
}

Quiz.prototype.getQuestionIndex = function() {
  return this.questions[this.questionIndex];
}

Quiz.prototype.guess = function(answer) {
  if (this.getQuestionIndex().isCorrectAnswer(answer)) {
    this.score++;
  } else {
  displayFinalMessage();}

  this.questionIndex++;
}

Quiz.prototype.isEnded = function() {
  return this.questionIndex === this.questions.length;
}

function startOver() {
  location.reload(true);
}

function Question(text, choices, answer) {
  this.text = text;
  this.choices = choices;
  this.answer = answer;
}

Question.prototype.isCorrectAnswer = function(choice) {
  return this.answer === choice;
}

function populate() {
  if (quiz.isEnded()) {
    showScores();
  } else {
    // show question
    var element = document.getElementById("question");
    element.innerHTML = quiz.getQuestionIndex().text;

    // show options
    var choices = quiz.getQuestionIndex().choices;
    for (var i = 0; i < choices.length; i++) {
      var element = document.getElementById("choice" + i);
      element.innerHTML = choices[i];
      guess("btn" + i, choices[i]);
    }

    showProgress();
  }
}

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function() {
    quiz.guess(guess);
    populate();
  }
}

function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
}

function showScores() {
  var gameOverHTML = "<h1>Aivan mahtavaa!!</h1>";
  gameOverHTML += "<br>Sait kaikki " + quiz.score + " kohtaa oikein!"
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;
}

function displayFinalMessage() {
  $("#buttons").empty();
  $("#quiz").empty();
  $("#quiz").append('<div id="finalMessage">Oh dear!<br><br>Nyt meni väärin niin että heilahti.<br>Mutta ei se haittaa, kokeile uudestaan!</div>');
  $("#quiz").append('<button id="resetbutton">Takaisin alkuun</button>')
  document.getElementById("resetbutton").onclick = (startOver);
 }

// kysymykset tähän
var questions = [
  new Question("En ole koskaan syönyt tonnikalaa", ["I never have eaten tuna", "I have never eaten tuna", "I have eaten never tuna",], "I have never eaten tuna"),
  new Question("En koskaan syö aamiaista", ["Never I eat breakfast", "I never eat breakfast", "I eat never breakfast"], "I never eat breakfast"),
  new Question("Olen aina myöhässä", ["Always I am late", "I always am late", "I am always late"], "I am always late"),
  new Question("Oletko aina myöhässä?", ["Always are you late?", "Are always you late?", "Are you always late?"], "Are you always late?"),
  new Question("Oletko koskaan nähnyt kuuta?", ["Have ever you seen the moon?", "Have you ever seen the moon?", "Ever seen the moon have you?"], "Have you ever seen the moon?"),
  new Question("En aina pidä tenniksestä", ["I always don't like tennis", "I don't always like tennis", "I don't like always tennis"], "I don't always like tennis"),
  new Question("Menen aina sinne", ["I go there always", "I go always there", "I always go there"], "I always go there"),
  new Question("Siellä on aina mukavaa", ["It always is fun there", "It is always fun there", "There is always fun"], "It is always fun there"),
  new Question("Syön harvoin kasviksia", ["I seldom eat vegetables", "I eat seldom vegetables", "I eat vegetables seldom"], "I seldom eat vegetables"),
  new Question("Käyn usein kalassa", ["I frequently go fishing", "I go frequently fishing", "Frequently go I fishing"], "I frequently go fishing"),
  new Question("Teetkö normaalisti kotitehtäväsi?", ["Do normally you do your homework?","Do you normally do your homework?", "Do you do normally your homework?"], "Do you normally do your homework?"),
  new Question("Tehtävä on melkein lopussa!", ["The exercise almost is finished!", "The exercise is almost finished!", "The exercise almost finished is!"], "The exercise is almost finished!"),
  new Question("Tämä on todennäköisesti viimeinen kysymys", ["This probably is the final question", "This is probably the final question", "This is the final question probably"], "This is probably the final question"),
  new Question("Minä vain vitsailin, tehtävä ei lopu koskaan", ["I just was kidding, the exercise never ends", "I was just kidding, the exercise never ends", "I was just kidding, the exercise ends never"], "I was just kidding, the exercise never ends"),
];

$('.reset').click(startOver);

var quiz = new Quiz(questions);

populate();
</script>

{{< /rawhtml >}}