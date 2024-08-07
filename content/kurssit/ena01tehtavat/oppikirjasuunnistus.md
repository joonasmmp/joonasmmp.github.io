---
title: "Oppikirjasuunnistus Elements 1+2"
date: 2022-2-1
weight: 100
draft: false
type: page
layout: tehtava
---

{{< rawhtml >}}

 <form autocomplete="off">
          <div id="ques0" class="ques">
  <h2>Introduction</h2>
  <p>Digikirja voi olla teille uusi ja hämmentävä kokemus. Ne voivat olla hämmentävä kokemus myös niitä paljon käyttäneille, sillä käyttöliittymä on sekava. Alussa se oli vielä sekavampi.</p>

<p>Harjoitellaan SanomaPron Elements 1+2-oppikirjan käyttöä lyhyen oppikirjasuunnistuksen avulla.</p>

<p>Saat eteesi tehtävän. Päästäksesi seuraavaan tehtävään sinun on annettava tekstilaatikkoon oikea vastaus.</p>

<p>Aloita kirjoittamalla tekstilaatikkoon 'start'.</p>
    <input type="text" name="answer0"/>
</div>

<div id="ques1" class="ques">
  <h2>Task 1</h2>
  <p>Avaa kurssisuunnitelma. Kurssisuunnitelmasta löydät oppituntien sisällöt, tärkeät päivämäärät, ja muuta muistettavaa. Sitä katsellaan tunneilla, mutta sitä kannattaa myös seurata omatoimisesti.</p>

<p> Kirjoita alla olevaan laatikkoon mikä on tiimijakson viidennen työpajan aihe.</p>

<input type="text" name="answer1"/>
</div>

<div id="ques2" class="ques">
  <h2>Task 2</h2>
  <p>Aivan mahtavaa! Yritä olla unohtamatta, mistä kurssisuunnitelma löytyy. Se on erittäin yleistä.</p>

  <p>Seuraavaksi etsitään tekstejä. Mene Teemaan 1 ja etsi sieltä oppikirjan ensimmäinen teksti, Text 1. Kirjoita alla olevaan laatikoon tuon kyseisen tekstin otsikko.</p>

<input type="text" name="answer2"/>
 </div>

<div id="ques3" class="ques">
  <h2>Task 3</h2>
  <p>Erinomaista työtä! Oletko varma, ettet ole käyttänyt digikirjaa aiemmin?</p>

<p>Tekstien lisäksi opiskellaan teemasanastoja. Teemassa 1 on myös teemasanasto, aiheena ruumiinosat.</p>

<p>Kirjoita alla olevaan tekstilaatikkoon ensimmäisen teemasanaston listan viimeisen sanan suomenkielinen versio.</p>

<input type="text" name="answer3"/>
</div>

<div id="ques4" class="ques">
<h2>Task 4</h2>
<p>Ja taas oikea vastaus! Mennää seuraavaan kohtaan.</p>

<p>Kielioppiosion löydät kirjan loppuosasta, osiosta Grammar. Mene kielioppiosioon ja etsi sieltä PASSIIVIN teoria, joko näköiskirjana tai ei. Ei opetella vielä passiivia, vaan tehtävänäsi on löytää mistä kielioppiteoria löytyy.</p>

<p>Teoriaosiosta löydät kuvan, jossa on lentoja. Miltä portilta lento Berliiniin lähtee? Tai olisi pitänyt lähteä, näköjään se on peruttu.</p>
  <input type="text" name="answer4"/>
</div>

<div id="ques5" class="ques">
  <h2>Task 5</h2>
  <p>Liian helppoa! Sitten seuraavaan tehtävään.</p>

<p>Etsitään tehtäviä. Ne on vähän hämmentävästi nimetty. Tekstien tehtävät ovat yleensä muotoa 1.2, eli ensimmäisen tekstin toinen tehtävä. Muut tehtävät saavat eteensä kirjaimen E, esim. E1.2. Kielioppitehtävissä eteen tulee G, esim G1.2 on ensimmäisen kielioppiosion toinen tehtävä. </p>

<p> Etsi tehtävä "3.3 Find the phrase". Koska se on tehtävä 3.3, se on osa tekstiä 3. Missähän teemassa Teksti 3 on? Ei ainakaan osiossa Grammar, koska se ei ole kielioppia.</p>

<p> Kirjoita alla olevaan vastauslaatikkoon tehtävän 3.3 kohdan 15 suomenkielinen vihje.</p>

<input type="text" name="answer5"/>
</div>

