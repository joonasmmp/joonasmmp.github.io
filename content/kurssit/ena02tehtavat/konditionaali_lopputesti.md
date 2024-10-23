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
    ["worked, passed", "work, would pass", "worked, would pass", "would work, would pass"],
    "worked, would pass"
  ),
  new Question(
    "If it (rain), we (stay) at home.",
    ["rains, will stay", "rains, would stay", "rained, would stay", "rains, stayed"],
    "rains, will stay"
  ),
  new Question(
    "If she (study) regularly, she (not fail) the test.",
    ["will study, will not fail", "studied, would not fail", "studies, will not fail", "studied, doesn't fail"],
    "studies, will not fail"
  ),
  new Question(
    "If they (arrive) early, they (get) good seats.",
    ["would arrive, would get", "had arrived, would have", "arrive, get", "would arrive, would get"],
    "had arrived, would have gotten"
  ),
  new Question(
    "If he (practice) more, he (become) a better player.",
    ["had practiced, would become", "practiced, would become", "would practice, would become", "practiced, will become"],
    "practiced, would become"
  ),
  new Question(
    "If you (not hurry), we (miss) the bus.",
    ["don't hurry, would miss", "didn't hurry, would miss", "hadn't hurried, would have missed", "hurried, would have missed"],
    "hadn't hurried, would have missed"
  )
    new Question(
    "If you (save) money, you (buy) a new car.",
    ["save, will be able to buy", "saved, would have been able to buy", "saved, will be able to buy buy", "had saved, would be able to buy"],
    "save, will be able to buy"
  ),
  new Question(
    "If it (not rain), we (go) to the park.",
    ["doesn't rain, would go", "wouldn't rain, would go", "will not rain, will go", "doesn't rain, will go"],
    "doesn't rain, will go"
  ),
  new Question(
    "If she (not eat) too much, she (not feel) sick.",
    ["hadn't eaten, would not feel", "wouldn't have eaten, would not feel", "hadn't eaten, wouldn't have felt", "didn't eat, won't feel"],
    "hadn't eaten, wouldn't have felt"
  )
];

$('.reset').click(startOver);

var quiz = new Quiz(questions);

populate();
</script>

{{< /rawhtml >}}