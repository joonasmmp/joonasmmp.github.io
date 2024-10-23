---
title: "Conditionals and If-Clauses: Final Test"
date: 2022-2-1
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
            <button id="btn3"><span id="choice3"></span></button>
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

// create questions
var questions = [
  new Question(
    "If you (work) harder, you (pass) the exam.",
    ["worked, would pass", "work, will pass", "worked, passed", "work, pass"],
    "worked, would pass"
  ),
  new Question(
    "If it (rain), we (stay) at home.",
    ["rains, will stay", "rain, stay", "rained, would stay", "rains, stayed"],
    "rains, will stay"
  ),
  new Question(
    "If she (study) regularly, she (not fail) the test.",
    ["studies, will not fail", "studied, would not fail", "study, not fail", "studied, not failed"],
    "studies, will not fail"
  ),
  new Question(
    "If they (arrive) early, they (get) good seats.",
    ["arrive, will get", "arrived, would get", "arrive, get", "arrived, got"],
    "arrive, will get"
  ),
  new Question(
    "If he (practice) more, he (become) a better player.",
    ["practices, will become", "practiced, would become", "practice, become", "practiced, became"],
    "practices, will become"
  ),
  new Question(
    "If you (not hurry), we (miss) the bus.",
    ["don't hurry, will miss", "didn't hurry, would miss", "not hurry, miss", "didn't hurry, missed"],
    "don't hurry, will miss"
  )
    new Question(
    "If you (save) money, you (buy) a new car.",
    ["save, will buy", "saved, would buy", "save, buy", "saved, bought"],
    "save, will buy"
  ),
  new Question(
    "If it (not rain), we (go) to the park.",
    ["doesn't rain, will go", "didn't rain, would go", "not rain, go", "didn't rain, went"],
    "doesn't rain, will go"
  ),
  new Question(
    "If they (study), they (pass) the exam.",
    ["study, will pass", "studied, would pass", "study, pass", "studied, passed"],
    "study, will pass"
  ),
  new Question(
    "If she (not eat) too much, she (not feel) sick.",
    ["doesn't eat, won't feel", "didn't eat, wouldn't feel", "not eat, not feel", "didn't eat, didn't feel"],
    "doesn't eat, won't feel"
  )
];

$('.reset').click(startOver);

var quiz = new Quiz(questions);

populate();
</script>

{{< /rawhtml >}}