---
title: "2. Mikä paikan prepositio?"
date: 2022-2-1
weight: 72
draft: false
type: page
layout: tehtava
---

Täydennä annettuja lauseita prepositioilla in/on/at/by. 

{{< rawhtml >}}
<div class="tehtava">
<form autocomplete="off">
  <ol>
  
<section>
1. They played my song &nbsp;<li><input id="q1" type="text"/><span></span></li>&nbsp; the radio, I'm famous!
</section>
<section>
2. &nbsp;<li><input id="q2" type="text"/><span></span></li>&nbsp; the left you can see the ugliest building you've ever seen. I live there.
</section>
<section>
3. I can't belive we bumped into M. Night Shyamalan &nbsp;<li><input id="q3" type="text"/><span></span></li>&nbsp; the party last night.
</section>
<section>
4. I'm &nbsp;<li><input id="q4" type="text"/><span></span></li>&nbsp; my way to school even though I've already failed all my exams. 
</section>
<section>
5. Going to school every morning &nbsp;<li><input id="q5" type="text"/><span></span></li>&nbsp; a helicopter is crazy expensive. That's why I do it.
</section>
<section>
6. While riding I laugh at the poor kids going to school &nbsp;<li><input id="q6" type="text"/><span></span></li>&nbsp; bike. 
</section>
<section>
7. Who's &nbsp;<li><input id="q7" type="text"/><span></span></li>&nbsp; the door? Go away!
</section>
<section>
8. I had an interesting discussion with my secretary &nbsp;<li><input id="q8" type="text"/><span></span></li>&nbsp; breakfast?
</section>
<section>
9. Put your hands &nbsp;<li><input id="q9" type="text"/><span></span></li>&nbsp; mym shoulders and massage me, Brian. 
</section>
<section>
10. Giving people unwanted massages might make you end up &nbsp;<li><input id="q10" type="text"/><span></span></li>&nbsp; jail. 
</section> </ol>
  
 <link rel="stylesheet" type="text/css" href="/css/kirjoita1.css"/>

<div id="buttonWrapper">
   <input type="submit" id="submit" value="Tarkista vastaukset" />
   </div>
</form>

</div>


<script>
var answers = {
  "q1": ["on", "over"],
  "q2": ["on"],
  "q3": ["at"],
  "q4": ["on"],
  "q5": ["on"],
  "q6": ["by"],
  "q7": ["at"],
  "q8": ["at"],
  "q9": ["on"],
  "q10": ["in"],
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