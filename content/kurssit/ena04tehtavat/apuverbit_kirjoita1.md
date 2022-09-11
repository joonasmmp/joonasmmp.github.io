---
title: "Apuverbit: Kirjoita 1"
date: 2022-8-21
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
1. I&nbsp;<li><input id="q1" type="text"/><span></span></li>&nbsp; (osasin) play the piano when I was little
</section>
<section>
2. My brother &nbsp;<li><input id="q2" type="text"/><span></span></li>&nbsp; (oli pystynyt löytämään) some money in the lake.
</section>
<section>
3. &nbsp;<li><input id="q3" type="text"/><span></span></li>&nbsp; (voisitko ojentaa) the salt, please?
</section>
<section>
4. You &nbsp;<li><input id="q4" type="text"/><span></span></li>&nbsp; (olisit voinut soittaa) before barging in here!
</section>
<section>
5. Yesterday I&nbsp;<li><input id="q5" type="text"/><span></span></li>&nbsp; (täytyi viedä) my dog with me to school.
</section>
<section>
6. &nbsp;<li><input id="q6" type="text"/><span></span></li>&nbsp; (kykenisitkö auttamaan) me with this umbrella?
</section>
<section>
7. Jonathan &nbsp;<li><input id="q7" type="text"/><span></span></li>&nbsp; (on varmaankin 
ollut) really excited.
</section>
<section>
8. He  &nbsp;<li><input id="q8" type="text"/><span></span></li>&nbsp; (ei ole voinut lähteä) yet because I see his gold-plated Honda Civic parked in front.
</section>
<section>
9. There &nbsp;<li><input id="q9" type="text"/><span></span></li>&nbsp; (on varmasti) an explanation to all of this.
</section>
<section>
10. We &nbsp;<li><input id="q10" type="text"/><span></span></li>&nbsp; (emme olisi koskaan kyenneet tekemään) all that without the help of Frank. </ol>
  
 <link rel="stylesheet" type="text/css" href="/css/kirjoita1.css"/>

<div id="buttonWrapper">
   <input type="submit" id="submit" value="Tarkista vastaukset" />
   </div>
</form>

</div>


<script>
var answers = {
  "q1": ["could", "was able to play"],
  "q2": ["had been able to find"],
  "q3": ["could you pass"],
  "q4": ["could have called"],
  "q5": ["had to take"],
  "q6": ["would you be able to help"],
  "q7": ["must have been"],
  "q8": ["can't have left", "cannot have left"],
  "q9": ["must be"],
  "q10": ["would never have been able to do"],
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