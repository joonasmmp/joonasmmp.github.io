---
title: "7. Valitse kokoon viittaava etuliite"
date: 2022-2-1
weight: 87
draft: false
type: page
layout: tehtava
---

Muodosta suomenkielisen sanan vastine valitsemalla yksi seuraavista lukuun, kokoon tai muotoon viittaavista etuliitteistä: mono-, bi-, tri-, quadr(u)-, penta-, dec(i/a)-, cent-, mill-, poly-, multi-, semi-, ultra-, mega- 
{{< rawhtml >}}
<div class="tehtava">
<form autocomplete="off">
  <ol>
  
<section>
1. Satavuotias = &nbsp;<br class="flex visible md:hidden lg:hidden"><li><input id="q1" type="text"/><span></span></li>enary
</section>
<section>
2. Moniääninen = &nbsp;<br class="flex visible md:hidden lg:hidden"><li><input id="q2" type="text"/><span></span></li>phonic
</section>
<section>
3. Yksitoikkoinen = &nbsp;<br class="flex visible md:hidden lg:hidden"><li><input id="q3" type="text"/><span></span></li>tonous
</section>
<section>
4. Kahdenvälinen = &nbsp;<br class="flex visible md:hidden lg:hidden"><li><input id="q4" type="text"/><span></span></li>lateral
</section>
<section>
5. Monikielinen = &nbsp;<br class="flex visible md:hidden lg:hidden"><li><input id="q5" type="text"/><span></span></li>lingual
</section>
<section>
6. Viisikulmainen = &nbsp;<br class="flex visible md:hidden lg:hidden"><li><input id="q6" type="text"/><span></span></li>gonal
</section>
<section>
7. Puolipiste eli ; = &nbsp;<br class="flex visible md:hidden lg:hidden"><li><input id="q7" type="text"/><span></span></li>colon
</section>
<section>
8. Jalusta, kolmijalka =  &nbsp;<br class="flex visible md:hidden lg:hidden"><li><input id="q8" type="text"/><span></span></li>pod
</section>
<section>
9. Kymmentavuinen = &nbsp;<br class="flex visible md:hidden lg:hidden"><li><input id="q9" type="text"/><span></span></li>syllabic
</section>
<section>
10. Nelijalkainen = &nbsp;<br class="flex visible md:hidden lg:hidden"><li><input id="q10" type="text"/><span></span></li>ped
</section> 
<section>
11. Suuruudenhullu = &nbsp;<br class="flex visible md:hidden lg:hidden"><li><input id="q11" type="text"/><span></span></li>lomaniac
</section> 
<section>
12. Vuosituhat = &nbsp;<br class="flex visible md:hidden lg:hidden"><li><input id="q12" type="text"/><span></span></li>ennium
</section> 
<section>
13. Huippumoderni = &nbsp;<br class="flex visible md:hidden lg:hidden"><li><input id="q13" type="text"/><span></span></li>-modern
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
  "q1": ["cent"],
  "q2": ["poly"],
  "q3": ["mono"],
  "q4": ["bi"],
  "q5": ["multi",],
  "q6": ["penta"],
  "q7": ["semi"],
  "q8": ["tri"],
  "q9": ["deca"],
  "q10": ["quadru"],
  "q11": ["mega"],
  "q12": ["mill"],
  "q13": ["ultra"],
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