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