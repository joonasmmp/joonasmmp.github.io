---
title: "4. Mikä ajan prepositio?"
date: 2022-2-1
weight: 45
draft: false
type: page
layout: tehtava
---

Täydennä annettuja lauseita prepositioilla by/during/for/over/since/until/while

{{< rawhtml >}}
<div class="tehtava">
<form autocomplete="off">
  <ol>
  
<section>
1. Did you really fall asleep &nbsp;<li><input id="q1" type="text"/><span></span></li>&nbsp; your English exam?
</section>
<section>
2. I have been working on my essay &nbsp;<li><input id="q2" type="text"/><span></span></li>&nbsp; three weeks now.
</section>
<section>
3. It needs to be finished &nbsp;<li><input id="q3" type="text"/><span></span></li>&nbsp; Friday.
</section>
<section>
4. You can play with LEGOs &nbsp;<li><input id="q4" type="text"/><span></span></li>&nbsp; I prepare dinner.
</section>
<section>
5. Please don't interrupt your teachers &nbsp;<li><input id="q5" type="text"/><span></span></li>&nbsp; they are talking.
</section>
<section>
6. The English presentation went on &nbsp;<li><input id="q6" type="text"/><span></span></li>&nbsp; hours and hours. 
</section>
<section>
7. We can expect a lot of snowfall &nbsp;<li><input id="q7" type="text"/><span></span></li>&nbsp; the next few hours.
</section>
<section>
8. I came up with an idea for our Finnish presentation &nbsp;<li><input id="q8" type="text"/><span></span></li>&nbsp; you were sleeping.
</section>
<section>
9. I've been waiting for my friend &nbsp;<li><input id="q9" type="text"/><span></span></li>&nbsp; noon.
</section>
<section>
10. Let's talk more &nbsp;<li><input id="q10" type="text"/><span></span></li>&nbsp; a cup of coffee when you get home. 
</section> </ol>
  
 <link rel="stylesheet" type="text/css" href="/css/kirjoita1.css"/>

<div id="buttonWrapper">
   <input type="submit" id="submit" value="Tarkista vastaukset" />
   </div>
</form>

</div>


<script>
var answers = {
  "q1": ["during"],
  "q2": ["for"],
  "q3": ["by"],
  "q4": ["while"],
  "q5": ["while"],
  "q6": ["for"],
  "q7": ["over"],
  "q8": ["while"],
  "q9": ["since"],
  "q10": ["over"],
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