<div id="ques6" class="ques">
  <h2>Task 6</h2>
  <p>Sitten etsitään kielioppitehtäviä! Muistatko vielä, missä osiossa ne olivatkaan?</p>
  <p>Etsi tehtävä "G13.3 Kerro kuvasta".</p>
  <p>Esimerkkilauseessa on sohva, mutta minkä värinen sohva? Kirjoita väri alla olevaan vastauskenttään.</p>

<input type="text" name="answer6"/>
</div>

<div id="ques7" class="ques">
  <h2>Task 7</h2>
<p> Erinomaista. Kuten huomaat, joskus tehtävät on vähän vaikea löytää. Opettajilla on kuitenkin keinonsa helpottaa tehtävien löytämistä, nimittäin tehtävänannot. Teille on tehty valmiiksi yksi tehtävänanto, löydät sen vasemmasta palkista kohdasta tehtävänannot. 

<p>Avaa tehtävänanto. Sen tehtävälistassa on vain yksi tehtävä. Mikä tuon tehtävän nimi on? Kirjoita se alla olevaan vastauskenttään.</p>

   <input type="text" name="answer7"/>
</div>

<input type="submit" id="submit" value="Tarkista vastaus" />

</form>

<style>
.ques {
    display: none;
}

		
input[type="text"] {
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    font-size: inherit;
    background-color: #fafafa;
    text-align: center;
    display: block;
    outline: none;
    width: 300px;
    margin: 0.5em auto 1.5em;
}

input#submit {
    display: block;
    outline: none;
    width: 300px;
    margin: 0.5em auto 0.5em;
    background: #f8f8f8;
    text-transform: uppercase;
    letter-spacing: 3px;
    border: 1px solid #eeeeee;
}

.dark input[type="text"] {
    outline: none;
    border: none;
    border-bottom: 1px solid white;
    font-size: inherit;
    background-color: #fafafa;
    text-align: center;
    display: block;
    outline: none;
    width: 300px;
    color: white;
    background-color: #181A1B;
    margin: 0.5em auto 1.5em;
}

.dark input#submit {
    display: block;
    outline: none;
    width: 300px;
    color: white;
    margin: 0.5em auto 0.5em;
    background: #f8f8f8;
    text-transform: uppercase;
    letter-spacing: 3px;
    background-color: #181A1B;
    border: 1px solid #eeeeee;
}

  #finalMessage {
    background: white;
    color: black;
    padding-bottom: 2em;
    padding-top: 1em;
    }

  .dark #finalMessage {
    background: #181A1B;
    color:white;
    padding-bottom: 2em;
    padding-top: 1em;
  }

  .dark select {
    background-color: #181A1B;
    color: white;
  }

#hello{
  background: url(/img/kansikuvat/kurssivalikot/pakohuone.jpg)
}

#hello h {
  font-size: 2.5em!important;
}

</style>

<script>
window.onload = function() {
  var questionCnt = $("div.ques").length;
  questionOrder = [0,1,2,3,4,5,6,7];
    questionsAsked = 0;
    hideAllExcept(questionOrder[questionsAsked]);
  
}

// == Used for Task 2: Hides all questions except the given one ==
function hideAllExcept(question) {
  $("div.ques").hide(); // Hides all questions
  $("#ques" + question).show(); // Shows only the given question
}

// The answers
var answers = [
  ["start"],
  ["passiivi", "g9: passiivi"],
  ["the power of a pose"],
  ["vyötärö"],
  ["9", "09", "yhdeksän", "nine"],
  ["ilmeisesti"],
  ["vihreä", "green"],
  ["theme start 1"],
];

// == Used for Task 4: Triggered by the link, checks an answer ==
function checkAnswer() {

  var questionNumber = questionOrder[questionsAsked]; // The number of the question that is shown at the moment
  var answer; // Get the answer

  if (questionNumber == 1) {
    answer = $("#ques" + questionNumber + " input").val().toLowerCase().trim();
  } else {
    answer = $("#ques" + questionNumber + " input").val().toLowerCase().trim(); // The value of the input field that is placed in the given question
  }

  // Check whether the answer is correct
  var correct = answers[questionNumber].indexOf(answer) != -1;


  // Continue, if answer is correct
    if (correct) {
    questionsAsked++; //Increase questionsAsked
    if (questionsAsked >= questionOrder.length) {
    $("#ques7").empty();
    $("#ques7").append('<div id="finalMessage" style="text-align:center"><b>Great success!</b><br><br>Aivan mahtavaa, oppikirjan käyttö sujuu paremmin kuin isolla osalla abiturienteista! Tästä on hyvä jatkaa.</div>');
    $("input#submit").remove();
    } else {
      hideAllExcept(questionOrder[questionsAsked]); // Start over at step 2
    }
  }
}

$("form").on("submit", function(e) {
	e.preventDefault();
  checkAnswer();
});</script>
{{< /rawhtml >}}