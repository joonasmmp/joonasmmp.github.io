---
title: "Laskettavat ja ei-laskettavat substantiivit: Lopputesti"
date: 2022-3-30
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
  new Question('Time is _____ money', ['a', 'an', 'the', '-'], '-'),
  new Question('I love _____ peace and quiet of country life', ['a', 'an', 'the', '-'], 'the'),
  new Question('I like eating _____ Italian food.', ['a', 'an', 'the', '-'], '-'),
  new Question('However, Fiorentina, ______ Italian restaurant near us, is terrible.', ['a', 'an', 'the', '-'], 'the'),
  new Question('Who invented _____ computer?', ['a', 'an', 'the', '-'], 'the'),
  new Question('How much is _____ slice of that cheese?', ['a', 'an', 'the', '-'], 'a'),
  new Question('_____ Euro is not doing well thanks to the Russian invasion.', ['a', 'an', 'the', '-'], 'the'),
  new Question('Well that really is _____ interesting article.', ['a', 'an', 'the', '-'], 'an'),
  new Question('I will take you to _____ airport when you are ready!', ['a', 'an', 'the', '-'], 'the'),
  new Question('Philip is ____ very nice person!',  ['a', 'an', 'the', '-'], 'a'),
  new Question('He spends ____ whole day helping the poor.', ['a', 'an', 'the', '-'], 'the'),
  new Question('This is not ____ end of the exercise.', ['a', 'an', 'the', '-'], 'the'),
  new Question('Have you seen my pet rabbit? It is ____ white one you saw earlier today.', ['a', 'an', 'the', '-'], 'the'),
  new Question('Pet rabbits can run 30 miles ______ hour.', ['a', 'an', 'the', '-'], 'an'),
  new Question('It is  ______ fifth rabbit I have lost this month.', ['a', 'an', 'the', '-'], 'the'),
  new Question('They cost 60 dollars ______ rabbit.', ['a', 'an', 'the', '-'], 'a'),
  new Question('Who killed ____ Archduke of Austria-Hungary?', ['a', 'an', 'the', '-'], 'the'),
  new Question('______ Dolphin is a very intelligent animal.', ['a', 'an', 'the', '-'], 'the'),
  new Question('They always have ______ few tricks up their sleeve.', ['a', 'an', 'the', '-'], 'a'),
  new Question('Are you ill? Do you have _____ flu?', ['a', 'an', 'the', '-'], 'the'),
  new Question('Oh lord are you having ______ heart attack?', ['a', 'an', 'the', '-'], 'a'),
  new Question('We love _____ South of England.', ['a', 'an', 'the', '-'], 'the'),
  new Question('_____ Weasleys are an odd family.', ['a', 'an', 'the', '-'], 'the'),
  new Question('You are _____ wizard, Harry!', ['a', 'an', 'the', '-'], 'a'),
  new Question('What can we do to help _____ blind?', ['a', 'an', 'the', '-'], 'the'),
  new Question('Can you speak ______ French?', ['a', 'an', 'the', '-'], '-'),
  new Question('Oui oui monsieur, I love ______ France!', ['a', 'an', 'the', '-'], '-'),
  new Question('However, I must admit I despise ______ French! They are awful!', ['a', 'an', 'the', '-'], 'the'),
  new Question('Stop pretending, we know you are from _____ Netherlands.', ['a', 'an', 'the', '-'], 'the'),
  new Question('Originally he is from _____ European country, but I forgot which one.', ['a', 'an', 'the', '-'], 'a'),
  new Question("Do you have ______ driver's license?", ['a', 'an', 'the', '-'], 'a'),
  new Question('Of course! I am ______ adult after all.', ['a', 'an', 'the', '-'], 'an'),
  new Question('_____ computer on my desk belongs to my husband.', ['a', 'an', 'the', '-'], 'the'),
  new Question('She really does give ______ good advice!', ['a', 'an', 'the', '-'], '-'),
  new Question('Is this ______ last question of this test?', ['a', 'an', 'the', '-'], 'the'),
  
];

$('.reset').click(startOver);

var quiz = new Quiz(questions);

populate();
</script> 

{{< /rawhtml >}}


