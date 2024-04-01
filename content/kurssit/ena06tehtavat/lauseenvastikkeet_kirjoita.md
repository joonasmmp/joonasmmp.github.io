---
title: "Lauseenvastikkeet: Kirjoita"
date: 2022-5-11
draft: false
type: page
layout: tehtava
---

Muuta lauseenvastikkeiksi.

{{< rawhtml >}}
<div class="tehtava">
<form autocomplete="off">
  <ol>
  
<section>
1. Before you apply for a visa, you should consider the following things.
<br>= <li><input id="q1" type="text"/><span></span></li>&nbsp; for a visa, you should consider the following things.
</section>
<section>
2. As he was anxious to get away, he drove all through the night.
<br>= <li><input id="q2" type="text"/><span></span></li>, he drove all through the night.
</section>
<section>
3. In the morning he reached the cottage which stood by the lake.
<br>= In the morning he reached the cottage&nbsp;<li><input id="q3" type="text"/><span></span></li>.
</section>
<section>
4. After Tim unpacked his luggage, he made himself a cup of tea.
<br>=<li><input id="q4" type="text"/><span></span></li>, he made himself a cup of tea.
</section>
<section>
5. Though he felt tired, he decided to chop some wood.
<br>= <li><input id="q5" type="text"/><span></span></li>, he decided to chop some wood.
</section>
<section>
6. Tomorrow he would start his work if it was possible.
<br>= Tomorrow he would start his work&nbsp;<li><input id="q6" type="text"/><span></span></li>.
</section>
<section>
7. If he was lucky, he would be done by Christmas.
<br>=<li><input id="q7" type="text"/><span></span></li>, he would be done by Christmas.
</section>
<section>
8. As the weather was pleasant, he stopped working and went for a walk.
<br>=<li><input id="q8" type="text"/><span></span></li>, he stopped working and went for a walk.
</section>
<section>
9. After a while he spotted a house which has been built in the last century.
<br>= After a while he spotted a house&nbsp;<li><input id="q9" type="text"/><span></span></li>.
</section>
<section>
10. As I got a summer job, I could finally buy a house.
<br>= <li><input id="q10" type="text"/><span></span></li>, I could finally buy a house.
</section>
<section>
11. If it isn't repaired at once, it might collapse.
<br>= <li><input id="q11" type="text"/><span></span></li>, it might collapse.
</section>
<section>
12. As it was an old house, it didn't cost much.
<br>= <li><input id="q12" type="text"/><span></span></li>, it didn't cost much.
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
  "q1": ["before applying"],
  "q2": ["anxious to get away"],
  "q3": ["standing by the lake"],
  "q4": ["after unpacking his luggage", "having unpacked", "having unpacked his luggage", "after unpacking"],
  "q5": ["though feeling tired"],
  "q6": ["if possible", "were possible"],
  "q7": ["if lucky"],
  "q8": ["the weather being pleasant"],
  "q9": ["built in the last century"],
  "q10": ["getting a summer job"],
  "q11": ["if not repaired at once", "not repaired at once"],
  "q12": ["being an old house"],
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