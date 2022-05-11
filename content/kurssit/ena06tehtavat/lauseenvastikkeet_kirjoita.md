---
title: "Genetiivi: Flashcard"
date: 2022-3-20
draft: false
type: page
layout: tehtava
---

Muuta lauseenvastikkeiksi.

{{< rawhtml >}}

<div class="tehtava">
<form autocomplete="off">
  <ol>
  
1. Before you apply for a visa, you should consider the following things.
<br>
= <li><input id="q1" type="text"/></li> for a visa, you should consider the following things.
<br>
2. Over the years, many exciting stories about ducks <li><input id="q2" type="text"/></li>. <i>(on kirjoitettu)</i>
<br>
3. The use of renewable energy <li><input id="q3" type="text"/></li>. <i>(on lisätty)</i>
<br>
4. The cafeteria <li><input id="q4" type="text"/></li> at 10 am. <i>(avataan)</i>
<br>
5. Shooting ducks <li><input id="q5" type="text"/></li> outside hunting season. <i>(ei ole sallittua)</i>
<br>6. Ducks <li><input id="q6" type="text"/></li> in cages, unless they get aggressive. <i>(ei pidetä)</i>
<br>7. In the Middle Ages, ducks <li><input id="q7" type="text"/></li> very intelligent. <i>(pidettiin)</i>
<br>8. New laws <li><input id="q8" type="text"/></li> to protect them from hungry villagers. <i>(tehtiin)</i>
<br>9. In 1632, it <li><input id="q9" type="text"/></li> they were sacred animals in Ireland. <i>(päätettiin)</i>
<br>10. New exercises that don't include ducks <li><input id="q10" type="text"/></li>. <i>(täytyy tehdä)</i>
<br>11. Previous exercises <li><input id="q11" type="text"/></li> to make more sense. <i>(pitäisi muuttaa)</i>
<br>12. The word 'duck' <li><input id="q12" type="text"/></li> with something more interesting. <i>(voitaisiin korvata)</i>
<br>13. However, any changes <li><input id="q13" type="text"/></li>. <i>(ei tulla tekemään)</i>

  </ol>
  
 
  <input type="submit" id="submit" value="Tarkista vastaukset" />
</form>

<hr style="height:1px;width:360px;color:black;background-color:gray">

<style>
li {
display: inline-block;
align-content: center;
}

.tehtava ol {
list-style: none;
margin-left: 0;
font-size: 1.125 rem;
}

.oikein input[type=text] {
    outline: none;
    border: none;
    border-bottom: 2px solid #299617;
    background-size: 20px 20px;
    background-repeat: no-repeat;
    background-position: right;
	padding: 0px;
  }
  
.vaarin input[type=text] {
    outline: none;
    border: none;
    border-bottom: 2px dashed #DA2C43;
    padding: 0px;
}

.tehtava body {
  padding: 20px;
  font-family: 'Times New Roman', serif;
  text-align: center;
}
    
#submit {
  border: 0px;
  align: center;
}

.tehtava h1 {
  font-size: 20px;
  font-family: 'Times New Roman', serif;
  color: #ea0083;
  font-weight: normal;
}

.tehtava button {
  color: white;
  width: 90px;
  font-size: 18px;
  font-family: 'Times New Roman', serif;
  background: #eb5615;
  padding: 0px;
  border: 1px solid #000000;
  border-radius: 3px;
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
    padding: 0px 1px 1px 1px;
}

#resetbutton {
  background: white;
  border: 0px;
}</style>

<script>
var answers = {
  "q1": ["before applying"],
  "q2": ["have been written"],
  "q3": ["has been increased", "has been grown"],
  "q4": ["is opened"],
  "q5": ["is not allowed", "is not permitted", "is prohibited", "isn't allowed", "isn't permitted"],
  "q6": ["are not kept", "aren't kept"],
  "q7": ["were considered", "were thought to be"],
  "q8": ["were made", "were created"],
  "q9": ["was decided"],
  "q10": ["must be made", "must be created"],
  "q11": ["should be changed"],
  "q12": ["could be replaced"],
  "q13": ["will not be made", "won't be made"],
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

</script>
</rawhtml>