---
title: "Indefiniittipronominit: kirjoita 2"
date: 2022-2-2
draft: false
type: page
layout: tehtava
---

Täydennä aukot indefiniittipronomineilla.

{{< rawhtml >}}
<div class="tehtava">
<form autocomplete="off">
  <ol>
  
<section>
In my opinion,&nbsp;<li><input id="q1" type="text"/><span></span></li>&nbsp; exercises on this website are great. This one in particular goes through &nbsp;<li><input id="q2" type="text"/><span></span></li>&nbsp; indefinite pronoun in one simple exercise. I don't even know &nbsp;<li><input id="q3" type="text"/><span></span></li>&nbsp; exercise that does that, on any site!
I mean, naturally there are &nbsp;<li><input id="q4" type="text"/><span></span></li>&nbsp; exercises that go through many indefinite pronouns, but all &nbsp;<li><input id="q5" type="text"/><span></span></li>&nbsp; pronouns are left out completely! I think I am even in love with this exercise, as &nbsp;<li><input id="q6" type="text"/><span></span></li>&nbsp; my knees started shaking as I wrote the first pronoun. I want to fill out all the pronouns. Or maybe I should save some for later? Well, &nbsp;<li><input id="q7" type="text"/><span></span></li>&nbsp; way, I'm lucky to have been presented this exercise. I already did two different exercises on another site and &nbsp;<li><input id="q8" type="text"/><span></span></li>&nbsp; of them were half as good as this one. Let's hope that the following exercise is just as good, and I can't practice with one great exercise after &nbsp;<li><input id="q9" type="text"/><span></span></li>
  
 <link rel="stylesheet" type="text/css" href="/css/kirjoita1.css"/>

<div id="buttonWrapper">
   <input type="submit" id="submit" value="Tarkista vastaukset" />
   </div>
</form>

</div>


<script>
var answers = {
  "q1": ["all"],
  "q2": ["each"],
  "q3": ["another"],
  "q4": ["some"],
  "q5": ["the other"],
  "q6": ["both"],
  "q7": ["either"],
  "q8": ["neither"],
  "q9": ["another"],
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