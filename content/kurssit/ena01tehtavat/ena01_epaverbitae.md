---
title: "Epäsäännölliset verbit a-e"
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

function displayFinalMessage() {
  $("#buttons").empty();
  $("#quiz").empty();
  $("#quiz").append('<div id="finalMessage">Oh dear!<br><br>Nyt meni väärin niin että heilahti.<br>Mutta ei se haittaa, kokeile uudestaan!</div>');
  $("#quiz").append('<button id="resetbutton">Takaisin alkuun</button>')
  document.getElementById("resetbutton").onclick = (startOver);
 }

// kysymykset tähän
var questions = [
  new Question("olla: be, was/were, _____", ["was", "be", "been", "were" ], "been"),
  new Question("lyödä, voittaa: beat, beat, _____", ["beat", "beated", "beaten", "bote" ], "beaten"),
  new Question("tulla joksikin: become, became, _____", ["become", "became", "becamed", "becomed"], "become"),
  new Question("alkaa: begin, began, _____", ["begin", "began", "begun", "begon" ], "begun"),
  new Question("lyödä vetoa: bet, bet, _____", ["bet", "bat", "betted", "bot" ], "bet"),
  new Question("purra: bite, bit, _____", ["bit", "bite", "bitted", "bitten" ], "bitten"),
  new Question("puhaltaa, tuulla: blow, blew, _____", ["blow", "blew", "blown", "blewn"], "blown"),
  new Question("rikkoa, särkyä: break, broke, _____", ["break", "broke", "broken", "broked" ], "broken"),
  new Question("tuoda: bring, brought, _____", ["bring", "brought", "brang", "brung" ], "brought"),
  new Question("rakentaa: build, built, _____", ["build", "built", "builded", "builted" ], "built"),
  new Question("ostaa: buy, bought, _____", ["buy", "buyed", "bought", "boughted" ], "bought"),
  new Question("saada/ottaa kiinni: catch, caught, _____", ["catch", "caught", "caughted", "catched" ], "caught"),
  new Question("valita: choose, chose, _____", ["choose", "chose", "chosed", "chosen" ], "chosen"),
  new Question("tulla: come, came, _____", ["come", "came", "comed", "camed" ], "come"),
  new Question("maksaa, olla hintana: cost, cost, _____", ["cost", "costed", "cast", "casted" ], "cost"),
  new Question("leikata: cut, cut, _____", ["cut", "cutted", "cat", "catted" ], "cut"),
  new Question("jakaa: deal, dealt, _____", ["deal", "dealt", "dealed", "dealted" ], "dealt"),
	new Question("tehdä: do, did, _____", ["do", "did", "done", "donned" ], "done"),
	new Question("vetää, piirtää: draw, drew, _____", ["draw", "drew", "drown", "drawn" ], "drawn"),
	new Question("juoda: drink, drank, _____", ["drink", "drank", "drunk", "dranked" ], "drunk"),
	new Question("ajaa: drive, drove, _____", ["drive", "drove", "drawn", "driven" ], "driven"),
	new Question("syödä: eat, ate, _____", ["eat", "ate", "eated", "eaten" ], "eaten"),
  
];

$('.reset').click(startOver);

var quiz = new Quiz(questions);

populate();
</script>

{{< /rawhtml >}}


