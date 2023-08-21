---
title: "Preesens: Kirjoita 1"
date: 2022-2-1
draft: false
type: page
layout: tehtava
---

Kirjoita lauseisiin yleis- tai kestopreesensmuodot.

{{< rawhtml >}}
<div class="tehtava">
<form autocomplete="off">
  <ol>
  
<section>
1. Jackson often &nbsp;<li><input id="q1" type="text"/><span></span></li>&nbsp; (ottaa) a nap while watching the 5 o'clock news.
</section>
<section>
2. Even now he &nbsp;<li><input id="q2" type="text"/><span></span></li>&nbsp; (nukkuu) on the couch. He has no idea what's happening on TV.
</section>
<section>
3. &nbsp;<li><input id="q3" type="text"/><span></span></li>&nbsp; (Tiedätkö) where the nearest coffee shop is?
</section>
<section>
4. No, sorry, &nbsp;<li><input id="q4" type="text"/><span></span></li>&nbsp; (en tiedä).
</section>
<section>
5. Henrik&nbsp;<li><input id="q5" type="text"/><span></span></li>&nbsp; (tapaa) his therapist this afternoon - he's really nervous already!
</section>
<section>
6. At Christmas, Father Christmas&nbsp;<li><input id="q6" type="text"/><span></span></li>&nbsp; (vierailee) in over 1000 homes every second. 
</section>
<section>
7. How &nbsp;<li><input id="q7" type="text"/><span></span></li>&nbsp; (hän tekee) it? He must be a deity or something.
</section>
<section>
8. Simon, what the hell &nbsp;<li><input id="q8" type="text"/><span></span></li>&nbsp; (sinä teet)? Why is there a fish in the coffee maker?
</section>
<section>
9. I &nbsp;<li><input id="q9" type="text"/><span></span></li>&nbsp; (teen) a fish latte. It's delicious.
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
  "q1": ["takes"],
  "q2": ["is sleeping"],
  "q3": ["do you know"],
  "q4": ["i don't know", "i do not know"],
  "q5": ["is seeing", "is meeting"],
  "q6": ["visits"],
  "q7": ["does he do"],
  "q8": ["are you doing", "you're doing"],
  "q9": ["'m making", "am making"],
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