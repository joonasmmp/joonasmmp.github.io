---
title: "1. Mikä paikan prepositio?"
date: 2022-2-1
weight: 72
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
1. He had a Nicolas Cage poster hanging &nbsp;<li><input id="q1" type="text"/><span></span></li>&nbsp; the wall.
</section>
<section>
2. Let's meet &nbsp;<li><input id="q2" type="text"/><span></span></li>&nbsp; the corner of Kauppurienkatu and Ratakatu.
</section>
<section>
3. Is that man with his hands &nbsp;<li><input id="q3" type="text"/><span></span></li>&nbsp; his pockets following us?
</section>
<section>
4. Which page is this exercise &nbsp;<li><input id="q4" type="text"/><span></span></li>&nbsp;?
</section>
<section>
5. I live &nbsp;<li><input id="q5" type="text"/><span></span></li>&nbsp;
</section> the first floor, welcome!
<section>
6. I'm a city boy, but sometimes I wish I lived &nbsp;<li><input id="q6" type="text"/><span></span></li>&nbsp; the countryside. 
</section>
<section>
7. I tried to visit Russia, but &nbsp;<li><input id="q7" type="text"/><span></span></li>&nbsp; the border I started having second thoughts. 
</section>
<section>
8. Do you know that old spooky house &nbsp;<li><input id="q8" type="text"/><span></span></li>&nbsp; the end of the road?
</section>
<section>
9. When the sky is clear you can see thousands of stars &nbsp;<li><input id="q9" type="text"/><span></span></li>&nbsp; the night sky.
</section>
<section>
10. Please someone get Simon a chair so he doesn't have to sit &nbsp;<li><input id="q10" type="text"/><span></span></li>&nbsp; the floor. 
</section> </ol>
  
 <link rel="stylesheet" type="text/css" href="/css/kirjoita1.css"/>

<div id="buttonWrapper">
   <input type="submit" id="submit" value="Tarkista vastaukset" />
   </div>
</form>

</div>


<script>
var answers = {
  "q1": ["on"],
  "q2": ["at"],
  "q3": ["in"],
  "q4": ["on"],
  "q5": ["on"],
  "q6": ["in"],
  "q7": ["at"],
  "q8": ["at"],
  "q9": ["in"],
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