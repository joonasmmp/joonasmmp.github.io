---
title: "Konnektiivit: Kirjoita 1"
date: 2022-1-1
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
1. Johnny does not play football&nbsp;<li><input id="q1" type="text"/><span></span></li>&nbsp; (vaikka) his brother plays in the Premier League.
</section>
<section>
2. Jonathan takes cycling lessons &nbsp;<li><input id="q2" type="text"/><span></span></li>&nbsp; (kun taas) his sister is into show dance.
</section>
<section>
3. Timothy started studying for his exams&nbsp;<li><input id="q3" type="text"/><span></span></li>&nbsp; (sen jälkeen kuin) he had taken his sister to school.
</section>
<section>
4. Jillian studies in the library&nbsp;<li><input id="q4" type="text"/><span></span></li>&nbsp; (aina kun) she can.
</section>
<section>
5. She often studies very noisily,&nbsp;<li><input id="q5" type="text"/><span></span></li>&nbsp; (ikään kuin) she owns the place.
</section>
<section>
6. I would not study with her &nbsp;<li><input id="q6" type="text"/><span></span></li>&nbsp; (vaikka) she was the last study partner left in the world.
</section>
<section>
7. You better have some bandaids ready&nbsp;<li><input id="q7" type="text"/><span></span></li>&nbsp; (siltä varalta että) we crash this bike!
</section>
<section>
8. This is the only bike we have&nbsp;<li><input id="q8" type="text"/><span></span></li>&nbsp; (jollei) you guys can get a second one right now.
</section>
<section>
9. I will find myself a new bike &nbsp;<li><input id="q9" type="text"/><span></span></li>&nbsp; (jotta) we don't all crash and break our faces right before the wedding.
</section>
<section>
10. Instead of bikes we can go to town &nbsp;<li><input id="q10" type="text"/><span></span></li>&nbsp; (joko) by bus &nbsp;<input id="q11" type="text"/><span></span></li>&nbsp; (tai) by train. 
  </ol>
  
<div id="buttonWrapper">
   <input type="submit" id="submit" value="Tarkista vastaukset" />
   </div>
</form>

</div>

<script>
var answers = {
  "q1": ["even though", "although"],
  "q2": ["whereas", "while"],
  "q3": ["after"],
  "q4": ["whenever"],
  "q5": ["as if","as though"],
  "q6": ["even if"],
  "q7": ["in case"],
  "q8": ["unless"],
  "q9": ["so", "so that"],
  "q10": ["either"],
  "q11": ["or"],
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