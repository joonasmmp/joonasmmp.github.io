---
title: "Infinitiivit ja -ing: Lopputesti"
date: 2022-5-1
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
  var gameOverHTML = "Aivan mahtavaa!!";
  gameOverHTML += "<br>Sait kaikki " + quiz.score + " kohtaa oikein!"
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
  new Question("Hey mate, I just called _____ you something.", ["ask", "to ask", "asking", "asked" ], "to ask"),
  new Question("Do you feel like _____ downhill skiing with me?", ["go", "to go", "going", "gone" ], "going"),
  new Question("Sorry, I can't _____ tonight.", ["come", "to come", "coming", "comes"], "come"),
  new Question("I am not allowed _____ the house tonight.", ["leave", "to leave", "leaving", "left" ], "to leave"),
  new Question("Also, I'm super afraid of downhill _______.", ["ski", "to ski", "skiing", "skis" ], "skiing"),
  new Question("I admit _____ speed and danger.", ["like", "to like", "liking", "likes" ], "liking"),
  new Question("But it's not worth _____ for.", ["die", "to die", "dying", "died"], "dying"),
  new Question("You had better _____ careful out there.", ["be", "to be", "being", "are" ], "be"),
  new Question("Even if you are good at _____, anything can happen.", ["ski", "to ski", "skiing", "skied" ], "skiing"),
  new Question("And it's hard  _____ a leg or two.", ["not break", "not to break", "not breaking", "not broke" ], "not to break"),
  new Question("Cousin! Let's _____ bowling tonight!", ["go", "to go", "going", "gone" ], "go"),
  new Question("Sorry, I am not able _____ tonight.", ["come", "to come", "coming", "came" ], "to come"),
  new Question("Quit _____ already! I know you can!", ["lie", "to lie", "lying", "lied" ], "lying"),
  new Question("Sorry. I just can't stand _____.", ["bowl", "to bowl", "bowling", "bowled" ], "bowling"),
  new Question("And you can't make me _____ it.", ["like", "to like", "liking", "liked" ], "like"),
  new Question("Would you _____ to do something else, then?", ["like", "to like", "liking", "liked" ], "like"),
  new Question("Something you can enjoy _____.", ["do", "to do", "doing", "done" ], "doing"),
	new Question("Should we _____ Frank and see what he's up to?", ["call", "to call", "calling", "called" ], "call"),
	new Question("Sure, I will _____ him straight away.", ["call", "to call", "calling", "called" ], "call"),
	new Question("Let me _____ him, I haven't spoken to him in weeks.", ["call", "to call", "calling", "called" ], "call"),
	new Question("Sure, you do what you want _____.", ["do", "to do", "doing", "done" ], "to do"),
	new Question("I don't mind you _____ him.", ["call", "to call", "calling", "called" ], "calling"),
	new Question("Actually, I'm fed up with _____ people all the time.", ["to have call", "having to call", "having call", "to have call"], "having to call"),
	new Question("I'm not really crazy about _____ to people.", ["talk", "to talk", "talking", "talks" ], "talking"),
	new Question("Especially during class when you are not allowed _____ during teaching.", ["talk", "to talk", "talking", "talked" ], "to talk"),
	new Question("That way we can keep _____ without interruptions.", ["study", "to study", "studying", "studied" ], "studying"),
	new Question("But some people just can't help _____.", ["talk", "to talk", "talking", "talked" ], "talking"),
	new Question("But the teacher doesn't mind as long as everyone keeps _____.", ["learn", "to learn", "learning", "learned" ], "learning"),
	new Question("Do what you have to do to enjoy _____.", ["study", "to study", "studying", "studied" ], "studying"),
	new Question("But I still won't _____ bowling with you.", ["go", "to go", "going", "goes" ], "go"),
	new Question("It's time to finish _____ this exercise.", ["do", "to do", "doing", "does" ], "doing"),
];

$('.reset').click(startOver);

var quiz = new Quiz(questions);

populate();
</script> 

{{< /rawhtml >}}


