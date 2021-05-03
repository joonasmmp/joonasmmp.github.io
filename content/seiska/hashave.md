---
title: "Has vai have?"
date: 2021-04-26
draft: false
type: page
layout: tehtava
---

<!-- raw html -->
{{< rawhtml >}}

<body>
<div class="grid">
<div id="quiz">
    <h2>
    Perfekti: have vai has?
    </h2> 
 
            <h4><p id="question"></p></h4>
 
            <div class="buttons">
          <button id="btn0"><span id="choice0"></span></button> 
          <button id="btn1"><span id="choice1"></span></button>
        
        </div>
        </div>
	</div>
	</body>
	
        <style>
	
.modal-open {
  overflow: hidden
}

.modal {
  position: fixed;
  top: 200;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1050;
  display: none;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  outline: 0
}

.modal.fade .modal-dialog {
  -webkit-transform: translate(0, -25%);
  -ms-transform: translate(0, -25%);
  -o-transform: translate(0, -25%);
  transform: translate(0, -25%);
  -webkit-transition: -webkit-transform .3s ease-out;
  -o-transition: -o-transform .3s ease-out;
  transition: -webkit-transform .3s ease-out;
  transition: transform .3s ease-out;
  transition: transform .3s ease-out, -webkit-transform .3s ease-out, -o-transform .3s ease-out
}

.modal.in .modal-dialog {
  -webkit-transform: translate(0, 0);
  -ms-transform: translate(0, 0);
  -o-transform: translate(0, 0);
  transform: translate(0, 0)
}

.modal-open .modal {
  overflow-x: hidden;
  overflow-y: auto
}

.modal-dialog {
  position: relative;
  width: auto;
  margin: 10px
}

.modal-content {
  position: relative;
  background-color: #fff;
  background-clip: padding-box;
  border: 1px solid #999;
  border: 1px solid rgba(0, 0, 0, .2);
  border-radius: 6px;
  -webkit-box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
  box-shadow: 0 3px 9px rgba(0, 0, 0, .5);
  outline: 0
}

.modal-backdrop {
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 1040;
  background-color: #000
}

.modal-backdrop.fade {
  filter: alpha(opacity=0);
  opacity: 0
}

.modal-backdrop.in {
  filter: alpha(opacity=50);
  opacity: .5
}

.modal-header {
  padding: 15px;
  border-bottom: 1px solid #e5e5e5
}

.modal-header .close {
  margin-top: -2px
}

.modal-title {
  margin: 0;
  line-height: 1.42857143
}

.modal-body {
  position: relative;
  padding: 15px
}

.modal-footer {
  padding: 15px;
  text-align: right;
  border-top: 1px solid #e5e5e5
}

.modal-footer .btn+.btn {
  margin-bottom: 0;
  margin-left: 5px
}

.modal-footer .btn-group .btn+.btn {
  margin-left: -1px
}

.modal-footer .btn-block+.btn-block {
  margin-left: 0
}

.modal-scrollbar-measure {
  position: absolute;
  top: -9999px;
  width: 50px;
  height: 50px;
  overflow: scroll
}

@media (min-width:768px) {
  .modal-dialog {
    width: 600px;
    margin: 30px auto
  }

  .modal-content {
    -webkit-box-shadow: 0 5px 15px rgba(0, 0, 0, .5);
    box-shadow: 0 5px 15px rgba(0, 0, 0, .5)
  }

  .modal-sm {
    width: 300px
  }
}

@media (min-width:992px) {
  .modal-lg {
    width: 900px
  }
}

	
#btn0, #btn1, #btn2, #btn3 {
  color: white;
  width: 100px;
  font-size: 18px;
  font-family: 'Times New Roman', serif;
  background: #eb5615;
  padding: 0px;
  border: 1px solid #000000;
  border-radius: 3px;
  text-shadow:
        0.07em 0 black,
        0 0.07em black,
        -0.07em 0 black,
        0 -0.07em black;
}
</style>

<div class="modal fade" id="modal" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Oh dear!</h4>
      </div>
      <div class="modal-body">
        <p>Väärä vastaus</p>
        <p>"Has" jos yksikön kolmas (hän, se). Muuten aina "have".</p>
        <p>
      Kokeile uudestaan.
        </p>
      </div>
      <div class="modal-footer">
        <button id="resetbutton2" class="reset" value="reset">Takaisin alkuun</button>
      </div>
    </div>
  </div>
</div>

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
	modal.classList.add("showModal");

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
