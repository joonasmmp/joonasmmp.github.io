---
title: "Kokoavat: Olla-verbi kirjoita 1"
date: 2022-2-1
draft: false
type: page
layout: tehtava
---

Täydennä olla-verbi oikeassa muodossa.

{{< rawhtml >}}
<div class="tehtava">
<form autocomplete="off">
  <ol>

<section>
I &nbsp;<li><input id="q1" type="text"/><span></span></li>&nbsp; (olen) friends with someone who &nbsp;<li><input id="q2" type="text"/><span></span></li>&nbsp; (on) has the weirdest dreams. She &nbsp;<li><input id="q3" type="text"/><span></span></li>&nbsp; (on ollut) them for several years now. We usually &nbsp;<li><input id="q4" type="text"/><span></span></li>&nbsp; (on) so much fun together, but when she starts talking about her dreams, he gives me the creeps. Another problem is that I &nbsp;<li><input id="q5" type="text"/><span></span></li>&nbsp; (olen) deeply in love with her. Ok, I admit, that makes us more than just friends. Don't get me wrong, she &nbsp;<li><input id="q6" type="text"/><span></span></li>&nbsp; (on) an amazing person and we &nbsp;<li><input id="q7" type="text"/><span></span></li>&nbsp; (on) so much in common. We &nbsp;<li><input id="q8" type="text"/><span></span></li>&nbsp; (emme ole koskaan olleet) in any romantic situation or anything  like that, but I &nbsp;<li><input id="q9" type="text"/><span></span></li>&nbsp; (on) a feeling she &nbsp;<li><input id="q10" type="text"/><span></span></li>&nbsp; (on ollut) feelings for me for a while now as well.
</section>
<p>Jonathan</p>
<section>
Ok and what exactly &nbsp;<li><input id="q11" type="text"/><span></span></li>&nbsp; (on) the problem?  We all &nbsp;<li><input id="q12" type="text"/><span></span></li>&nbsp; (on)  weird dreams, that's what humans do. If you want &nbsp;<li><input id="q13" type="text"/><span></span></li>&nbsp; (olla) in a relationship with someone, you'll have to learn to live with all the baggage. 
</section>
<p>Jackson</p>
<section>
You obviously  &nbsp;<li><input id="q14" type="text"/><span></span></li>&nbsp; (et ole ollut) around when we've discussed the dreams. Let me tell you. A while ago she &nbsp;<li><input id="q15" type="text"/><span></span></li>&nbsp; (oli) a dream about Liam Neeson. She &nbsp;<li><input id="q16" type="text"/><span></span></li>&nbsp; (ei ollut) afraid of Liam Neeson before that, but now she &nbsp;<li><input id="q17" type="text"/><span></span></li>&nbsp; (on) terrified of him. She &nbsp;<li><input id="q18" type="text"/><span></span></li>&nbsp; (ei ole ollut) able to sleep for weeks. She &nbsp;<li><input id="q19" type="text"/><span></span></li>&nbsp; (on täytynyt) to see a therapist, but it &nbsp;<li><input id="q20" type="text"/><span></span></li>&nbsp; (ei ole ollut) of much help at all. Everywhere we go, we &nbsp;<li><input id="q21" type="text"/><span></span></li>&nbsp; (on) to be careful not to run into Liam Neeson. Do you know what my favourite movie &nbsp;<li><input id="q22" type="text"/><span></span></li>&nbsp; (on)? Star Wars Episode 1: The Phantom Menace. I &nbsp;<li><input id="q23" type="text"/><span></span></li>&nbsp; (en ole ollut) able to watch it for months now. Yes I know it &nbsp;<li><input id="q24" type="text"/><span></span></li>&nbsp; (on) a terrible movie, but I &nbsp;<li><input id="q25" type="text"/><span></span></li>&nbsp; (on ollut) this obsession with Gui-Gon Jin since I &nbsp;<li><input id="q26" type="text"/><span></span></li>&nbsp; (olin) a child.
</section>
<p>Jonathan</p>
<section>
And you &nbsp;<li><input id="q27" type="text"/><span></span></li>&nbsp; (et ole ollut) able to talk her out of this fear of Liam Neeson?
</section>
<p>Jackson</p>
<section>
No man, it's only gotten worse since we watched the Taken trilogy.
</section>
<p>Jonathan</p>
</ol>
  
 <link rel="stylesheet" type="text/css" href="/css/kirjoita1.css"/>

<div id="buttonWrapper">
   <input type="submit" id="submit" value="Tarkista vastaukset" />
   </div>
</form>

</div>


<script>
var answers = {
  "q1": ["am"],
  "q2": ["has"],
  "q3": ["has had"],
  "q4": ["have"],
  "q5": ["am"],
  "q6": ["is"],
  "q7": ["have"],
  "q8": ["have never been"],
  "q9": ["have"],
  "q10": ["has had"],
  "q11": ["is"],
  "q12": ["have"],
  "q13": ["to be"],
  "q14": ["haven't been", "have not been"],
  "q15": ["had"],
  "q16": ["wasn't", "was not"],
  "q17": ["is"],
  "q18": ["hasn't been", "has not been"],
  "q19": ["has had"],
  "q20": ["has not been", "hasn't been"],
  "q21": ["have"],
  "q22": ["is"],
  "q23": ["haven't been", "have not been"],
  "q24": ["is"],
  "q25": ["have had"],
  "q26": ["was"],
  "q27": ["haven't been", "have not been"],
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