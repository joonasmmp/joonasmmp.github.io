---
title: "Relatiivipronominit: Lopputesti"
date: 2022-5-1
draft: false
type: page
layout: tehtava
---
<!-- raw html -->
{{< rawhtml >}}
<link rel="stylesheet" type="text/css" href="/css/monivalinta1.css"/>
<body>
<div id="quiz">

            <p id="question"></p>
 <br>
            <div class="buttons">
            <button id="btn0"><span id="choice0"></span></button> 
            <button id="btn1"><span id="choice1"></span></button>
            <button id="btn2"><span id="choice2"></span></button> 
            <button id="btn3"><span id="choice3"></span></button>     
</div>
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
  var gameOverHTML = "Aivan mahtavaa!!";
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
  new Question("I like students _____ don't interrupt teaching.", ["who", "which", "whose", "what"], "who"),
  new Question("A silent class is exactly _____ we need on a Wednesday afternoon.", ["who", "which", "what", "that"], "what"),
  new Question("Are there students in Finland _____ don't like English?", ["what", "which", "whose", "that"], "that"),
  new Question("I know a student _____ parents are from Australia.", ["who", "which", "whose", "that"], "whose"),
  new Question("He doesn't like English, _____ is really weird.", ["who", "which", "what", "that"], "which"),
  new Question("I'm making a list of people _____ don't study English.", ["who", "which", "whose", "what"], "who"),
  new Question("English language is the skill _____ makes you a good person.", ["who", "what", "whose", "that"], "that"),
  new Question("Tom Hanks, _____ is an actor, speaks English.", ["who", "which", "whose", "that"], "who"),
  new Question("Tom Hanks, _____ son Colin is also and actor, speaks English too.", ["who", "which", "whose", "that"], "whose"),
  new Question("One of my students didn't know who Tom Hanks was, _____ made me sad.", ["who", "which", "whose", "that"], "which"),
  new Question("Really? I don't know anyone _____ doesn't know who Tom Hanks is.", ["who", "which", "whose", "what"], "who"),
  new Question("My mother once sent a postcard to Tom Hanks, _____ was very awkward.", ["who", "which", "what", "that"], "which"),
  new Question("Was Tom or Colin Hanks the actor _____ played Forrest Gump?", ["who", "which", "whose", "what"], "who"),
  new Question("Tuleeko pilkkua ennen 'that' relatiivipronominia?", ["Juu", "No ei tule", "Joskus", "Silloin tällöin"], "No ei tule"),
  
];

$('.reset').click(startOver);

var quiz = new Quiz(questions);

populate();
</script> 

{{< /rawhtml >}}


