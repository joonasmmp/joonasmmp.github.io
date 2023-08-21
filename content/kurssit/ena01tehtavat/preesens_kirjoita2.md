---
title: "Preesens: Kirjoita 2"
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
1. We usually &nbsp;<li><input id="q1" type="text"/><span></span></li>&nbsp; (grow) tomatoes in our backyard, but this year we &nbsp;<li><input id="q2" type="text"/><span></span></li>&nbsp; (grow, not) any.
</section>
<section>
2. Hurry up man! The bus&nbsp;<li><input id="q3" type="text"/><span></span></li>&nbsp; (come) and we &nbsp;<li><input id="q4" type="text"/><span></span></li>&nbsp; (want, not) to miss it.
</section>
<section>
3. I &nbsp;<li><input id="q5" type="text"/><span></span></li>&nbsp; (usually, go) to school by bike, but tomorrow I'll be driving my dad's new Toyota.
</section>
<section>
4. Can you see Jorma and Pasi over there? What &nbsp;<li><input id="q6" type="text"/><span></span></li>&nbsp; (they, talk) about? I need to know. 
</section>
<section>
5. My parents &nbsp;<li><input id="q7" type="text"/><span></span></li>&nbsp; (live) in Sweden? Where &nbsp;<li><input id="q8" type="text"/><span></span></li>&nbsp; (your grandparents, live)?
</section>
<section>
6. Usually when I visit I &nbsp;<li><input id="q9" type="text"/><span></span></li>&nbsp; (stay) at a hotel, but this time I &nbsp;<li><input id="q10" type="text"/><span></span></li>&nbsp; (stay) at their house.
</section>
<section>
7. What &nbsp;<li><input id="q11" type="text"/><span></span></li>&nbsp; (your sister, do)? She's a teacher, but she &nbsp;<li><input id="q12" type="text"/><span></span></li>&nbsp; (work, not) right now. She's still recovering. 
</section>
<section>
8. What &nbsp;<li><input id="q13" type="text"/><span></span></li>&nbsp; (do, you, usually) on weekends? 
</section>
<section>
9. Most people &nbsp;<li><input id="q14" type="text"/><span></span></li>&nbsp; (learn) to read when they &nbsp;<li><input id="q15" type="text"/><span></span></li>&nbsp; young. I'm sure you'll learn one day.
</section>
<section>
10. I &nbsp;<li><input id="q16" type="text"/><span></span></li>&nbsp; (have, not) a lot of fun right now. I'm pretty sure I &nbsp;<li><input id="q17" type="text"/><span></span></li>&nbsp; (get) arrested later today.
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
  "q1": ["grow"],
  "q2": ["aren't growing", "are not growing"],
  "q3": ["is coming"],
  "q4": ["don't want"],
  "q5": ["usually go"],
  "q6": ["are they talking"],
  "q7": ["live"],
  "q8": ["do your grandparents live"],
  "q9": ["stay"],
  "q10": ["am staying"],
  "q11": ["does your sister do"],
  "q12": ["isn't working", "is not working"],
  "q13": ["do you usually do"],
  "q14": ["learn"],
  "q15": ["are"],
  "q16": ["am not having", "'m not having"],
  "q17": ["am getting", "'m getting"],
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