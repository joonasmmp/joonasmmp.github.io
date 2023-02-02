---
title: "3. Mikä ajan prepositio?"
date: 2022-2-1
weight: 42
draft: false
type: page
layout: tehtava
---

Täydennä annettuja lauseita prepositioilla in/on/at. 

{{< rawhtml >}}
<div class="tehtava">
<form autocomplete="off">
  <ol>
  
<section>
1. I will be there &nbsp;<li><input id="q1" type="text"/><span></span></li>&nbsp; four o'clock.
</section>
<section>
2. I was born &nbsp;<li><input id="q2" type="text"/><span></span></li>&nbsp; the 29th of August.
</section>
<section>
3. The 1994 FIFA World Cup took place &nbsp;<li><input id="q3" type="text"/><span></span></li>&nbsp; 1994.
</section>
<section>
4. She was no longer here &nbsp;<li><input id="q4" type="text"/><span></span></li>&nbsp;the morning.
</section>
<section>
5. We are studying English &nbsp;<li><input id="q5" type="text"/><span></span></li>&nbsp; the moment.
</section>
<section>
6. I usually go to sleep &nbsp;<li><input id="q6" type="text"/><span></span></li>&nbsp; midnight. 
</section>
<section>
7. The first time I saw an elephant was &nbsp;<li><input id="q7" type="text"/><span></span></li>&nbsp; the 1960s.
</section>
<section>
8. The National Elephant Day is &nbsp;<li><input id="q8" type="text"/><span></span></li>&nbsp; August 12th.
</section>
<section>
9. You can never seen an elephant &nbsp;<li><input id="q9" type="text"/><span></span></li>&nbsp; night.
</section>
<section>
10. I will be traveling to Kemi &nbsp;<li><input id="q10" type="text"/><span></span></li>&nbsp; Monday. 
</section> </ol>
  
 <link rel="stylesheet" type="text/css" href="/css/kirjoita1.css"/>

<div id="buttonWrapper">
   <input type="submit" id="submit" value="Tarkista vastaukset" />
   </div>
</form>

</div>


<script>
var answers = {
  "q1": ["at"],
  "q2": ["on"],
  "q3": ["in"],
  "q4": ["in"],
  "q5": ["at"],
  "q6": ["at"],
  "q7": ["in"],
  "q8": ["on"],
  "q9": ["at"],
  "q10": ["on"],
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