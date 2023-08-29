---
title: "Kokoavat: kirjoita 1"
date: 2022-2-1
draft: false
type: page
layout: tehtava
---

Täydennä aikamuodot.

{{< rawhtml >}}
<div class="tehtava">
<form autocomplete="off">
  <ol>
  
<section>
Michael Jordan &nbsp;<li><input id="q1" type="text"/><span></span></li>&nbsp; (oli ollut) out of work for a while when he finally &nbsp;<li><input id="q2" type="text"/><span></span></li>&nbsp; (sai) a new job at Kemi Shipping. He &nbsp;<li><input id="q3" type="text"/><span></span></li>&nbsp; (ei ollut suunnitellut) to remain unemployed for long. After all, he &nbsp;<li><input id="q4" type="text"/><span></span></li>&nbsp; (oli onnistunut) to get a good job in the basketball business after graduating from the University of Kemi in 2014. 
</section>
<section>
- How &nbsp;<li><input id="q5" type="text"/><span></span></li>&nbsp; (menetit) your job? You were an NBA allstar.
</section>
<section>
- I &nbsp;<li><input id="q6" type="text"/><span></span></li>&nbsp; (työskentelin) in the NBA and scored a lot of hoops, alright, but unfortunately, the job  &nbsp;<li><input id="q7" type="text"/><span></span></li>&nbsp; (ei ollut) for me. I &nbsp;<li><input id="q8" type="text"/><span></span></li>&nbsp; (täytyi) find something else.
</section>
<section>
- And how &nbsp;<li><input id="q9" type="text"/><span></span></li>&nbsp; (löysit) a new job?
</section>
<section>
- After the initial shock, I &nbsp;<li><input id="q10" type="text"/><span></span></li>&nbsp; (en antanut) being rich and famous affect my dreams. I &nbsp;<li><input id="q11" type="text"/><span></span></li>&nbsp; (olen aina ollut) interested in the shipping business in nothern Finland. I &nbsp;<li><input id="q12" type="text"/><span></span></li>&nbsp; (otin yhteyttä) the company. They &nbsp;<li><input id="q13" type="text"/><span></span></li>&nbsp; (eivät uskoneet) it was really me. 
</section>
<section>
- What &nbsp;<li><input id="q14" type="text"/><span></span></li>&nbsp; (ajattelet) are the most important things when &nbsp;<li><input id="q15" type="text"/><span></span></li>&nbsp; (aloittaa) in a new job in a completely different field?
</section>
<section>
- Believe in your dreams and acquire new skills. You &nbsp;<li><input id="q16" type="text"/><span></span></li>&nbsp; (et kehity) as a person if all you do is play  basketball.
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
  "q1": ["had been"],
  "q2": ["got", "landed"],
  "q3": ["had not planned", "hadn't planned"],
  "q4": ["had managed", "had succeeded"],
  "q5": ["did you lose"],
  "q6": ["worked"],
  "q7": ["wasn't", "was not"],
  "q8": ["had to"],
  "q9": ["did you find"],
  "q10": ["didn't let", "did not let"],
  "q11": ["have always been"],
  "q12": ["contacted", "reached out to"],
  "q13": ["did not believe", "didn't believe"],
  "q14": ["do you think"],
  "q15": ["starting"],
  "q16": ["do not develop", "don't develop"],
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