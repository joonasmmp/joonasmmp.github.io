---
title: "3. Muodosta verbejä jälkiliitteillä"
date: 2022-2-1
weight: 83
draft: false
type: page
layout: tehtava
---

Muodosta verbi kantasanasta seuraavien liitteiden avulla: -en, -ate, -ify, -ise/-ize

Kirjoita koko sana sillä saatat joutua muuttamaan kantasanaa.
{{< rawhtml >}}
<div class="tehtava">
<form autocomplete="off">
  <ol>
  
<section>
1. Length -> pidentää = &nbsp;<li><input id="q1" type="text"/><span></span></li>&nbsp;
</section>
<section>
2. Simple -> yksinkertaistaa = &nbsp;<li><input id="q2" type="text"/><span></span></li>&nbsp;
</section>
<section>
3. Chlorin -> kloorata = &nbsp;<li><input id="q3" type="text"/><span></span></li>&nbsp;
</section>
<section>
4. Hard -> kovettaa = &nbsp;<li><input id="q4" type="text"/><span></span></li>&nbsp;
</section>
<section>
5. Legal -> laillistaa = &nbsp;<li><input id="q5" type="text"/><span></span></li>&nbsp;
</section>
<section>
6. Sharp -> teroittaa = &nbsp;<li><input id="q6" type="text"/><span></span></li>&nbsp;
</section>
<section>
7. Electric -> sähköistää = &nbsp;<li><input id="q7" type="text"/><span></span></li>&nbsp;
</section>
<section>
8. Urine -> virtsata =  &nbsp;<li><input id="q8" type="text"/><span></span></li>&nbsp;
</section>
<section>
9. Tight -> tiukentaa = &nbsp;<li><input id="q9" type="text"/><span></span></li>&nbsp;
</section>
<section>
10. Pure -> puhdistaa = &nbsp;<li><input id="q10" type="text"/><span></span></li>&nbsp;
</section> </ol>
  
 <link rel="stylesheet" type="text/css" href="/css/kirjoita1.css"/>

<div id="buttonWrapper">
   <input type="submit" id="submit" value="Tarkista vastaukset" />
   </div>
</form>

</div>


<script>
var answers = {
  "q1": ["lenghten"],
  "q2": ["simplify"],
  "q3": ["chlorinate"],
  "q4": ["harden"],
  "q5": ["legalise", "legalize"],
  "q6": ["sharpen"],
  "q7": ["electrify"],
  "q8": ["urinate"],
  "q9": ["tighten"],
  "q10": ["purify"],
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