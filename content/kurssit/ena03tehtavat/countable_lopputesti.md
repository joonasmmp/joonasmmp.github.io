---
title: "Laskettavat ja ei-laskettavat sanat: Lopputesti"
date: 2022-3-28
draft: false
type: page
layout: tehtava
---
Countable or uncountable?
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
  new Question('Children', ['countable', 'uncountable'], 'countable'),
  new Question('Tea', ['countable', 'uncountable'], 'uncountable'),
  new Question('Windows', ['countable', 'uncountable'], 'countable'),
  new Question('Glue', ['countable', 'uncountable'], 'uncountable'),
  new Question('Presidents', ['countable', 'uncountable'], 'countable'),
  new Question('People', ['countable', 'uncountable'], 'countable'),
  new Question('Juice', ['countable', 'uncountable'], 'uncountable'),
  new Question('Butter',  ['countable', 'uncountable'], 'uncountable'),
  new Question('Headache', ['countable', 'uncountable'], 'countable'),
  new Question('Exercise', ['countable', 'uncountable'], 'countable'),
  new Question('Bread', ['countable', 'uncountable'], 'uncountable'),
  new Question('Water', ['countable', 'uncountable'], 'uncountable'),
  new Question('Husband', ['countable', 'uncountable'], 'countable'),
  new Question('Music', ['countable', 'uncountable'], 'uncountable'),
  new Question('Crossroads', ['countable', 'uncountable'], 'countable'),
  new Question('Accordion', ['countable', 'uncountable'], 'countable'),
  new Question('Rice', ['countable', 'uncountable'], 'uncountable'),
  new Question('Knowledge', ['countable', 'uncountable'], 'uncountable'),
];

$('.reset').click(startOver);

var quiz = new Quiz(questions);

populate();
</script> 

{{< /rawhtml >}}


