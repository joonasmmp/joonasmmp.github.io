---
title: "Indefiniittipronominit: Lopputesti"
date: 2022-3-30
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
  new Question('_____ days I’d just like to stay in bed.', ['Some', 'Any', 'All'], 'Some'),
  new Question('Like today. It’s Sunday and _____ of my dozens of friends can play with me.', ['every', 'none', 'no of my'], 'none'),
  new Question('_____ of them has something....', ['Everyone', 'Every one','All'] 'Every one'),
  new Question('Every one of them has something _____ to do', ['other', 'else','another'] 'else'),
  new Question('_____ is traveling with her parents', ['Another', 'Some', 'One'], 'One'),
  new Question('_____ has to visit the doctor, and the list goes on and on', ['another', 'other', 'the other', 'another'], 'another'),
  new Question('Why do I never get to have _____ fun?', ['any', 'some', 'no'], 'any'),
  new Question('I’d like to play disc golf _____ day long ', ['all', 'all of', 'whole'], 'all'),
  new Question('So that _____ foot would be dying in the evening', ['all', 'each', 'everyone'], 'each'),
  new Question('But sadly not _____ boy is that lucky', ['every', 'any', 'some'], 'every'),
  new Question('I think that _____ can cheer me up at this point',  ["nothing can't", "anything can't", "nothing can"], "nothing can"),
  new Question('I think I need _____ new to hang out with',  ['some one', 'someone', 'some'], 'someone'),
  new Question('Maybe _____ of my teachers could hang out with me',  ['some', 'every', 'each'], 'some'),
  new Question('_____ teacher is as cool as Jorma they say',  ['All', 'No', 'Some'], 'No'),
  new Question('None of my teachers _____ as cool as him, so it must be true',  ['are not', 'are', 'is'], 'are'),
  new Question('But if I hang out with one my teachers, I would hang out with _____ as well',  ['the other', 'others', 'the others'], 'the others'),
  new Question('I guess I will stay lonely because _____ my friends would make fun of me if that happened ',  ['all', 'every', 'each'], 'all'),
];

$('.reset').click(startOver);

var quiz = new Quiz(questions);

populate();
</script> 

{{< /rawhtml >}}


