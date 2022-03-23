---
title: "Epäsuora kerronta: Lopputesti"
date: 2021-8-23
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
  new Question('"He will come tomorrow."<br>He told me that he ________ the following day.', ['is coming', 'will come', 'would come', 'was coming'], 'would come'),
  new Question('"I have been there before"<br>She said she _______ there before.', ['was','had been','has been', 'were'], 'had been'),
  new Question('"My hobbies are taking all my time"<br>He mentioned that his hobbies ______ all his time.', ['are taking', 'was taking', 'were taking', 'had been taking'], 'were taking'),
  new Question('"I am flying to Kemi tomorrow"<br>She said she _______ to Kemi the following day.', ['are flying', 'were flying', 'was flying', 'have been flying'], 'was flying'),
  new Question('"We went there last year as well"<br>She also said they ______ there the previous year as well.', ['went', 'had been', 'had gone', 'were'], 'had gone'),
  new Question('She said, "Shall we begin?"<br>She asked _____________', ['should we begin?', 'shall we begin?', 'if we should begin.', 'if we shall begin.'], 'if we should begin.'),
  new Question('"Who are you?"<br>The officer asked ___________', ["who he was", "me who he was", "me who he was", "who I was"], "who I was"),
  new Question('"We saw the Snow Castle when we went to Kemi"<br>She told me she _____ the Snow Castle when she _____ to Kemi',  ["saw, went", "saw, had gone", "had seen, went", "had seen, had gone" ], "had seen, had gone"),
  new Question('"Why didn&apost you send me a postcard?"<br>He asked me why  _______ him a postcard.', ["didn't I send", "hadn't I sent", "I didn't send", "I hadn't sent" ], "hadn't I sent"),
  new Question('"I am going to school."<br>My brother says he ____________ to school.', ["went", "had gone", "was going", "is going" ], "is going"),
  new Question('"How long will it take to walk from Helsinki to Berlin?"<br>Johnny asked how long it ________ from Helsinki to Berlin.', ["takes", "will take", "would take", "took" ], "would take"),
  new Question('I told him __________ do it', ["don't", "to don't", "to not", "not to" ], "not to"),
  new Question('"Are you going to the party?"<br>He asked ___________ to the party', ["was I", "will I", "if I was going", "was I going" ], "if I was going"),
];

$('.reset').click(startOver);

var quiz = new Quiz(questions);

populate();
</script> 

{{< /rawhtml >}}


