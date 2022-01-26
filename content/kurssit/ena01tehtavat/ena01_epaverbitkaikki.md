---
title: "Epäsäännölliset verbit: kaikki"
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
 <p></p>
            <div class="buttons">
            <button id="btn0"><span id="choice0"></span></button> 
            <button id="btn1"><span id="choice1"></span></button>
	          <button id="btn2"><span id="choice2"></span></button> 
            <button id="btn3"><span id="choice3"></span></button>     
</div>
</div>
</body>
	
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
  new Question("johtaa: lead, led, _____", ["lead", "led", "leaded", "leaden" ], "led"),
  new Question("lähteä, jättää: leave, left, _____", ["leave", "left", "leaven", "leaved" ], "left"),
  new Question("lainata (jollekkin): lend, lent, _____", ["lend", "lent", "lenten", "lented"], "lent"),
  new Question("antaa, sallia: let, let, _____", ["let", "lat", "lit", "letten" ], "let"),
  new Question("maata, olla: lie, lay, _____", ["lie", "lay", "lain", "lied" ], "lain"),
  new Question("kadota, menettää: lose, lost, _____", ["lose", "lost", "loose", "losen" ], "lost"),
  new Question("tehdä, valmistaa: make, made, _____", ["make", "made", "maden", "maken"], "made"),
  new Question("tarkoittaa: mean, meant, _____", ["mean", "meant", "meanted", "meaned" ], "meant"),
  new Question("tavata: meet, met, _____", ["meet", "met", "meeten", "meat" ], "met"),
  new Question("maksaa: pay, paid, _____", ["pay", "paid", "pain", "payed" ], "paid"),
  new Question("laittaa: put, put, _____", ["put", "putted", "pet", "pat" ], "put"),
  new Question("lopettaa: quit, quit, _____", ["quit", "quitted", "quitten", "quitt" ], "quit"),
  new Question("lukea: read, read, _____", ["read", "readed", "readen", "raid" ], "read"),
  new Question("ratsastaa, ajaa: ride, rode, _____", ["ride", "rode", "ridden", "rodden" ], "ridden"),
  new Question("soida, soittaa: ring, rang, _____", ["ring", "rang", "reng", "rung" ], "rung"),
  new Question("nousta: rise, rose, _____", ["rise", "rose", "risen", "rosen" ], "risen"),
  new Question("juosta: run, ran, _____", ["run", "ran", "runnen", "rannen" ], "run"),
  new Question("sanoa: say, said, _____", ["say", "said", "sain", "sayed" ], "said"),
  new Question("nähdä: see, saw, _____", ["see", "saw", "seen", "sawn" ], "seen"),
  new Question("myydä: sell, sold, _____", ["sell", "sold", "selln", "solln"], "sold"),
  new Question("lähettä: send, sent, _____", ["send", "sent", "sended", "senten" ], "sent"),
  new Question("laittaa, asettaa: set, set, _____", ["set", "seet", "sat", "sit" ], "set"),
  new Question("ravistaa, pudistaa: shake, shook, _____", ["shake", "shook", "shaken", "shoken" ], "shaken"),
  new Question("paistaa, loistaa: shine, shone, _____", ["shine", "shone", "shined", "sheen"], "shone"),
  new Question("ampua, laukaista: shoot, shot, _____", ["shoot", "shot", "shat", "shut" ], "shot"),
  new Question("näyttää: show, showed, _____", ["show", "showed", "shown", "shawn" ], "shown"),
  new Question("sulkea: shut, shut, _____", ["shut", "shat", "shot", "shoot" ], "shut"),
  new Question("laulaa: sing, sang, _____", ["sing", "sang", "sung", "seng" ], "sung"),
  new Question("istua: sit, sat, _____", ["sit", "sat", "sut", "set" ], "sat"),
  new Question("nukkua: sleep, slept, _____", ["sleep", "slept", "sleeped", "sleepen" ], "slept"),
  new Question("puhua: speak, spoke, _____", ["speak", "spoke", "speaken", "spoken" ], "spoken"),
  new Question("viettää, kuluttaa: spend, spent, _____", ["spend", "spent", "spenden", "spenten" ], "spent"),
  new Question("seisoa: stand, stood, _____", ["stand", "stood", "stooden", "standen" ], "stood"),
  new Question("varastaa: steal, stole, _____", ["steal", "stole", "stoled", "stolen" ], "stolen"),
  new Question("pistää, laittaa: stick, stuck, _____", ["stick", "stuck", "stack", "stock" ], "stuck"),
  new Question("uida: swim, swam, _____", ["swim", "swam", "swum", "swom" ], "swum"),
  new Question("ottaa, viedä: take, took, _____", ["take", "took", "taken", "tooken" ], "taken"),
  new Question("opettaa: teach, taught, _____", ["teach", "taught", "teachen", "taughten" ], "taught"),
  new Question("kertoa, käskeä: tell, told, _____", ["tell", "told", "tellen", "tolden" ], "told"),
  new Question("ajatella, luulla: think, thought, _____", ["think", "thought", "thank", "thunk" ], "thought"),
  new Question("heittää: throw, threw, _____", ["throw", "threw", "thrown", "threwn" ], "thrown"),
  new Question("ymmärtää: understand, understood, _____", ["understand", "understood", "understanden", "understooden" ], "understood"),
  new Question("herätä: wake, woke, _____", ["wake", "woke", "waken", "woken" ], "woken"),
  new Question("pitää yllä, käyttää: wear, wore, _____", ["wear", "wore", "wearn", "worn" ], "worn"),
  new Question("voittaa: win, won, _____", ["win", "won", "wan", "wun" ], "won"),
  new Question("kirjoittaa: write, wrote, _____", ["write", "wrote", "written", "wrotten" ], "written"),
  
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


