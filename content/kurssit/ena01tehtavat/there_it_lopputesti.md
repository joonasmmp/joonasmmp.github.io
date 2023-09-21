---
title: "Muodolliset subjektit: Lopputesti"
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

// kysymykset tähän
var questions = [
  new Question("There ___ something wrong with him today.", ["is", "was", "were", "had been",], "is"),
  new Question("There ___ a lot of people at the party.", ["is", "was", "were", "had been",], "were"),
  new Question("There ___ a lot of crime around here lately.", ["is", "was", "has been", "had been",], "has been"),
  new Question("There ___ a lot of crime around here last year.", ["is", "was", "has been", "had been",], "was"),
  new Question("There ___ a lot of crime around here in the 1990s.", ["is", "was", "has been", "had been",], "was"),
  new Question("There ___ many high mountains in Finland", ["isn't", "wasn't", "aren't", "weren't",], "aren't"),
  new Question("There ___ many high mountains in Finland in the 1990s.", ["isn't", "wasn't", "aren't", "weren't",], "weren't"),
  new Question("It ___ often windy in Oulu", ["is", "was", "has been", "were",], "is"),
  new Question("There ___ no time to waste, let's go!!!.", ["is", "was", "has been", "were",], "is"),
  new Question("How many people ___ there at your lesson last night?", ["was", "were", "had been", "is",], "were"),
  new Question("There ____ no students left, let's start packing our books.", ["is", "are", "were", "was",], "are"),
  new Question("In our school it ____ customary to call our teachers Mr./Mrs. Teachers", ["is", "are", "were", "was",], "is"),
  new Question("It ____ a weird year, hasn't it?", ["is", "have been", "has been", "was",], "has been"),
  new Question("It ____ a weird year, wasn't it?", ["is", "have", "has", "was",], "was"),
  new Question("There ____ a test last week? I must've missed it!", ["is", "has been", "has", "was",], "was"),
  new Question("It ____ only last year when I aced all tests possible.", ["was", "were", "are", "is",], "was"),
  new Question("There ____ a lot of noise at the party last night.", ["is", "was", "has been", "were",], "was"),
  new Question("There ____ some people at the party I had never met before", ["is", "was", "are", "were",], "were"),
  new Question("There ____ many people I haven't already met", ["isn't", "aren't", "hasn't been", "were",], "aren't"),
  new Question("There ____ a cat and two dogs outside.", ["is", "are", "have been", "had been",], "is"),
  new Question("There ____ a cat and two dogs outside last night.", ["is", "are", "have been", "was",], "was"),



];

$('.reset').click(startOver);

var quiz = new Quiz(questions);

populate();
</script>

{{< /rawhtml >}}