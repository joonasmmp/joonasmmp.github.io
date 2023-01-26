---
title: "6. Valitse negatiivinen etuliite"
date: 2022-2-1
weight: 76
draft: false
type: page
layout: tehtava
---

Muodosta suomenkielisen sanan vastine valitsemalla yksi seuraavista etuliitteistä: un-, in-, il-, im-, ir-, dis-, non-, de-, mis-, mal- 
{{< rawhtml >}}
<div class="tehtava">
<form autocomplete="off">
  <ol>
  
<section>
1. Väärin diagnosoitu = &nbsp;<br class="flex visible md:hidden lg:hidden"><li><input id="q1" type="text"/><span></span></li>diagnosed
</section>
<section>
2. Epärehellisyys = &nbsp;<br class="flex visible md:hidden lg:hidden"><li><input id="q2" type="text"/><span></span></li>honesty
</section>
<section>
3. Alkoholiton = &nbsp;<br class="flex visible md:hidden lg:hidden"><li><input id="q3" type="text"/><span></span></li>alcoholic
</section>
<section>
4. Epäreilu = &nbsp;<br class="flex visible md:hidden lg:hidden"><li><input id="q4" type="text"/><span></span></li>fair
</section>
<section>
5. Vastuuton = &nbsp;<br class="flex visible md:hidden lg:hidden"><li><input id="q5" type="text"/><span></span></li>responsible
</section>
<section>
6. Hoitovirhe = &nbsp;<br class="flex visible md:hidden lg:hidden"><li><input id="q6" type="text"/><span></span></li>practice
</section>
<section>
7. Lainvastainen = &nbsp;<br class="flex visible md:hidden lg:hidden"><li><input id="q7" type="text"/><span></span></li>legitimate
</section>
<section>
8. Epäoikeudenmukaisuus =  &nbsp;<br class="flex visible md:hidden lg:hidden"><li><input id="q8" type="text"/><span></span></li>justice
</section>
<section>
9. Epämuodostunut = &nbsp;<br class="flex visible md:hidden lg:hidden"><li><input id="q9" type="text"/><span></span></li>formed
</section>
<section>
10. Läpitunkematon = &nbsp;<br class="flex visible md:hidden lg:hidden"><li><input id="q10" type="text"/><span></span></li>penetrable
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
  "q1": ["mis"],
  "q2": ["dis"],
  "q3": ["non"],
  "q4": ["un"],
  "q5": ["ir",],
  "q6": ["mal"],
  "q7": ["il"],
  "q8": ["in"],
  "q9": ["de"],
  "q10": ["im"],
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
</script>

<style>
.tehtava input[type="text"] {
    width: 75px;
    text-align: right;
}
</style>
</rawhtml>