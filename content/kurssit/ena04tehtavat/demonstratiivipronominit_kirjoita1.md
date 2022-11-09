---
title: "Demonstratiivipronominit: Kirjoita 1"
date: 2022-3-1
draft: false
type: page
layout: tehtava
---

Täydennä demonstratiivipronominit annetun vihjeen mukaan.

{{< rawhtml >}}
<div class="tehtava">
<form autocomplete="off">
  <ol>
  
<section>
1. &nbsp;<li><input id="q1" type="text"/><span></span></li>&nbsp; (nykyään) it's impossible to find a partner.
</section>
<section>
2. The invention of internet made &nbsp;<li><input id="q2" type="text"/><span></span></li>&nbsp; (tällaisten asioiden) impossible for someone without digital knowledge.
</section>
<section>
3. Of course there are &nbsp;<li><input id="q3" type="text"/><span></span></li>&nbsp; (niitä joita) are interested in dating outside applications and such.
</section>
<section>
4. I'm curious to see what kind of person I will be meeting &nbsp;<li><input id="q4" type="text"/><span></span></li>&nbsp; (tällä kertaa), the last time was a disaster.
</section>
<section>
5. Are &nbsp;<li><input id="q5" type="text"/><span></span></li>&nbsp; (nämä treffit) I've been on the past few months a waste of my precious time?
</section>
<section>
6. Naturally there have been dates better than &nbsp;<li><input id="q6" type="text"/><span></span></li>&nbsp; (ne) that have ended in me running away.
</section>
<section>
7. Does &nbsp;<li><input id="q7" type="text"/><span></span></li>&nbsp; (tämä nainen) want a relationship me?
</section>
<section>
8. Or is she here to stalk  &nbsp;<li><input id="q8" type="text"/><span></span></li>&nbsp; (tuota miestä tuolla)?
</section>
<section>
9. So &nbsp;<li><input id="q9" type="text"/><span></span></li>&nbsp; (siksi) he insisted on sitting at &nbsp;<li><input id="q10" type="text"/><span></span></li>&nbsp; (tässä pöydässä täällä).
</section>
  
 <link rel="stylesheet" type="text/css" href="/css/kirjoita1.css"/>

<div id="buttonWrapper">
   <input type="submit" id="submit" value="Tarkista vastaukset" />
   </div>
</form>

</div>


<script>
var answers = {
  "q1": ["these days"],
  "q2": ["these kinds of things"],
  "q3": ["those who"],
  "q4": ["this time"],
  "q5": ["these dates"],
  "q6": ["those"],
  "q7": ["this woman"],
  "q8": ["that man over there"],
  "q9": ["that's why", "that is why"],
  "q10": ["this table over here", "this table here"],
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