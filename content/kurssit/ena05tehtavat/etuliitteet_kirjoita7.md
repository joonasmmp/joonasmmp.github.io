---
title: "Muodosta verbejä jälkiliitteillä"
date: 2022-2-1
draft: false
type: page
layout: tehtava
---

Muodosta uusia sanoja etuliitteiden avulla. Käytä aiemman tehtävän kantasanoja apunasi. 

{{< rawhtml >}}
<div class="tehtava">
<form autocomplete="off">
  <ol>
  
<section>
1. Kaksijalkainen = &nbsp;<li><input id="q1" type="text"/><span></span></li>&nbsp;
</section>
<section>
2. Kolmipyöräinen = &nbsp;<li><input id="q2" type="text"/><span></span></li>&nbsp;
</section>
<section>
3. Puoliautomaatti- = &nbsp;<li><input id="q3" type="text"/><span></span></li>&nbsp;
</section>
<section>
4. Yksitavuinen = &nbsp;<li><input id="q4" type="text"/><span></span></li>&nbsp;
</section>
<section>
5. Monimiljonääri = &nbsp;<li><input id="q5" type="text"/><span></span></li>&nbsp;
</section>
<section>
6. Viisiottelu = &nbsp;<li><input id="q6" type="text"/><span></span></li>&nbsp;
</section>
<section>
7. Kymmenottelu = &nbsp;<li><input id="q7" type="text"/><span></span></li>&nbsp;
</section>
<section>
8. Tuhatjalkainen =  &nbsp;<li><input id="q8" type="text"/><span></span></li>&nbsp;
</section>
<section>
9. Huipputehokas = &nbsp;<li><input id="q9" type="text"/><span></span></li>&nbsp;
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
  "q1": ["biped", "bipedal"],
  "q2": ["tricycle"],
  "q3": ["semiautomatic"],
  "q4": ["monosyllabic"],
  "q5": ["multimillionaire"],
  "q6": ["pentathlon"],
  "q7": ["decathlon"],
  "q8": ["millipede"],
  "q9": ["ultra-efficient", "ultraefficient"],
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