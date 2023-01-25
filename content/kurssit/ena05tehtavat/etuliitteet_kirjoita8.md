---
title: "Valitse oikea etuliite"
date: 2022-2-1
draft: false
type: page
layout: tehtava
---

Muodosta suomenkielisen sanan vastine valitsemalla yksi seuraavista lukuun etuliitteistä: ante-, fore-, pre-, post-, ex-, re-, sub-, super-, trans-, inter-, extra- 
{{< rawhtml >}}
<div class="tehtava">
<form autocomplete="off">
  <ol>
  
<section>
1. Avioitua uudelleen = &nbsp;<li><input id="q1" type="text"/><span></span></li>marry
</section>
<section>
2. Siperian poikki kulkeva = &nbsp;<li><input id="q2" type="text"/><span></span></li>-Siberian
</section>
<section>
3. Henkilöiden välinen = &nbsp;<li><input id="q3" type="text"/><span></span></li>personal
</section>
<section>
4. Yli-inhimillinen = &nbsp;<li><input id="q4" type="text"/><span></span></li>human
</section>
<section>
5. Monikielinen = &nbsp;<li><input id="q5" type="text"/><span></span></li>lingual
</section>
<section>
6. Ala-arvoinen = &nbsp;<li><input id="q6" type="text"/><span></span></li>standard
</section>
<section>
7. Avioliiton ulkopuolinen = &nbsp;<li><input id="q7" type="text"/><span></span></li>marital
</section>
<section>
8. Entinen vaimo =  &nbsp;<li><input id="q8" type="text"/><span></span></li>-wife
</section>
<section>
9. Ennakkovaroitus = &nbsp;<li><input id="q9" type="text"/><span></span></li>warning
</section>
<section>
10. Ennalta maksettu = &nbsp;<li><input id="q10" type="text"/><span></span></li>-paid
</section> 
<section>
11. Suuruudenhullu = &nbsp;<li><input id="q11" type="text"/><span></span></li>lomaniac
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
  "q1": ["re"],
  "q2": ["trans"],
  "q3": ["inter"],
  "q4": ["super"],
  "q5": ["post",],
  "q6": ["sub"],
  "q7": ["extra"],
  "q8": ["ex"],
  "q9": ["fore"],
  "q10": ["pre"],
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

<style>
.tehtava input[type="text"] {
    width: 75px;
    text-align: right;
}
</style>
</rawhtml>