---
title: "Tunnista aikamuoto"
date: 2021-08-13
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
  var gameOverHTML = "<h1>Aivan mahtavaa!!</h1>";
  gameOverHTML += "<h2 id='score'> Sait kaikki " + quiz.score + " kohtaa oikein! </h2>"
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;
}

 function displayFinalMessage(){
  $("#buttons").empty();
  $("#quiz").empty();
  $("#quiz").append('<div id="finalMessage">Oh dear!<br><br>Nyt meni väärin niin että heilahti.<br>Mutta ei se haittaa, kokeile uudestaan!</div>');
  $("#quiz").append('<button id="resetbutton">Takaisin alkuun</button>')
  document.getElementById("resetbutton").onclick = (startOver);
 }

// kysymykset tähän
var questions = [
  new Question("olen", ["preesens", "imperfekti", "perfekti", "pluskvamperfekti"], "preesens"),
  new Question("olin", ["preesens", "imperfekti", "perfekti", "pluskvamperfekti"], "imperfekti"),
  new Question("olen ollut", ["preesens", "imperfekti", "perfekti", "pluskvamperfekti"], "perfekti"),
  new Question("decide", ["preesens", "imperfekti", "perfekti", "pluskvamperfekti"], "preesens"),
  new Question("have decided", ["preesens", "imperfekti", "perfekti", "pluskvamperfekti"], "perfekti"),
  new Question("doesn't do", ["preesens", "imperfekti", "perfekti", "pluskvamperfekti"], "preesens"),
  new Question("hasn't seen", ["preesens", "imperfekti", "perfekti", "pluskvamperfekti"], "perfekti"),
  new Question("eats", ["preesens", "imperfekti", "perfekti", "pluskvamperfekti"], "preesens"),
  new Question("spoke", ["preesens", "imperfekti", "perfekti", "pluskvamperfekti"], "imperfekti"),
  new Question("on tuonut", ["preesens", "imperfekti", "perfekti", "pluskvamperfekti"], "perfekti"),
  new Question("ei ole syönyt", ["preesens", "imperfekti", "perfekti", "pluskvamperfekti"], "perfekti"),
  new Question("didn't do", ["preesens", "imperfekti", "perfekti", "pluskvamperfekti"], "imperfekti"),
  new Question("do", ["preesens", "imperfekti", "perfekti", "pluskvamperfekti"], "preesens"),
  new Question("has done", ["preesens", "imperfekti", "perfekti", "pluskvamperfekti"], "perfekti"),
  new Question("löi", ["preesens", "imperfekti", "perfekti", "pluskvamperfekti"], "imperfekti"),
  new Question("lyön", ["preesens", "imperfekti", "perfekti", "pluskvamperfekti"], "preesens"),
  new Question("olen lyönyt", ["preesens", "imperfekti", "perfekti", "pluskvamperfekti"], "perfekti"),
	new Question("löitkö?", ["preesens", "imperfekti", "perfekti", "pluskvamperfekti"], "imperfekti"),
	new Question("en lyönyt", ["preesens", "imperfekti", "perfekti", "pluskvamperfekti"], "imperfekti"),
  
];

$('.reset').click(startOver);

$(document).ready(function() {
  $("#modal").modal({
    show: false,
    backdrop: 'static'
  });
});

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
</script>

{{< /rawhtml >}}
