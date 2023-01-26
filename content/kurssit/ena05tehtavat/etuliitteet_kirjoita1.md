---
title: "2. Muodosta sanat liitteiden avulla"
date: 2022-2-1
weight: 72
draft: false
type: page
layout: tehtava
---

Kuinka hyvin muistat sanojen päätteet? Muodosta sana lisäämällä jokin jälkiliite annettuun sanaan.

{{< rawhtml >}}
<div class="tehtava">
<form autocomplete="off">
  <ol>
  
<section>
1. Wide = leveä, leveys = &nbsp;<li><input id="q1" type="text"/><span></span></li>&nbsp;
</section>
<section>
2. Leak = vuotaa, vuoto = &nbsp;<li><input id="q2" type="text"/><span></span></li>&nbsp;
</section>
<section>
3. Star = tähti, tähteys = &nbsp;<li><input id="q3" type="text"/><span></span></li>&nbsp;
</section>
<section>
4. Participate = ottaa osaa, osanottaja = &nbsp;<li><input id="q4" type="text"/><span></span></li>&nbsp;
</section>
<section>
5. Nation = kansakunta, kansallistaminen = &nbsp;<li><input id="q5" type="text"/><span></span></li>&nbsp;
</section>
<section>
6. Village = kylä, kyläläinen = &nbsp;<li><input id="q6" type="text"/><span></span></li>&nbsp;
</section>
<section>
7. Beg = kerjätä, kerjäläinen = &nbsp;<li><input id="q7" type="text"/><span></span></li>&nbsp;
</section>
<section>
8. Clear = selvä, selvyys =  &nbsp;<li><input id="q8" type="text"/><span></span></li>&nbsp;
</section>
<section>
9. Resist = vastustaa, vastustus = &nbsp;<li><input id="q9" type="text"/><span></span></li>&nbsp;
</section>
<section>
10. Tax = vero, verotus = &nbsp;<li><input id="q10" type="text"/><span></span></li>&nbsp;
</section> </ol>
  
 <link rel="stylesheet" type="text/css" href="/css/kirjoita1.css"/>

<div id="buttonWrapper">
   <input type="submit" id="submit" value="Tarkista vastaukset" />
   </div>
</form>

</div>


<script>
var answers = {
  "q1": ["width"],
  "q2": ["leakage"],
  "q3": ["stardom"],
  "q4": ["participant"],
  "q5": ["nationalisation", "nationalization"],
  "q6": ["villager"],
  "q7": ["beggar"],
  "q8": ["clarity"],
  "q9": ["resistance"],
  "q10": ["taxation"],
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