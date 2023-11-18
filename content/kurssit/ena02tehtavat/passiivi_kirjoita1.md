---
title: "Passiivi: Kirjoita 1"
date: 2022-2-1
draft: false
type: page
layout: tehtava
---

Fill in the blanks with the correct form of the verb in passive voice.

{{< rawhtml >}}
<div class="tehtava">
<form autocomplete="off">
  <ol>
  
<section>
The new software &nbsp;<li><input id="q1" type="text"/><span></span></li>&nbsp; (develop) by a small team of engineers. It &nbsp;<li><input id="q2" type="text"/><span></span></li>&nbsp; (design) to be user-friendly and efficient. The project &nbsp;<li><input id="q3" type="text"/><span></span></li>&nbsp; (not expect) to be completed so quickly. After all, it &nbsp;<li><input id="q4" type="text"/><span></span></li>&nbsp; (consider) a challenging task. 
</section>
<section>
- How &nbsp;<li><input id="q5" type="text"/><span></span></li>&nbsp; (the software, test) before its release?
</section>
<section>
- The software &nbsp;<li><input id="q6" type="text"/><span></span></li>&nbsp; (test) thoroughly by our quality assurance team. Any bugs found &nbsp;<li><input id="q7" type="text"/><span></span></li>&nbsp; (fix) promptly. 
</section>
<section>
- And how &nbsp;<li><input id="q8" type="text"/><span></span></li>&nbsp; (be) the feedback after its release?
</section>
<section>
- Overwhelmingly positive. The software &nbsp;<li><input id="q9" type="text"/><span></span></li>&nbsp; (praise) for its simplicity and efficiency.
</section>
<section>
- What &nbsp;<li><input id="q10" type="text"/><span></span></li>&nbsp; (consider) the most important factors when a new software &nbsp;<li><input id="q11" type="text"/><span></span></li>&nbsp; (develop)?
</section>
<section>
- Understanding the user's needs and creating a user-friendly interface. These factors &nbsp;<li><input id="q12" type="text"/><span></span></li>&nbsp; (not, should, ignore) during the development process.
</section>
</ol>
  
 <link rel="stylesheet" type="text/css" href="/css/kirjoita1.css"/>

<div id="buttonWrapper">
   <input type="submit" id="submit" value="Check Answers" />
   </div>
</form>

</div>


<script>
var answers = {
  "q1": ["was developed"],
  "q2": ["was designed"],
  "q3": ["was not expected", "wasn't expected"],
  "q4": ["was considered"],
  "q5": ["was the software tested"],
  "q6": ["was tested"],
  "q7": ["were fixed"],
  "q8": ["was"],
  "q9": ["was praised"],
  "q10": ["are considered"],
  "q11": ["is developed"],
  "q12": ["should not be ignored"],
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