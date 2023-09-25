---
title: "Aikamuotoharmonia: Kirjoita 1"
date: 2022-2-1
draft: false
type: page
layout: tehtava
---

Täydennä verbimuodot annetun vihjeen mukaan.

{{< rawhtml >}}
<div class="tehtava">
<form autocomplete="off">
  <ol>
  
<section>
1. If I pass this exam, I &nbsp;<li><input id="q1" type="text"/>&nbsp; (be) the happiest student in this school. 
</section>
<section>
2. My brother will be furious if Arsenal&nbsp;<li><input id="q2" type="text"/><span></span></li>&nbsp; (win) tonight.
</section>
<section>
3. What would the Prime Minister say if we &nbsp;<li><input id="q3" type="text"/><span></span></li>&nbsp; (vote) against her law proposal?
</section>
<section>
4. If I didn't know her very well, I &nbsp;<li><input id="q4" type="text"/><span></span></li>&nbsp; (ask) her to move in with me!
</section>
<section>
5. I won't believe it until I&nbsp;<li><input id="q5" type="text"/><span></span></li>&nbsp; (see) it with my own eyes.
</section>
<section>
6. Your health &nbsp;<li><input id="q6" type="text"/><span></span></li>&nbsp; (improve) if you stop smoking.
</section>
<section>
7. We might move to Paris if my mother &nbsp;<li><input id="q7" type="text"/><span></span></li>&nbsp; (find) a job there.
</section>
<section>
8. If you weren't so tall, you  &nbsp;<li><input id="q8" type="text"/><span></span></li>&nbsp; (wear) your father's clothes.
</section>
<section>
9. If you &nbsp;<li><input id="q9" type="text"/><span></span></li>&nbsp; (meet) a bear in the woods, you should play dead.
</section>
<section>
10. Whose headphones could you have borrowed if you &nbsp;<li><input id="q10" type="text"/><span></span></li>&nbsp; (unohtaa) your headphones at home? </ol>
  
 <link rel="stylesheet" type="text/css" href="/css/kirjoita1.css"/>

<div id="buttonWrapper">
   <input type="submit" id="submit" value="Tarkista vastaukset" />
   </div>
</form>

</div>


<script>
var answers = {
  "q1": ["will be", "'ll be'"],
  "q2": ["wins"],
  "q3": ["voted"],
  "q4": ["wouldn't ask", "would not ask"],
  "q5": ["see"],
  "q6": ["would improve"],
  "q7": ["found"],
  "q8": ["could wear"],
  "q9": ["met"],
  "q10": ["had forgotten", "had forgot"],
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