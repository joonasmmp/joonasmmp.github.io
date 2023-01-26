---
title: "10. Valitse oikea etuliite"
date: 2022-2-1
draft: false
weight: 80
type: page
layout: tehtava
---

Muodosta suomenkielisen sanan vastine valitsemalla yksi seuraavista lukuun etuliitteistä: co-, counter-, anti-, pro-, auto-, by-, cross-, out-, sur-, over-, under-, vice-, pseudo- 
{{< rawhtml >}}
<div class="tehtava">
<form autocomplete="off">
  <ol>
  
<section>
1. Vastapaino = &nbsp;<li><input id="q1" type="text"/><span></span></li>-balance
</section>
<section>
2. Vastamyrkky = &nbsp;<li><input id="q2" type="text"/><span></span></li>dote
</section>
<section>
3. Ristikuulustella = &nbsp;<li><input id="q3" type="text"/><span></span></li>-examine
</section>
<section>
4. Voittaa, ylittä = &nbsp;<li><input id="q4" type="text"/><span></span></li>pass
</section>
<section>
5. Yliannostus = &nbsp;<li><input id="q5" type="text"/><span></span></li>dose
</section>
<section>
6. Kirjoituskumppani = &nbsp;<li><input id="q6" type="text"/><span></span></li>-author
</section>
<section>
7. Sivutuote = &nbsp;<li><input id="q7" type="text"/><span></span></li>-product
</section>
<section>
8. Aborttia vastustava =  &nbsp;<li><input id="q8" type="text"/><span></span></li>-life
</section>
<section>
9. Aliarvioida = &nbsp;<li><input id="q9" type="text"/><span></span></li>estimate
</section>
<section>
10. Automaattiohjaus = &nbsp;<li><input id="q10" type="text"/><span></span></li>pilot
</section> 
<section>
11. Vara-admiraali = &nbsp;<li><input id="q11" type="text"/><span></span></li>admiral
</section> 
<section>
12. Suoriutua paremmin = &nbsp;<li><input id="q12" type="text"/><span></span></li>perform
</section> 
<section>
13. Valeraskaus = &nbsp;<li><input id="q13" type="text"/><span></span></li>pregnancy
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
  "q1": ["counter"],
  "q2": ["anti"],
  "q3": ["cross"],
  "q4": ["sur"],
  "q5": ["over",],
  "q6": ["co"],
  "q7": ["by"],
  "q8": ["pro"],
  "q9": ["under"],
  "q10": ["auto"],
  "q11": ["vice"],
  "q12": ["out"],
  "q13": ["pseudo"],
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