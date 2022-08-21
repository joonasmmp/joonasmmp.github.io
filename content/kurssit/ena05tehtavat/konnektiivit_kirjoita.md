---
title: "Lauseenvastikkeet: Kirjoita"
date: 2022-8-21
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
<br>1. Johnny does not play football<li><input id="q1" type="text"/><span></span></li>&nbsp; (vaikka) his brother plays in the Premier League.
</section>
<section>
<br>2. Jonathan takes cycling lessons <li><input id="q2" type="text"/><span></span></li> (kun taas) his sister is into show dance.
</section>
<section>
<br>3. Timothy started studying for his exams<li><input id="q3" type="text"/><span></span></li> (sen jälkeen kuin) he had taken his sister to school.
</section>
<section>
<br>4. Jillian studies in the library<li><input id="q4" type="text"/><span></span></li> (aina kun) she can.
</section>
<section>
<br>5. She often studies very noisily,<li><input id="q5" type="text"/><span></span></li> (ikään kuin) she owns the place.
</section>
<section>
<br>6. I would not study with her <li><input id="q6" type="text"/><span></span></li> (vaikka) she was the last study partner left in the world.
</section>
<section>
<br>7. You better have some bandaids ready<li><input id="q7" type="text"/><span></span></li> (siltä varalta että) we crash this bike!
</section>
<section>
<br>8. This is the only bike we have<li><input id="q8" type="text"/><span></span></li> (jollei) you guys can get a second one right now.
<section>
<br>9. I will find myself a new bike <li><input id="q9" type="text"/><span></span></li> (jotta) we don't all crash and break our faces right before the wedding.
</section>
<section>
<br>Instead of bikes we can go to town <li><input id="q10" type="text"/><span></span></li> by bus by li><input id="q11" type="text"/><span></span></li> train. 
  </ol>
  
<div id="buttonWrapper">
   <input type="submit" id="submit" value="Tarkista vastaukset" />
   </div>
</form>

</div>

<style>
li {
display: inline-block;
align-content: center;
}

.tehtava ol {
list-style: none;
margin-left: 0;
padding-left: 5px;
font-size: 1.125rem !important;
}

.oikein input[type=text] {
    outline: none;
    border: none;
    border-bottom: 2px solid #299617;
    margin-bottom: -1px;
  }
  
.vaarin input[type=text] {
    outline: none;
    border: none;
    border-bottom: 2px dashed #DA2C43;
    margin-bottom: -1px;
}

    
#submit {
  border: 0px;
  padding-top: 1em;
}

.dark #submit {
  color: #FFFFFF;
  border: 0px;
  padding-top: 1em;
}

.tehtava #vastauspainike {
  text-align: center;
  margin: 0 auto;
}

form {
  line-height: 2;
}

form input {
    outline: none;
    border: none;
    border-bottom: 1px solid black;
    font-size: inherit;
    background-color: #fafafa;
}

.dark input {
  background-color: #181a1b;
  color: #FFFFFF;
  border-bottom: 1px solid white;
}

.tehtava input[type="text"],
.tehtava span {
    font-family:  'Open Sans', 'Helvetica Neue', sans-serif;
    font-size: inherit;
}

.tehtava input[type="text"] {
    width: 6em;
}

.tehtava span {
    position: absolute;
    left: -9999px;
    display: inline-block;
    min-width: 6em;
}

.tehtava section {
    position: relative;
    padding: 10px 10px;
    width: 100%;
    float: left;
    background: #fafafa;
    border: 1px solid #d4d4d4;
    }

.dark section {
    background: #181a1b;
     color: #FFFFFF;
  }

 #buttonWrapper {
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
 }

</style>

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