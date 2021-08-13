---
title: "Tunnista aikamuoto"
date: 2021-08-13
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
    Tunnista aikamuoto?
    </h2> 
 
            <p id="question"></p>
 
            <div class="buttons">
          <button id="btn0"><span id="choice0"></span></button> 
          <button id="btn1"><span id="choice1"></span></button>
	  <button id="btn2"><span id="choice2"></span></button> 
          <button id="btn3"><span id="choice3"></span></button>
        
        </div>
        </div>
	</div>
	
	<br>
	</body>
	
        <style>
	
.modal-open {
  overflow: hidden
}

.modal {
  position: fixed;
  top: 50px;
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
     -webkit-text-size-adjust: 100%;
    -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    --blue: #007bff;
    --indigo: #6610f2;
    --purple: #6f42c1;
    --pink: #e83e8c;
    --red: #dc3545;
    --orange: #fd7e14;
    --yellow: #ffc107;
    --green: #28a745;
    --teal: #20c997;
    --cyan: #17a2b8;
    --white: #fff;
    --gray: #6c757d;
    --gray-dark: #343a40;
    --primary: #007bff;
    --secondary: #6c757d;
    --success: #28a745;
    --info: #17a2b8;
    --warning: #ffc107;
    --danger: #dc3545;
    --light: #f8f9fa;
    --dark: #343a40;
    --breakpoint-xs: 0;
    --breakpoint-sm: 576px;
    --breakpoint-md: 768px;
    --breakpoint-lg: 992px;
    --breakpoint-xl: 1200px;
    --font-family-sans-serif: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji";
    --font-family-monospace: SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace;
    box-sizing: border-box;
    margin: 0;
    font-family: inherit;
    text-transform: none;
    -webkit-appearance: button;
    text-align: center;
    vertical-align: middle;
    user-select: none;
    border: 1px solid transparent;
    line-height: 1.5;
    display: block;
    width: 100%;
    margin-bottom: 0.5rem !important;
    padding: 12px 16px;
    border-width: 1px;
    border-radius: 5px;
    font-size: 16px;
    font-weight: 500;
    box-shadow: 0px 10px 20px -6px rgba(0, 0, 0, 0.12);
    overflow: hidden;
    position: relative;
    transition: all 0.3s ease;
    cursor: pointer;
    background: #ec8f6a;
    border-color: #ec8f6a;
    color: #fff;
</style>

<div class="modal fade" id="modal" role="dialog">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h4 class="modal-title">Oh dear!</h4>
      </div>
      <div class="modal-body">
        <p>Väärä vastaus</p>
	      <p>Nyt ei menny ihan niinku piti, mutta koita uudestaan!</p>
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
