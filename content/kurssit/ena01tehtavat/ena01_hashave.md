---
title: "Has vai have?"
date: 2021-04-26
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
  gameOverHTML += "<br>Sait kaikki " + quiz.score + " kohtaa oikein!"
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
  new Question("I _____ eaten pizza today.", ["have", "has", ], "have"),
  new Question("Paul _____ written a book.", ["have", "has"], "has"),
  new Question("I _____ enjoyed my time in America", ["have", "has"], "have"),
  new Question("Jake _____ promised to sell me his car", ["have", "has"], "has"),
  new Question("It _____ rained today.", ["haven't", "hasn't"], "hasn't"),
  new Question("William _____ seen his dog today.", ["haven't", "hasn't"], "hasn't"),
  new Question("_____ you seen his dog?", ["have", "has"], "have"),
  new Question("Do you think the dog _____ run away?", ["have", "has"], "has"),
  new Question("It ______ probably just gone for a walk.", ["have", "has"], "has"),
  new Question("We ______ been looking for it for hours.", ["have", "has"], "have"),
	new Question("My parents _____ been very worried about him.", ["have", "has"], "have"),
  new Question("They _____ even called the police about it.", ["have", "has"], "have"),
  new Question("_____ you checked the garage?", ["have", "has"], "have"),
  new Question("I _____ found the dog. It was in the garage.", ["have", "has"], "have"),
  new Question("_____ you ever swum in the ocean?", ["have", "has"], "have"),
  new Question("Michelle _____ swum in the ocean quite a few times.", ["have", "has"], "has"),
	new Question("She _____ swum in the Arctic Ocean though.", ["haven't", "hasn't"], "hasn't"),
	new Question("Well I _____ swum there either.", ["haven't", "hasn't"], "haven't"),
	new Question("I _____ chosen to skip school today", ["have", "has"], "have"),
	new Question("_____ you already passed the English test?", ["have", "has"], "have"),
	new Question("I _____ failed it three times already.", ["have", "has"], "have"),
	new Question("Billy ____ passed it either.", ["haven't", "hasn't"], "hasn't"),
	new Question("John and Michael ____ even failed the 7th grade because of the test.", ["have", "has"], "have"),
	new Question("_____ you done your homework?", ["haven't", "hasn't"], "haven't"),
	new Question("I _____ done my homework every day.", ["have", "has"], "have"),
	new Question("The teacher _____ also given me extra lessons after school.", ["have", "has"], "has"),
	new Question("Joonas _____ been very good at teaching.", ["have", "has"], "has"),
	new Question("I _____ learned more than I ever have.", ["have", "has"], "have"),
	new Question("He _____ created this exercise so I can pass the test.", ["have", "has"], "has"),
	new Question("_____ you already learned when to use 'have' and 'has?'", ["have", "has"], "have"),
	new Question("Yes I _____. This is question #31 after all.", ["have", "has"], "have"),
	new Question("Milloin tulee 'has'?", ["yksikön kolmas", "joku muu"], "yksikön kolmas"),
        
  
];

$('.reset').click(startOver);

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();

</script>

{{< /rawhtml >}}


