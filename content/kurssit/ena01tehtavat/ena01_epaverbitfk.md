---
title: "Epäsäännölliset verbit f-k?"
date: 2021-8-13
draft: false
type: page
layout: tehtava
---

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

<div class="modal fade" id="modal" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content bg-white dark:bg-warmgray-900">
      <div class="modal-header">
        <h4 class="modal-title">Oh dear!</h4>
      </div>
      <div class="modal-body">
        <p>Väärä vastaus</p>
	      <p>Nyt ei menny ihan niinku piti, mutta yritä uudestaan!</p>
      </div>
      <div class="modal-footer">
        <button id="resetbutton2" class="reset" value="reset">Takaisin alkuun</button>
      </div>
    </div>
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
    $("#modal").modal("show")
	sleep(2000);

  }

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

// kysymykset tähän
var questions = [
  new Question("kaatua, pudota: fall, fell, _____", ["fall", "fell", "fallen", "fellen" ], "fallen"),
  new Question("ruokkia, syöttää: feed, fed, _____", ["feed", "fed", "feeded", "feeden" ], "fed"),
  new Question("tuntea: feel, felt, _____", ["feel", "felt", "feeled", "felted"], "felt"),
  new Question("tapella, riidellä: fight, fought, _____", ["fight", "fought", "fighted", "faught" ], "fought"),
  new Question("löytää: find, found, _____", ["find", "found", "founded", "faund" ], "found"),
  new Question("lentää: fly, flew, _____", ["fly", "flew", "flied", "flown" ], "flown"),
  new Question("unohta: forget, forgot, _____", ["forget", "forgot", "forgotted", "forgotten"], "forgotten"),
  new Question("jäätyä: freeze, froze, _____", ["freeze", "froze", "frozen", "freezed" ], "frozen"),
  new Question("saada: get, got, _____", ["get", "get(ted)", "got(ted)", "got(ten)" ], "got(ten)"),
  new Question("antaa: give, gave, _____", ["give", "gave", "given", "gaven" ], "given"),
  new Question("mennä: go, went, _____", ["go", "went", "gone", "goed" ], "gone"),
  new Question("kasvaa, kasvattaa: grow, grew, _____", ["grow", "grew", "grewn", "grown" ], "grown"),
  new Question("riippua, ripustaa: hang, hung, _____", ["hang", "hung", "hungen", "hanged" ], "hung"),
  new Question("olla, omistaa: have, had, _____", ["have", "had", "haven", "has" ], "had"),
  new Question("kuulla: hear, heard, _____", ["hear", "heard", "heared", "hearn" ], "heard"),
  new Question("piilottaa, piiloutua: hide, hid, _____", ["hide", "hid", "hidden", "hidded" ], "hidden"),
  new Question("lyödä: hit, hit, _____", ["hit", "hitted", "hitten", "hut" ], "hit"),
	new Question("pitää (kiinni): hold, held, _____", ["hold", "held", "holden", "helden" ], "held"),
	new Question("loukata, sattua, satuttaa: hurt, hurt, _____", ["hurt", "hurted", "hurten", "hart" ], "hurt"),
	new Question("pitää, säilyttää: keep, kept, _____", ["keep", "kept", "keeped", "keept" ], "kept"),
	new Question("tietä, tuntea: know, knew, _____", ["know", "knew", "known", "knewn" ], "known"),
  
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


