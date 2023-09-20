---
title: "Isot alkukirjaimet: Lopputesti"
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
  new Question("minä", ["i", "I",], "I"),
  new Question("joulu", ["christmas", "Christmas"], "Christmas"),
  new Question("tammikuu", ["january", "January"], "January"),
  new Question("kesä", ["summer", "Summer"], "summer"),
  new Question("sinä", ["you", "You"], "you"),
  new Question("new york", ["New york", "New York"], "New York"),
  new Question("grand canyon", ["the Grand canyon", "The Grand Canyon"], "The Grand Canyon"),
  new Question("suomi", ["finland", "Finland"], "Finland"),
  new Question("suomalainen", ["finnish", "Finnish"], "Finnish"),
  new Question("kapkaupunki", ["Cape town", "Cape Town"], "Cape Town"),
  new Question("uudenvuodenaatto", ["New Year's eve", "New Year's Eve"], "New Year's Eve"),
  new Question("setä roger", ["uncle Roger", "Uncle Roger"], "Uncle Roger"),
  new Question("täti jenny", ["aunt Jenny", "Aunt Jenny"], "Aunt Jenny"),
  new Question("minun tätini", ["my aunt", "my Aunt"], "my aunt"),
  new Question("prinssi harry", ["prince Harry", "Prince Harry"], "Prince Harry"),
  new Question("toinen maailmansota", ["World war II", "World War II"], "World War II"),
  new Question("juutalainen", ["jewish", "Jewish"], "Jewish"),
  new Question("kristitty", ["christian", "Christian"], "Christian"),
  new Question("muslimi", ["a muslim", "a Muslim"], "a Muslim"),
  new Question("oulun yliopisto", ["Oulu university", "Oulu University"], "Oulu University"),
  new Question("monte-criston kreivi", ["the Count of Monte Cristo", "The Count of Monte Cristo"], "The Count of Monte Cristo"),  
  new Question("yhdysvallat", ["the United States of America", "the United States Of America"], "the United States of America"),
];

$('.reset').click(startOver);

var quiz = new Quiz(questions);

populate();
</script>

{{< /rawhtml >}}

{{%accordion "Säännöt lyhyesti" %}}
Isolla seuraavat:
1. Ensimmäinen sana lauseessa.
2. Erisnimet, mutta ei artikkelit ja prepositiot ellei ole teoksen nimi kyseessä.
3. Sukulaisuutta, arvoa tai ammattia ilmaisevat sanat, jotka esiintyvät erisnimen yhteydessä.
4. Maantieteelliset nimet, mutta ei ilmansuunnat, elleivät ole osa maantieteellistä nimeä, esim. "the North Pole".
5. Tapahtumat, kaudet, juhlat, mutta ei vuodenajat.
6. Uskontoa, kansallisuutta, kieltä, rotua, poliittista suuntausta ilmaisevat sanat, myös adjektiivit.
7. Teoksen nimi, mutta ei artikkelit ja prepositiot, mutta ensimmäinen sana isolla, oli se mikä tahansa.
8. Historialliset tapahtumat ja ajanjaksot.
9. Laitokset, yhdistykset, yritykset, mutta ei artikkelit ja prepositiot.
10. Minä, eli I, mutta ei muut pronominit.

{{% /accordion%}}