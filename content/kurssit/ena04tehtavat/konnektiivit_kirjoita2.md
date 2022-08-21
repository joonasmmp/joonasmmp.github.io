---
title: "Lauseenvastikkeet: Kirjoita"
date: 2022-8-21
draft: false
type: page
layout: tehtava
---

Täydennä linkkisanat annetun vihjeen mukaan.

{{< rawhtml >}}
<div class="tehtava">
<form autocomplete="off">
  <ol>
  
<section>
<br>1. I absolutely loved the movie. &nbsp;<li><input id="q1" type="text"/><span></span></li>&nbsp; (kaiken kaikkiaan), we had a lovely time. 
</section>
<section>
<br>2. Jonathan lost his ticket. &nbsp;<li><input id="q2" type="text"/><span></span></li>&nbsp; (sen seurauksena) he had to buy a new one.
</section>
<section>
<br>3. The screening had been sold out. &nbsp;<li><input id="q3" type="text"/><span></span></li>&nbsp; (kuitenkin), we managed to get him a seat as someone decided not to show up.
</section>
<section>
<br>4. Jonathan had left his credit card at home. &nbsp;<li><input id="q4" type="text"/><span></span></li>&nbsp; (sen lisäksi), he did not have any cash with him either..
</section>
<section>
<br>5. The night was warm, so we did not call a taxi. &nbsp;<li><input id="q5" type="text"/><span></span></li>&nbsp; (sen sijaan) we decided to walk home.
</section>
<section>
<br>6. I hope Jonathan can pay me back - &nbsp;<li><input id="q6" type="text"/><span></span></li>&nbsp; (ei sillä että) it matters, I have owed him money before as well.
</section>
<section>
<br>7. &nbsp;<li><input id="q7" type="text"/><span></span></li>&nbsp; (sekä) Jonathan  &nbsp;<li><input id="q8" type="text"/><span></span></li>&nbsp; (että) Lucy managed to walk home.
</section>
<section>
<br>8. &nbsp;<li><input id="q9" type="text"/><span></span></li>&nbsp; (koska) it was late, we decided to hit the sack right away.
</section>
<section>
<br>9. We might go to the movies tomorrow as well, &nbsp;<li><input id="q10" type="text"/><span></span></li>&nbsp; (edellyttäen että) Jonathan does not mess everything up like today.
  </ol>
  
<div id="buttonWrapper">
   <input type="submit" id="submit" value="Tarkista vastaukset" />
   </div>
</form>

</div>

<style>
li {
display: inline-block;
align-content: center;
}

.tehtava ol {
list-style: none;
margin-left: 0;
padding-left: 5px;
font-size: 1.125rem !important;
}

.oikein input[type=text] {
    outline: none;
    border: none;
    border-bottom: 2px solid #299617;
    margin-bottom: -1px;
  }
  
.vaarin input[type=text] {
    outline: none;
    border: none;
    border-bottom: 2px dashed #DA2C43;
    margin-bottom: -1px;
}

    
#submit {
  border: 0px;
  padding-top: 1em;
}

.dark #submit {
  color: #FFFFFF;
  border: 0px;
  padding-top: 1em;
}

.tehtava #vastauspainike {
  text-align: center;
  margin: 0 auto;
}

form {
  line-height: 2;
}

form input {
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    font-size: inherit;
    background-color: #fafafa;
}

.dark input {
  background-color: #181a1b;
  color: #FFFFFF;
  border-bottom: 1px solid white;
}

.tehtava input[type="text"] {
  text-align: center;
}

.tehtava span {
    font-family:  'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: inherit;
}

.tehtava input[type="text"] {
    width: 6em;
}

.tehtava span {
    position: absolute;
    left: -9999px;
    display: inline-block;
    min-width: 6em;
}

.tehtava section {
    position: relative;
    padding: 10px 10px;
    width: 100%;
    float: left;
    background: #fafafa;
    border: 1px solid #d4d4d4;
    }

.dark section {
    background: #181a1b;
     color: #FFFFFF;
  }

 #buttonWrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
 }

</style>

<script>
var answers = {
  "q1": ["all in all"],
  "q2": ["as a result", "consequently"],
  "q3": ["still", "however", "nevertheless", "nonetheless"],
  "q4": ["besides", "on top of that", "in addition", "what's more", "moreover" "futhermore", "in addition to that"],
  "q5": ["instead"],
  "q6": ["not that it matters"],
  "q7": ["both"],
  "q8": ["and"],
  "q9": ["as", "since"],
  "q10": ["provided that", "providing that"],
};

function markAnswers() {
  $("input[type='text']").each(function() {
    console.log($.inArray(this.value, answers[this.id]));
    if ($.inArray(this.value.toLowerCase().trim(), answers[this.id]) === -1) {
      $(this).parent()[0].setAttribute("class", "vaarin");
    } else {
      $(this).parent()[0].setAttribute("class", "oikein");
    }
  })
}

$("form").on("submit", function(e) {
  e.preventDefault();
  markAnswers();
});

const input = document.querySelector('.tehtava input');
const span = document.querySelector('.tehtava span');

document.querySelectorAll("input").forEach(elem => elem.addEventListener('input', function (event) {
    span.innerHTML = this.value.replace(/\s/g, '&nbsp;');
    this.style.width = span.offsetWidth + 'px';
}));

</script>
</rawhtml>