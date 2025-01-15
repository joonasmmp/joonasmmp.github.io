---
title: "Futuuri: Lopputesti"
date: 2022-2-1
draft: false
type: page
layout: tehtava
---

<!-- raw html -->
{{< rawhtml >}}
<link rel="stylesheet" type="text/css" href="/css/monivalinta1.css"/>
<body>
<div id="quiz">

            <p style="text-align:center;" id="question"></p>
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
};

function guess(id, guess) {
  var button = document.getElementById(id);
  button.onclick = function() {
    quiz.guess(guess);
    populate();
  }
};

function showProgress() {
  var currentQuestionNumber = quiz.questionIndex + 1;
  var element = document.getElementById("progress");
  element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};

function showScores() {
  var gameOverHTML = "<h1>Result</h1>";
  gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
  var element = document.getElementById("quiz");
  element.innerHTML = gameOverHTML;
};

// create questions
var questions = [
  new Question("She _____ (be) here soon.", ["will be", "is", "was", "has been"], "will be"),
  new Question("We _____ (travel) to Japan next year.", ["will travel", "travelled", "are travelling", "have travelled"], "will travel"),
  new Question("He _____ (call) you later.", ["will call", "called", "is calling", "has called"], "will call"),
  new Question("I _____ (start) a new job next month.", ["will start", "started", "am starting", "have started"], "will start"),
  new Question("You _____ (see) the results soon.", ["will see", "saw", "are seeing", "have seen"], "will see"),
  new Question("They _____ (visit) their grandparents next weekend.", ["will visit", "visited", "are visiting", "have visited"], "will visit"),
  new Question("They _____ (move) to a new house next week.", ["will move", "moved", "are moving", "have moved"], "will move"),
  new Question("She _____ (finish) her homework by tomorrow.", ["will finish", "finished", "is finishing", "has finished"], "will finish"),
  new Question("We _____ (meet) them at the airport.", ["will meet", "met", "are meeting", "have met"], "will meet"),
  new Question("They _____ (finish) their work by next week.", ["will finish", "finished", "are finishing", "will have finished"], "will have finished"),
  new Question("If you _____ (study) hard, you _____ (pass) the exam.", ["study, will pass", "studied, will pass", "study, passed", "studied, passed"], "study, will pass"),
  new Question("When she _____ (arrive), we _____ (start) the meeting.", ["arrives, will start", "arrived, will start", "arrives, start", "arrived, start"], "arrives, will start"),
  new Question("As soon as they _____ (finish) the project, they _____ (take) a break.", ["finish, will take", "finished, will take", "finish, take", "finished, take"], "finish, will take"),
  new Question("After he _____ (graduate), he _____ (look) for a job.", ["graduates, will look", "graduated, will look", "graduates, looks", "graduated, looks"], "graduates, will look"),
  new Question("If it _____ (rain) tomorrow, we _____ (cancel) the picnic.", ["rains, will cancel", "rained, will cancel", "rains, cancel", "rained, cancel"], "rains, will cancel"),
  new Question("Once you _____ (complete) the form, you _____ (receive) a confirmation email.", ["complete, will receive", "completed, will receive", "complete, receive", "completed, receive"], "complete, will receive"),
  new Question("By the time we _____ (get) there, the store _____ (close).", ["get, will close", "got, will close", "get, closes", "got, closes"], "get, will close"),
  new Question("If she _____ (call) you, you _____ (let) me know.", ["calls, will let", "called, will let", "calls, let", "called, let"], "calls, will let"),
  new Question("I _____ (buy) a new phone when I _____ (get) my salary.", ["will buy, get", "bought, get", "will buy, got", "bought, got"], "will buy, get"),
  new Question("When the movie _____ (end), we _____ (go) for dinner.", ["ends, will go", "ended, will go", "ends, go", "ended, go"], "ends, will go"),
  new Question("If you _____ (save) money, you _____ (buy) a new car.", ["save, will buy", "saved, will buy", "save, bought", "saved, bought"], "save, will buy")
];


// create quiz
var quiz = new Quiz(questions);

// display quiz
populate();

</script>
{{< /rawhtml >}}