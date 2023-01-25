---
title: "Muodosta adjektiivejä jälkiliitteillä"
date: 2022-2-1
draft: false
type: page
layout: tehtava
---

Muodosta adjektiivi kantasanasta seuraavien liitteiden avulla: -able, -al, -ed, -ic, -ive, -ish, -ful, -less, -ly, -ous, -ious, -y 

Kirjoita koko sana sillä saatat joutua muuttamaan kantasanaa.
{{< rawhtml >}}
<div class="tehtava">
<form autocomplete="off">
  <ol>
  
<section>
1. Order -> järjestyksessä oleva = &nbsp;<li><input id="q1" type="text"/><span></span></li>&nbsp;
</section>
<section>
2. Speech -> sanaton = &nbsp;<li><input id="q2" type="text"/><span></span></li>&nbsp;
</section>
<section>
3. Big -> isohko = &nbsp;<li><input id="q3" type="text"/><span></span></li>&nbsp;
</section>
<section>
4. Courage -> rohkea = &nbsp;<li><input id="q4" type="text"/><span></span></li>&nbsp;
</section>
<section>
5. Disaster -> katastrofaalinen = &nbsp;<li><input id="q5" type="text"/><span></span></li>&nbsp;
</section>
<section>
6. Phenomenon -> ilmiömäinen = &nbsp;<li><input id="q6" type="text"/><span></span></li>&nbsp;
</section>
<section>
7. Support -> kannustava = &nbsp;<li><input id="q7" type="text"/><span></span></li>&nbsp;
</section>
<section>
8. Break -> särkyvä =  &nbsp;<li><input id="q8" type="text"/><span></span></li>&nbsp;
</section>
<section>
9. Success -> menestyksekäs = &nbsp;<li><input id="q9" type="text"/><span></span></li>&nbsp;
</section>
<section>
10. Gift -> lahjakas = &nbsp;<li><input id="q10" type="text"/><span></span></li>&nbsp;
</section> 
<section>
11. Hair -> karvainen = &nbsp;<li><input id="q11" type="text"/><span></span></li>&nbsp;
</section>
<section>
12. Realist -> realistinen = &nbsp;<li><input id="q12" type="text"/><span></span></li>&nbsp;
</section>


</ol>
  
 <link rel="stylesheet" type="text/css" href="/css/kirjoita1.css"/>

<div id="buttonWrapper">
   <input type="submit" id="submit" value="Tarkista vastaukset" />
   </div>
</form>

</div>


<script>
var answers = {
  "q1": ["orderly"],
  "q2": ["speechless"],
  "q3": ["biggish"],
  "q4": ["courageous"],
  "q5": ["disastrous",],
  "q6": ["phenomenal"],
  "q7": ["supportive"],
  "q8": ["breakable"],
  "q9": ["successful"],
  "q10": ["gifted"],
  "q11": ["hairy"],
  "q12": ["realistic"],
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