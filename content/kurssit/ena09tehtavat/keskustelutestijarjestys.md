---
title: "Keskustelutesti: Järjestyksessä"
date: 2022-3-26
draft: false
type: page
layout: tehtava
---
{{< rawhtml >}}
<html>
 <body>
  <div id="cardArea"></div>
  <div id=valikko>
<button id="teema1">Music & Dance</button>  <button id="teema2">Narratives & Books</button>   <button id="teema3">Films & TV</button>   <button id="teema4">Visual Arts</button>
</div>
  <div id="lukumaara"></div>
  <div id="buttonArea" class="grid grid-cols-2"></div>

 </body>
</html>

<script> 
$(document).ready(function() {

  var currentQuestion = 0;
    var qbank = [
    ["What is the capital of Assyria?"],
    ["How big is big?"],
    ["Where am I?"],
    ["What's going on?"],
    ["When am I?"],
    ["What is the biggest mammal in the world?"],
  ];

  beginActivity();
  kortinVaihto();

  window.addEventListener('keydown', (e) => {
    if (e.keyCode === 32 && e.target === document.body) {
      e.preventDefault();
    }
  });

  document.body.onkeydown = function(event) {
    event = event || window.event;
    var keycode = event.charCode || event.keyCode;
    if (keycode === 37 && currentQuestion > 0) {
      currentQuestion--;
      beginActivity();
    }

    if (keycode === 39 && currentQuestion < qbank.length - 1) {
      currentQuestion++;
      beginActivity();
    }
  }

  function beginActivity() {
    $("#cardArea").empty();
    $("#cardArea").append('<div id="card1" class="card">' + qbank[currentQuestion][0] + '</div>');
    $("#card1").css("background-color", "#1F2937");
    $("#lukumaara").empty();
    var korttia = document.createElement('div')
    korttia.innerHTML = currentQuestion + 1 + " / " + qbank.length;
    document.getElementById('lukumaara').appendChild(korttia);
  }
  }


  function edellinen() {
    $("#buttonArea").append('<div id="prevButton">Edellinen</div>');
    $("#prevButton").on("click", function() {
      if (currentQuestion > 0) {
        currentQuestion--;
        beginActivity();
      }
    })
  }

  function seuraava() {
    $("#buttonArea").append('<div id="nextButton">Seuraava</div>');
    $("#nextButton").on("click", function() {
      if (currentQuestion < qbank.length - 1) {
        currentQuestion++;
        beginActivity();
      }
    })
  }
})
</script>

{{< /rawhtml >}}