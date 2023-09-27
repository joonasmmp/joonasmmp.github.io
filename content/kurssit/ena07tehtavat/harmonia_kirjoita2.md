---
title: "Aikamuotoharmonia: Kirjoita 1"
date: 2022-2-1
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
1. If you &nbsp;<li><input id="q1" type="text"/>&nbsp; (muutat) to another country, I &nbsp;<li><input id="q2" type="text"/><span></span></li>&nbsp; (maksan) for the flight. Bye.
</section>
<section>
2. If he&nbsp;<li><input id="q3" type="text"/><span></span></li>&nbsp; (olisi ollut) more careful with her car, she &nbsp;<li><input id="q4" type="text"/><span></span></li>&nbsp; (olisi voinut viedä) him to the party.
</section>
<section>
3. I &nbsp;<li><input id="q5" type="text"/><span></span></li>&nbsp; (saattaisin matkustaa) to St. Petersburg if Russia &nbsp;<li><input id="q6" type="text"/><span></span></li>&nbsp; (ei olisi) at war with another country.</section>
<section>
4. Mike &nbsp;<li><input id="q7" type="text"/><span></span></li>&nbsp; (ei jää) in Wisconsin if he &nbsp;<li><input id="q8" type="text"/><span></span></li>&nbsp; (ei saa) a job there.
</section>
<section>
5. If he &nbsp;<li><input id="q9" type="text"/><span></span></li>&nbsp; (ei tarvitsisi) a better job, he &nbsp;<li><input id="q10" type="text"/><span></span></li>&nbsp; (ei edes harkitsisi) moving to Canada.
</section>
<section>
6. I think I &nbsp;<li><input id="q11" type="text"/><span></span></li>&nbsp; (olisi pitänyt opiskella) harder at school so I &nbsp;<li><input id="q12" type="text"/><span></span></li>&nbsp; (ei täytyisi tehdä) this job right now.
</section>
<section>
7. If my friends &nbsp;<li><input id="q13" type="text"/><span></span></li>&nbsp; (olisivat menneet) to university, I &nbsp;<li><input id="q14" type="text"/><span></span></li>&nbsp; (olisin saattanut tehdä) the same. Peer pressure is my biggest weakness.
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
  "q1": ["move"],
  "q2": ["will pay"],
  "q3": ["had been"],
  "q4": ["could have taken"],
  "q5": ["might travel"],
  "q6": ["wasn't", "were not", "weren't", "was not"],
  "q7": ["won't stay", "will not stay"],
  "q8": ["doesn't get", "does not get"],
  "q9": ["didn't need", "did not need"],
  "q10": ["wouldn't even consider", "would not even consider"],
  "q11": ["should have studied"],
  "q12": ["wouldn't have to do", "would not have to do"],
  "q13": ["had gone"],
  "q14": ["might have done"]
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

{{%accordion "Ehtolauseaikamuototaulukko" %}}
| Päälause | Sivulause |
|--------|--------|
| **Futuuri**  |  **Preesens**  |
| I will help you | if I have time |
|  |
| **1. Konditionaali** | **Imperfekti** | 
| I would help you | if I had time |
|  |
| **2. Konditionaali** | **Pluskvamperfekti** |
| I would have helped you | if I had had time |
{{% /accordion%}}

{{%accordion "Vastaukset" %}}
  "q1": ["move"],
  "q2": ["will pay"],
  "q3": ["had been"],
  "q4": ["could have taken"],
  "q5": ["might travel"],
  "q6": ["wasn't", "were not", "weren't", "was not"],
  "q7": ["won't stay", "will not stay"],
  "q8": ["doesn't get", "does not get"],
  "q9": ["didn't need", "did not need"],
  "q10": ["wouldn't even consider", "would not even consider"],
  "q11": ["should have studied"],
  "q12": ["wouldn't have to do", "would not have to do"],
  "q13": ["had gone"],
  "q14": ["might have done"]
{{% /accordion%}}
