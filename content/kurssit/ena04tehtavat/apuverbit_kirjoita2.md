---
title: "Apuverbit: Kirjoita 2"
date: 2022-2-2
draft: false
type: page
layout: tehtava
---

Täydennä linkkisanat annetun vihjeen mukaan.

{{< rawhtml >}}
<div class="tehtava">
<form autocomplete="off">
  <ol>
  
<section>
1. You&nbsp;<li><input id="q1" type="text"/><span></span></li>&nbsp; (ei tarvitse nauraa) at my jokes if you do not find them funny.
</section>
<section>
2. I &nbsp;<li><input id="q2" type="text"/><span></span></li>&nbsp; (en ole koskaan voinut valehdella) to my parents.
</section>
<section>
3. You &nbsp;<li><input id="q3" type="text"/><span></span></li>&nbsp; (ei tarvitse tehdä) all the exercises if you are going to ace them anyway.
</section>
<section>
4. You &nbsp;<li><input id="q4" type="text"/><span></span></li>&nbsp; (et saa valvoa) late studying even if your grades depended on it.
</section>
<section>
5. Simon&nbsp;<li><input id="q5" type="text"/><span></span></li>&nbsp; (ei ole voinut kadottaa) his wallet again!
</section>
<section>
6. You &nbsp;<li><input id="q6" type="text"/><span></span></li>&nbsp; (et ehkä usko) this, but he has.
</section>
<section>
7. Simon &nbsp;<li><input id="q7" type="text"/><span></span></li>&nbsp; (on saattanut unohtaa) that we already went through hell when he lost it the previous time.
</section>
<section>
8. He &nbsp;<li><input id="q8" type="text"/><span></span></li>&nbsp; (on täytynyt olla) really absent-minded to be able to lose it again.
</section>
<section>
9. If we did not have to pay for his meal every weekend &nbsp;<li><input id="q9" type="text"/><span></span></li>&nbsp; (saattaisimme olla) filthy rich already.
</section>
<section>
10. He &nbsp;<li><input id="q10" type="text"/><span></span></li>&nbsp; (olisi voinut olla)
 more friendly to us considering we are paying for his expenses. </ol>
  
 <link rel="stylesheet" type="text/css" href="/css/kirjoita1.css"/>

<div id="buttonWrapper">
   <input type="submit" id="submit" value="Tarkista vastaukset" />
   </div>
</form>

</div>


<script>
var answers = {
  "q1": ["don't have to laugh", "do not have to laugh"],
  "q2": ["have never been able to lie", "'ve never been able to lie"],
  "q3": ["don't have to do", "do not have to do"],
  "q4": ["you must not stay up", "you musn't stay up"],
  "q5": ["can't have lost","cannot have lost", "can not have lost"],
  "q6": ["may not believe", "might not believe"],
  "q7": ["may have forgotten", "might have forgotten"],
  "q8": ["must have been", "must've been"],
  "q9": ["might be"],
  "q10": ["could have been"],
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