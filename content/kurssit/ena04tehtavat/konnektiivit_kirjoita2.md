---
title: "Konnektiivit: Kirjoita 2"
date: 2022-1-2
draft: false
type: page
layout: tehtava
---

Täydennä linkkisanat annetun vihjeen mukaan.

{{< rawhtml >}}
<link rel="stylesheet" type="text/css" href="/css/kirjoita1.css"/>
<div class="tehtava">
<form autocomplete="off">
  <ol>
  
<section>
1. I absolutely loved the movie. &nbsp;<li><input id="q1" type="text"/><span></span></li>&nbsp; (kaiken kaikkiaan), we had a lovely time. 
</section>
<section>
2. Jonathan lost his ticket. &nbsp;<li><input id="q2" type="text"/><span></span></li>&nbsp; (sen seurauksena) he had to buy a new one.
</section>
<section>
3. The screening had been sold out. &nbsp;<li><input id="q3" type="text"/><span></span></li>&nbsp; (kuitenkin), we managed to get him a seat as someone decided not to show up.
</section>
<section>
4. Jonathan had left his credit card at home. &nbsp;<li><input id="q4" type="text"/><span></span></li>&nbsp; (sen lisäksi), he did not have any cash with him either..
</section>
<section>
5. The night was warm, so we did not call a taxi. &nbsp;<li><input id="q5" type="text"/><span></span></li>&nbsp; (sen sijaan) we decided to walk home.
</section>
<section>
6. I hope Jonathan can pay me back - &nbsp;<li><input id="q6" type="text"/><span></span></li>&nbsp; (ei sillä että on väliä), I have owed him money before as well.
</section>
<section>
7. &nbsp;<li><input id="q7" type="text"/><span></span></li>&nbsp; (sekä) Jonathan  &nbsp;<li><input id="q8" type="text"/><span></span></li>&nbsp; (että) Lucy managed to walk home.
</section>
<section>
8. &nbsp;<li><input id="q9" type="text"/><span></span></li>&nbsp; (koska) it was late, we decided to hit the sack right away.
</section>
<section>
9. We might go to the movies tomorrow as well, &nbsp;<li><input id="q10" type="text"/><span></span></li>&nbsp; (edellyttäen että) Jonathan does not mess everything up like today.
  </ol>
  
<div id="buttonWrapper">
   <input type="submit" id="submit" value="Tarkista vastaukset" />
   </div>
</form>

</div>

<script>
var answers = {
  "q1": ["all in all"],
  "q2": ["as a result", "consequently"],
  "q3": ["still", "however", "nevertheless", "nonetheless"],
  "q4": ["besides", "on top of that", "in addition", "what's more", "moreover" "futhermore", "in addition to that"],
  "q5": ["instead"],
  "q6": ["not that it matters"],
  "q7": ["both"],
  "q8": ["and"],
  "q9": ["as", "since", "because"],
  "q10": ["provided that", "providing that"],
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

{{%accordion "Lista linkkisanoista" %}}
Lisäys tai vertailu:
and,
both – and,
not only – but also,
as well as,
than,
such as,
as,
not so – as / not as – as,
as if / as though

Vaihtoehto tai vastakohta:
or,
either – or,
neither – nor,
whether – or,
but,
or else / otherwise

Seuraus tai selitys:
so,
(and) therefore / (and) that’s why

Syy tai tarkoitus: 
because / as / since ,
so (that)

Ehto:
if,
unless,
as long as

Aika:
when,
before,
after,
since,
until/till,
whenever,
as/while,
as soon as,
once,
now that,
by the time

Myönntytys:
although / though / even though,
even if

Lisäys:
furthermore,
in addition (to this),
also,
besides

Esimerkki:
for example / for instance,
in fact,
actually,
for example / for instance

Seuraus:
therefore,
as a result

Vastakkainen näkökulma:
however,
nevertheless,
whereas/while,
on one hand,
on (the) other hand,
despite that,
in spite of that,
in reality

Järjestys:
first/firstly,
second/secondly,
third/thirdly,
finally,
previously,
first and foremost,
above all,
last but not least

Korostus:
especially,
in particular,
surprisingly,
without a doubt,
undoubtedly,
especially,
in particular,
surprisingly

Uudelleenmuotoilu:
in other words,
namely

Yhteenveto:
in short,
to conclude / in conclusion,
all in all,
to sum up,
in a nutshell

Mielipide:
in my opinion,
to my mind

{{% /accordion%}}