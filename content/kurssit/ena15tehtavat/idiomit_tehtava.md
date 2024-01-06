---
title: "Tunnetko idiomit?"
date: 2022-3-26
draft: false
type: page
layout: tehtava
---

Käy seuraavat idiomit läpi joko yksin, pareittain tai ryhmissä. Ovatko idiomit tuttuja? Entä tiedätkö niiden tarkoitukset?

{{< rawhtml >}}
  <div id="cardArea"></div>
  <div id="lukumaara"></div>
  <div id="buttonArea" class="grid grid-cols-2"></div>

<script> 
$(document).ready(function() {

  var currentQuestion = 0;
  var qbank = [
    ["A blessing in disguise"],
    ["Beat around the bush"],
    ["Bite the bullet"],
    ["Break a leg"],
    ["Call it a day"],
    ["Cut somebody some slack"],
    ["Cutting corners"],
    ["Get out of hand"],
    ["Get something out of your system"],
    ["Get your act together"],
    ["Give someone the benefit of the doubt"],
    ["Go back to the drawing board"],
    ["Hang in there"],
    ["Hit the sack"],
    ["It's not rocket science"],
    ["Let someone off the hook"],
    ["Miss the boat"],
    ["Pull someone's leg"],
    ["Pull yourself together"],
    ["Speak of the devil"],
    ["That's the last straw"],
    ["The best of both worlds"],
    ["Under the weather"],
    ["We'll cross that bridge when we come to it"],
    ["Wrap your head around something"],
    ["You can say that again"],
    ["Your guess is as good as mine"],
    ["A penny for your thoughts"],
    ["A penny saved is a penny earned"],
    ["A perfect storm"],
    ["Add insult to injury"],
    ["Barking up the wrong tree"],
    ["Birds of a feather flock together"],
    ["Bite off more than you can chew"],
    ["Break the ice"],
    ["By the skin of your teeth"],
    ["Comparing apples to oranges"],
    ["Costs an arm and a leg"],
    ["Don't count your chickens before they hatch"],
    ["Don't cry over spilt milk"],
    ["Don't give up your day job"],
    ["Don't put all your eggs in one basket"],
    ["Every cloud has a silver lining"],
    ["Get a taste of your own medicine"],
    ["Give someone the cold shoulder"],
    ["Go on a wild goose chase"],
    ["He has bigger fish to fry"],
    ["Hit the nail on the head"],
    ["Ignorance is bliss"],
    ["It ain't over till the fat lady sings"],
    ["It takes one to know one"],
    ["It's a piece of cake"],
    ["It's raining cats and dogs"],
    ["Kill two birds with one stone"],
    ["Let the cat out of the bag"],
    ["Live and learn"],
    ["Look before you leap"],
    ["On thin ice"],
    ["Once in a blue moon"],
    ["Play devil's advocate"],
    ["Rain on someone's parade"],
    ["Saving for a rainy day"],
    ["Spill the beans"],
    ["Take a rain check"],
    ["Take it with a grain of salt"],
    ["The best thing since sliced bread"],
    ["The elephant in the room"],
    ["The whole nine yards"],
    ["There's no such thing as a free lunch"],
    ["You can't have your cake and eat it too"],
  ];
  
	beginActivity();
  edellinen();
  seuraava();

  window.addEventListener('keydown', (e) => {
    if (e.keyCode === 32 && e.target === document.body) {
      e.preventDefault();
    }
  });

  document.body.onkeydown = function(event) {
    event = event || window.event;
    var keycode = event.charCode || event.keyCode;
    if (keycode === 37 && currentQuestion > 0) {
      currentQuestion--;
      beginActivity();
    }

if (keycode === 39 && currentQuestion < qbank.length - 1) {
      currentQuestion++;
      beginActivity();
    }
  }

  function beginActivity() {
    $("#cardArea").empty();
    $("#cardArea").append('<div id="card1" class="card">' + qbank[currentQuestion][0] + '</div>');
    $("#card1").css("background-color", "#1F2937");
    $("#lukumaara").empty();
    var korttia = document.createElement('div')
    korttia.innerHTML = currentQuestion + 1 + " / " + qbank.length;
    document.getElementById('lukumaara').appendChild(korttia);
  }

  function edellinen() {
    $("#buttonArea").append('<div id="prevButton">Edellinen</div>');
    $("#prevButton").on("click", function() {
      if (currentQuestion > 0) {
        currentQuestion--;
        beginActivity();
      }
    }) 
  }

  function seuraava() {
    $("#buttonArea").append('<div id="nextButton">Seuraava</div>');
    $("#nextButton").on("click", function() {
      if (currentQuestion < qbank.length - 1) {
        currentQuestion++;
        beginActivity();
      }
    })
  }
})
</script>

<style>
       #cardArea{
    width: 95%;
    height: 300px;
    margin: auto;
    margin-top: 20px;
    position: relative;
    overflow: hidden;
   }

   .card{
    width: 100%;
    height: 300px;
    position: absolute;
    text-align: center;
    font-size: 1.3em;
    color: #efefef;
    cursor: pointer;
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
   }
   
   #nextButton{
    width:90%;
    text-align: center;
    font-size: 1em;
    padding:10px;
    cursor: pointer;
    color: #efefef;
    margin: auto;
    background-color: #1F2937;
    border: 1px solid  #000000;
    font: inherit;
   }
   
   #prevButton{
    width: 90%;
    text-align: center;
    font-size: 1em;
    padding: 10px;
    cursor: pointer;
    color: #efefef;
    margin: auto;
    background-color: #1F2937;
    border: 1px solid  #000000;
    font: inherit;
   }
 
   #lukumaara{
     padding-top: .7em;
     padding-bottom: .7em;
     text-align: center;
     font-size: 1em;
   }
   </style>


{{< /rawhtml >}}