---
title: "Epäsäännölliset verbit l-r?"
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
  new Question("johtaa: lead, led, _____", ["lead", "led", "leaded", "leaden" ], "led"),
  new Question("lähteä, jättää: leave, left, _____", ["leave", "left", "leaven", "leaved" ], "left"),
  new Question("lainata (jollekkin): lend, lent, _____", ["lend", "lent", "lenten", "lented"], "lent"),
  new Question("antaa, sallia: let, let, _____", ["let", "lat", "lit", "letten" ], "let"),
  new Question("maata, olla: lie, lay, _____", ["lie", "lay", "lain", "lied" ], "lain"),
  new Question("kadota, menettää: lose, lost, _____", ["lose", "lost", "loose", "losen" ], "lost"),
  new Question("tehdä, valmistaa: make, made, _____", ["make", "made", "maden", "maken"], "made"),
  new Question("tarkoittaa: mean, meant, _____", ["mean", "meant", "meanted", "meaned" ], "meant"),
  new Question("tavata: meet, met, _____", ["meet", "met", "meeten", "meat" ], "met"),
  new Question("maksaa: pay, paid, _____", ["pay", "paid", "pain", "payed" ], "paid"),
  new Question("laittaa: put, put, _____", ["put", "putted", "pet", "pat" ], "put"),
  new Question("lopettaa: quit, quit, _____", ["quit", "quitted", "quitten", "quitt" ], "quit"),
  new Question("lukea: read, read, _____", ["read", "readed", "readen", "raid" ], "read"),
  new Question("ratsastaa, ajaa: ride, rode, _____", ["ride", "rode", "ridden", "rodden" ], "ridden"),
  new Question("soida, soittaa: ring, rang, _____", ["ring", "rang", "reng", "rung" ], "rung"),
  new Question("nousta: rise, rose, _____", ["rise", "rose", "risen", "rosen" ], "risen"),
  new Question("juosta: run, ran, _____", ["run", "ran", "runnen", "rannen" ], "run"),
  
];

$('.reset').click(startOver);

// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();
</script>

{{< /rawhtml >}}


