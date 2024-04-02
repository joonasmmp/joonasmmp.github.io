---
title: "Adjektiivit ja adverbit: Kirjoita 1"
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
1. I think that &nbsp;<li><input id="q1" type="text"/><span></span></li>&nbsp; (mitä suurempi) your salary is, &nbsp;<li><input id="q2" type="text"/><span></span></li>&nbsp; (sitä rikkaampi) you are. What do you think?
</section>
<section>
2. I think that's a very &nbsp;<li><input id="q3" type="text"/><span></span></li>&nbsp; (rohkea) statement. Some people might earn a lot, but fail to use money &nbsp;<li><input id="q4" type="text"/><span></span></li>&nbsp; (viisaasti).
</section>
<section>
3. How could I say this &nbsp;<li><input id="q5" type="text"/><span></span></li>&nbsp; (ystävällisesti)... I think you are &nbsp;<li><input id="q6" type="text"/><span></span></li>&nbsp; (uskomattoman huono) at managing your finances.
</section>
<section>
4. Well, I am  &nbsp;<li><input id="q7" type="text"/><span></span></li>&nbsp; (yhtä hyvä) at managing my finances as you are at managing your temper.
</section>
<section>
5. I might be &nbsp;<li><input id="q8" type="text"/><span></span></li>&nbsp; (äkkipikainen ja aggressiivinen), but at least I'm not &nbsp;<li><input id="q9" type="text"/><span></span></li>&nbsp; (kaikista tylsin) person in the world.
</section>
<section>
6. I'm not &nbsp;<li><input id="q10" type="text"/><span></span></li>&nbsp; (tylsä), I just find it &nbsp;<li><input id="q11" type="text"/><span></span></li>&nbsp; (äärimmäisen vaikea) to be around people who are &nbsp;<li><input id="q12" type="text"/><span></span></li>&nbsp; (yhtä yksinkertainen kuin sinä).
</section>
<section>
7. I am &nbsp;<li><input id="q13" type="text"/><span></span></li>&nbsp; (syvästi loukkaantunut) by your words and I think you should &nbsp;<li><input id="q14" type="text"/><span></span></li>&nbsp; (heti) stop being so &nbsp;<li><input id="q15" type="text"/><span></span></li>&nbsp; (epäkohtelias).
</section>
<section>
8. Well you started it by, &nbsp;<li><input id="q16" type="text"/><span></span></li>&nbsp; (todella epäkohteliaasti), calling me a boring person. I am trying very &nbsp;<li><input id="q17" type="text"/><span></span></li>&nbsp; (kovasti) to be nice to you.
</section>
<section>
9. It would be &nbsp;<li><input id="q18" type="text"/><span></span></li>&nbsp; (helpompaa) if we just ended this conversation here and now.
</section>
<section>
10. I agree. This is &nbsp;<li><input id="q19" type="text"/><span></span></li>&nbsp; (oudoin) job interview I have ever had. </ol>
  
 <link rel="stylesheet" type="text/css" href="/css/kirjoita1.css"/>

<div id="buttonWrapper">
   <input type="submit" id="submit" value="Tarkista vastaukset" />
   </div>
</form>

</div>


<script>
var answers = {
  "q1": ["the bigger"],
  "q2": ["the richer"],
  "q3": ["bold", "brave"],
  "q4": ["wisely"],
  "q5": ["kindly", "nicely", "politely", "in a friendly way", "in a kind way", "in a nice way", "in a polite way", "in a friendly manner", "in a kind manner", "in a nice manner", "in a polite manner"],
  "q6": ["incredibly bad", "unbelievably bad", "terribly bad", "awfully bad", "extremely bad"],
  "q7": ["as good"],
  "q8": ["quick-tempered and aggressive", "short-tempered and aggressive"],
  "q9": ["the most boring"],
  "q10": ["boring", "dull", "uninteresting", "tedious", "a boring person"],
  "q11": ["extremely difficult", "very difficult", "incredibly difficult", "terribly difficult", "awfully difficult", "extremely hard", "very hard", "incredibly hard", "terribly hard", "awfully hard"],
  "q12": ["as simple as you", "as simple as you are"],
  "q13": ["deeply offended", "deeply hurt", "deeply upset", "deeply insulted"],
  "q14": ["immediately"],
  "q15": ["rude", "impolite", "disrespectful", "discourteous"],
  "q16": ["very rudely", "extremely rudely", "in a very rude way", "in an extremely rude way"],
  "q17": ["hard"],
  "q18": ["easier"],
  "q19": ["the weirdest", "the strangest", "the oddest", "the most peculiar", "the most bizarre", "the most unusual", "the most eccentric", "the most unconventional", "the most outlandish", "the most offbeat", "the most unorthodox", "the most extraordinary"],
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

{{%accordion "Vastaukset" %}}
  "q1": ["the bigger"],
  "q2": ["the richer"],
  "q3": ["bold", "brave"],
  "q4": ["wisely"],
  "q5": ["kindly", "nicely", "politely", "in a friendly way", "in a kind way", "in a nice way", "in a polite way", "in a friendly manner", "in a kind manner", "in a nice manner", "in a polite manner"],
  "q6": ["incredibly bad", "unbelievably bad", "terribly bad", "awfully bad", "extremely bad"],
  "q7": ["as good"],
  "q8": ["quick-tempered and aggressive", "short-tempered and aggressive"],
  "q9": ["the most boring"],
  "q10": ["boring", "dull", "uninteresting", "tedious", "a boring person"],
  "q11": ["extremely difficult", "very difficult", "incredibly difficult", "terribly difficult", "awfully difficult", "extremely hard", "very hard", "incredibly hard", "terribly hard", "awfully hard"],
  "q12": ["as simple as you", "as simple as you are"],
  "q13": ["deeply offended", "deeply hurt", "deeply upset", "deeply insulted"],
  "q14": ["immediately"],
  "q15": ["rude", "impolite", "disrespectful", "discourteous"],
  "q16": ["very rudely", "extremely rudely", "in a very rude way", "in an extremely rude way"],
  "q17": ["hard"],
  "q18": ["easier"],
  "q19": ["the weirdest", "the strangest", "the oddest", "the most peculiar", "the most bizarre", "the most unusual", "the most eccentric", "the most unconventional", "the most outlandish", "the most offbeat", "the most unorthodox", "the most extraordinary"],
{{% /accordion%}}