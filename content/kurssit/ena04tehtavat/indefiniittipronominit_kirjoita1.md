---
title: "Indefiniittipronominit: kirjoita 1"
date: 2022-2-2
draft: false
type: page
layout: tehtava
---

Täydennä indefiniittiprnominit annetun vihjeen mukaan.

{{< rawhtml >}}
<div class="tehtava">
<form autocomplete="off">
  <ol>
  
<section>
1. Leaving for Las Vegas gets harder&nbsp;<li><input id="q1" type="text"/><span></span></li>&nbsp; (jokainen) every day.
</section>
<section>
2. Tell me &nbsp;<li><input id="q2" type="text"/><span></span></li>&nbsp; (kaikki) that happened you the previous time you were there.
</section>
<section>
3. I emptied &nbsp;<li><input id="q3" type="text"/><span></span></li>&nbsp; (molemmat) my bank accounts playing poker.
</section>
<section>
4. &nbsp;<li><input id="q4" type="text"/><span></span></li>&nbsp; (koko) Las Vegas was cheering for me to go on.
</section>
<section>
5. I haven't seen &nbsp;<li><input id="q5" type="text"/><span></span></li>&nbsp; (kumpaakaan) of my girlfriends after that night.
</section>
<section>
6. Both answered my texts the night before but &nbsp;<li><input id="q6" type="text"/><span></span></li>&nbsp; (ei kummastakaan) of them messaged me after the accounts went 
</section>
<section>
7. Oh well all the players are here, &nbsp;<li><input id="q7" type="text"/><span></span></li>&nbsp; (toiset) have already been dealt their cards and &nbsp;<li><input id="q8" type="text"/><span></span></li>&nbsp; (toiset) are still buying poker chips.
</section>
<section>
8. I have two massive problems, &nbsp;<li><input id="q9" type="text"/><span></span></li>&nbsp; (toinen) is loving poker and &nbsp;<li><input id="q10" type="text"/><span></span></li>&nbsp; (toinen) is my massive gambling addiction.
</section></ol>
  
 <link rel="stylesheet" type="text/css" href="/css/kirjoita1.css"/>

<div id="buttonWrapper">
   <input type="submit" id="submit" value="Tarkista vastaukset" />
   </div>
</form>

</div>


<script>
var answers = {
  "q1": ["each", "every"],
  "q2": ["everything", "all"],
  "q3": ["both"],
  "q4": ["all of"],
  "q5": ["either"],
  "q6": ["neither"],
  "q7": ["some"],
  "q8": ["others"],
  "q9": ["one"],
  "q10": ["the other"],
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