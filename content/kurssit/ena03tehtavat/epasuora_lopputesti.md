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
  new Question('"We went there last year as well"<br>She also said they ______ there the previous year as well', ['went', 'had been', 'had gone', 'were'], 'had gone'),
  new Question('She said, "Shall we begin?"<br>She asked __________', ['should we start?', 'shall we start?', 'if we should start', 'if we shall start'], 'if we should start'),
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


