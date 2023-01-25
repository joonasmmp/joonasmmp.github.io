---
title: "Käännä suomeksi"
date: 2022-2-1
draft: false
type: page
layout: tehtava
---

Tehtävän sanoihin on kaikkiin lisätty negatiivisuutta tai käänteisyyttä ilmaiseva etuliite. Käännä sanat suomeksi.
{{< rawhtml >}}
<div class="tehtava">
<form autocomplete="off">
  <ol>
  
<section>
1. Indirect = &nbsp;<li><input id="q1" type="text"/><span></span></li>&nbsp;
</section>
<section>
2. Malnourished = &nbsp;<li><input id="q2" type="text"/><span></span></li>&nbsp;
</section>
<section>
3. Misinterprete = &nbsp;<li><input id="q3" type="text"/><span></span></li>&nbsp;
</section>
<section>
4. Derail = &nbsp;<li><input id="q4" type="text"/><span></span></li>&nbsp;
</section>
<section>
5. Nonviolent = &nbsp;<li><input id="q5" type="text"/><span></span></li>&nbsp;
</section>
<section>
6. Disagree = &nbsp;<li><input id="q6" type="text"/><span></span></li>&nbsp;
</section>
<section>
7. Irregular = &nbsp;<li><input id="q7" type="text"/><span></span></li>&nbsp;
</section>
<section>
8. Impatient =  &nbsp;<li><input id="q8" type="text"/><span></span></li>&nbsp;
</section>
<section>
9. Illiterate = &nbsp;<li><input id="q9" type="text"/><span></span></li>&nbsp;
</section>
<section>
10. Inefficient = &nbsp;<li><input id="q10" type="text"/><span></span></li>&nbsp;
</section> 
<section>
11. Uneven = &nbsp;<li><input id="q11" type="text"/><span></span></li>&nbsp;
</section>
<section>
</ol>
  
 <link rel="stylesheet" type="text/css" href="/css/kirjoita1.css"/>

<div id="buttonWrapper">
   <input type="submit" id="submit" value="Tarkista vastaukset" />
   </div>
</form>

</div>


<script>
var answers = {
  "q1": ["epäsuora"],
  "q2": ["aliravittu"],
  "q3": ["tulkita väärin"],
  "q4": ["suistaa raiteiltaan", "suistua raiteiltaan", "suistua raiteelta", "suistaa raiteelta", "suistaa raiteilta",],
  "q5": ["väkivallaton",],
  "q6": ["olla eri mieltä"],
  "q7": ["epäsäännöllinen"],
  "q8": ["kärsimätön", "malttamaton"],
  "q9": ["lukutaidoton", "kirjoitustaidoton", "luku- ja kirjoitustaidoton"],
  "q10": ["tehoton"],
  "q11": ["epätasainen"],
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