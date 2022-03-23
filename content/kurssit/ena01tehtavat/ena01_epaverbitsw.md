---
title: "Epäsäännölliset verbit s-w?"
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
  gameOverHTML += "<h2 id='score'> Sait kaikki " + quiz.score + " kohtaa oikein! </h2>"
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;
}

 function displayFinalMessage(){
  $("#buttons").empty();
  $("#quiz").empty();
  $("#quiz").append('<div id="finalMessage">Nyt meni väärin niin että heilahti.<br>Mutta ei se haittaa, kokeile uudestaan!</div>');
  $("#quiz").append('<button id="resetbutton">Takaisin alkuun</button>')
  document.getElementById("resetbutton").onclick = (startOver);
 }

// kysymykset tähän
var questions = [
  new Question("sanoa: say, said, _____", ["say", "said", "sain", "sayed" ], "said"),
  new Question("nähdä: see, saw, _____", ["see", "saw", "seen", "sawn" ], "seen"),
  new Question("myydä: sell, sold, _____", ["sell", "sold", "selln", "solln"], "sold"),
  new Question("lähettä: send, sent, _____", ["send", "sent", "sended", "senten" ], "sent"),
  new Question("laittaa, asettaa: set, set, _____", ["set", "seet", "sat", "sit" ], "set"),
  new Question("ravistaa, pudistaa: shake, shook, _____", ["shake", "shook", "shaken", "shoken" ], "shaken"),
  new Question("paistaa, loistaa: shine, shone, _____", ["shine", "shone", "shined", "sheen"], "shone"),
  new Question("ampua, laukaista: shoot, shot, _____", ["shoot", "shot", "shat", "shut" ], "shot"),
  new Question("näyttää: show, showed, _____", ["show", "showed", "shown", "shawn" ], "shown"),
  new Question("sulkea: shut, shut, _____", ["shut", "shat", "shot", "shoot" ], "shut"),
  new Question("laulaa: sing, sang, _____", ["sing", "sang", "sung", "seng" ], "sung"),
  new Question("istua: sit, sat, _____", ["sit", "sat", "sut", "set" ], "sat"),
  new Question("nukkua: sleep, slept, _____", ["sleep", "slept", "sleeped", "sleepen" ], "slept"),
  new Question("puhua: speak, spoke, _____", ["speak", "spoke", "speaken", "spoken" ], "spoken"),
  new Question("viettää, kuluttaa: spend, spent, _____", ["spend", "spent", "spenden", "spenten" ], "spent"),
  new Question("seisoa: stand, stood, _____", ["stand", "stood", "stooden", "standen" ], "stood"),
  new Question("varastaa: steal, stole, _____", ["steal", "stole", "stoled", "stolen" ], "stolen"),
  new Question("pistää, laittaa: stick, stuck, _____", ["stick", "stuck", "stack", "stock" ], "stuck"),
  new Question("uida: swim, swam, _____", ["swim", "swam", "swum", "swom" ], "swum"),
  new Question("ottaa, viedä: take, took, _____", ["take", "took", "taken", "tooken" ], "taken"),
  new Question("opettaa: teach, taught, _____", ["teach", "taught", "teachen", "taughten" ], "taught"),
  new Question("kertoa, käskeä: tell, told, _____", ["tell", "told", "tellen", "tolden" ], "told"),
  new Question("ajatella, luulla: think, thought, _____", ["think", "thought", "thank", "thunk" ], "thought"),
  new Question("heittää: throw, threw, _____", ["throw", "threw", "thrown", "threwn" ], "thrown"),
  new Question("ymmärtää: understand, understood, _____", ["understand", "understood", "understanden", "understooden" ], "understood"),
  new Question("herätä: wake, woke, _____", ["wake", "woke", "waken", "woken" ], "woken"),
  new Question("pitää yllä, käyttää: wear, wore, _____", ["wear", "wore", "wearn", "worn" ], "worn"),
  new Question("voittaa: win, won, _____", ["win", "won", "wan", "wun" ], "won"),
  new Question("kirjoittaa: write, wrote, _____", ["write", "wrote", "written", "wrotten" ], "written"),
  
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


