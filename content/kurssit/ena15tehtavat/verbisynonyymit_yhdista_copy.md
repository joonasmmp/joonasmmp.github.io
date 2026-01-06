---
title: "Verbisynonyymit: yhdistä termit 1"
date: 2022-6-1
weight: 11
draft: false
type: page
layout: tehtava
---
Yhdistä sanat selityksiinsä

{{< rawhtml >}}
<!DOCTYPE html>
<link rel="stylesheet" type="text/css" href="/css/yhdistely_uusittu.css"/>
<html lang="fi">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Verbisynonyymit: yhdistä termit 22</title>
</head>
<body>

<div id="tehtava">
  <div><ul id="terms"></ul></div>
  <div><ul id="defs"></ul></div>
</div>

<div class="next-wrapper">
  <button id="next" disabled>Seuraava tehtävä</button>
</div>

<p id="info"></p>

<script>
window.onload = function () {

// ===== TEHTÄVÄDATA (3 tehtävää, 10 termiä) =====
  var tehtavat = [
    {
      terms: [
        { index: 0, text: "walk slowly and tiredly" },
        { index: 1, text: "walk in a relaxed way" },
        { index: 2, text: "run very fast" },
        { index: 3, text: "move quickly and suddenl" },
        { index: 4, text: "walk quietly on toes" },
        { index: 5, text: "walk with difficulty" },
        { index: 6, text: "walk without direction" },
        { index: 7, text: "move quietly and carefully" },
        { index: 8, text: "walk heavily and noisily" },
        { index: 9, text: "jump around playfully" }
      ],
      definitions: [
        { index: 0, text: "trudge" },
        { index: 1, text: "stroll" },
        { index: 2, text: "sprint" },
        { index: 3, text: "dart" },
        { index: 4, text: "tiptoe" },
        { index: 5, text: "limp" },
        { index: 6, text: "wander" },
        { index: 7, text: "creep" },
        { index: 8, text: "stomp" },
        { index: 9, text: "frolic" }
      ],
      pairs: {
        0: 0, 1: 1, 2: 2, 3: 3, 4: 4, 5: 5, 6: 6, 7: 7, 8: 8, 9: 9
      }
    },

    {
      terms: [
        { index: 0, text: "say quietly" },
        { index: 1, text: "say angrily and loudly" },
        { index: 2, text: "say in a shaking voice" },
        { index: 3, text: "say happily and excitedly" },
        { index: 4, text: "say in an annoyed way" },
        { index: 5, text: "say officially/formally" },
        { index: 6, text: "say in response/back" },
        { index: 7, text: "say unclearly with mouth closed" },
        { index: 8, text: "say in a complaining way" },
        { index: 9, text: "say nervously and unclearly" }
      ],
      definitions: [
        { index: 0, text: "whisper" },
        { index: 1, text: "roar" },
        { index: 2, text: "tremble" },
        { index: 3, text: "exclaim" },
        { index: 4, text: "snap" },
        { index: 5, text: "announce" },
        { index: 6, text: "retort" },
        { index: 7, text: "mumble" },
        { index: 8, text: "whine" },
        { index: 9, text: "stammer" }
      ],
      pairs: { 0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9 }
    },

   {
      terms: [
        { index: 0, text: "think deeply and carefully" },
        { index: 1, text: "think about memories" },
        { index: 2, text: "suddenly understand" },
        { index: 3, text: "think that something is true" },
        { index: 4, text: "think about something constantly" },
        { index: 5, text: "think and work out logically" },
        { index: 6, text: "guess or think (uncertain)" },
        { index: 7, text: "wonder and ask yourself" },
        { index: 8, text: "think hard to remember" },
        { index: 9, text: "imagine or create in mind" }
      ],
      definitions: [
        { index: 0, text: "ponder" },
        { index: 1, text: "recall" },
        { index: 2, text: "realize" },
        { index: 3, text: "believe" },
        { index: 4, text: "obsess" },
        { index: 5, text: "deduce" },
        { index: 6, text: "suspect" },
        { index: 7, text: "question" },
        { index: 8, text: "recollect" },
        { index: 9, text: "envision" }
      ],

      pairs: { 0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9 }
    },

   {
      terms: [
        { index: 0, text: "look quickly" },
        { index: 1, text: "look steadily and intensely" },
        { index: 2, text: "look angrily" },
        { index: 3, text: "look in wonder/amazement" },
        { index: 4, text: "look secretly/quickly" },
        { index: 5, text: "look with half-closed eyes" },
        { index: 6, text: "look lovingly or admiringly" },
        { index: 7, text: "look carefully to find details" },
        { index: 8, text: "look with wide eyes (shock)" },
        { index: 9, text: "look briefly and secretly" }
      ],
      definitions: [
        { index: 0, text: "glance" },
        { index: 1, text: "stare" },
        { index: 2, text: "glare" },
        { index: 3, text: "marvel" },
        { index: 4, text: "peek" },
        { index: 5, text: "squint" },
        { index: 6, text: "gaze" },
        { index: 7, text: "scrutinize" },
        { index: 8, text: "gape" },
        { index: 9, text: "glimpse" }
      ],

      pairs: { 0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9 }
    },

   {
      terms: [
        { index: 0, text: "eat quickly and hungrily" },
        { index: 1, text: "drink in small amounts" },
        { index: 2, text: "eat or drink with a sucking noise" },
        { index: 3, text: "drink quickly and eagerly" },
        { index: 4, text: "eat small amounts slowly" },
        { index: 5, text: "chew noisily" },
        { index: 6, text: "drink all of it" },
        { index: 7, text: "eat small bites of" },
        { index: 8, text: "swallow quickly without chewing" },
        { index: 9, text: "drink in large amounts" }
      ],
      definitions: [
        { index: 0, text: "devour" },
        { index: 1, text: "sip" },
        { index: 2, text: "slurp" },
        { index: 3, text: "gulp" },
        { index: 4, text: "nibble" },
        { index: 5, text: "munch" },
        { index: 6, text: "drain" },
        { index: 7, text: "sample" },
        { index: 8, text: "wolf down" },
        { index: 9, text: "guzzle" }
      ],


      pairs: { 0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9 }
    },
  ];

  var currentTask = 0;
  var selectedTerm = null;
  var selectedDef = null;
  var correctCount = 0;
  var numero = 0;

  var termsContainer = document.getElementById("terms");
  var defsContainer = document.getElementById("defs");
  var nextBtn = document.getElementById("next");
  var info = document.getElementById("info");

  function isMatch(termIndex, defIndex) {
    return tehtavat[currentTask].pairs[termIndex] === defIndex;
  }

  function shuffle(array) {
    var arr = [...array];
    for (var i = arr.length - 1; i > 0; i--) {
      var j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }

  function createListHTML(list, container) {
    container.innerHTML = "";
    list.forEach(item => {
      var li = document.createElement("li");
      li.setAttribute("data-index", item.index);
      li.textContent = item.text;
      container.appendChild(li);
    });
  }

  function clearSelection() {
    document.querySelectorAll("li[data-selected]").forEach(li => {
      li.removeAttribute("data-selected");
    });
  }

  function checkMatch() {
    if (selectedTerm === null || selectedDef === null) return;

    var termEl = termsContainer.querySelector("[data-index='" + selectedTerm + "']");
    var defEl = defsContainer.querySelector("[data-index='" + selectedDef + "']");

    if (isMatch(selectedTerm, selectedDef)) {
      termEl.className = "score";
      defEl.className = "score";
      
      numero++;
      termEl.style.order = numero;
      defEl.style.order = numero;

      correctCount++;

      if (correctCount === tehtavat[currentTask].terms.length) {
        if (currentTask === tehtavat.length - 1) {
          info.innerHTML = 'Kaikki tehtävät tehty! 👍<br><a href="https://joonasmmp.github.io/kurssit/ena15tehtavat/verbisynonyymit_kirjoita1/" class="success-link">Siirry seuraavaan tehtävään!</a>';
          nextBtn.style.display = "none";
        } else {
          nextBtn.disabled = false;
          info.textContent = "Hienoa! Kaikki parit oikein 👍";
        }
      }
    }

    clearSelection();
    selectedTerm = null;
    selectedDef = null;
  }

  function handleTermClick(e) {
    var target = e.target;
    if (target.tagName !== "LI" || target.className === "score") return;

    var index = Number(target.getAttribute("data-index"));
    
    // Jos sama termi klikataan uudelleen, poistetaan valinta
    if (selectedTerm === index) {
      selectedTerm = null;
      target.removeAttribute("data-selected");
      return;
    }

    // Poistetaan vanhat valinnat termipuolelta
    document.querySelectorAll("#terms li[data-selected]").forEach(li => {
      li.removeAttribute("data-selected");
    });

    selectedTerm = index;
    target.setAttribute("data-selected", "true");

    checkMatch();
  }

  function handleDefClick(e) {
    var target = e.target;
    if (target.tagName !== "LI" || target.className === "score") return;

    var index = Number(target.getAttribute("data-index"));
    
    // Jos sama määritelmä klikataan uudelleen, poistetaan valinta
    if (selectedDef === index) {
      selectedDef = null;
      target.removeAttribute("data-selected");
      return;
    }

    // Poistetaan vanhat valinnat määritelmäpuolelta
    document.querySelectorAll("#defs li[data-selected]").forEach(li => {
      li.removeAttribute("data-selected");
    });

    selectedDef = index;
    target.setAttribute("data-selected", "true");

    checkMatch();
  }

  function loadTask() {
    selectedTerm = null;
    selectedDef = null;
    correctCount = 0;
    numero = 0;
    nextBtn.disabled = true;

    info.textContent = "Tehtävä " + (currentTask + 1) + " / " + tehtavat.length;

    var data = tehtavat[currentTask];
    createListHTML(shuffle(data.terms), termsContainer);
    createListHTML(shuffle(data.definitions), defsContainer);

    // Lisätään event listenerit
    termsContainer.removeEventListener("click", handleTermClick);
    defsContainer.removeEventListener("click", handleDefClick);
    termsContainer.addEventListener("click", handleTermClick);
    defsContainer.addEventListener("click", handleDefClick);
  }

  nextBtn.addEventListener("click", function () {
    currentTask++;
    if (currentTask >= tehtavat.length) {
      info.textContent = "Kaikki tehtävät tehty 🎉";
      nextBtn.disabled = true;
      nextBtn.style.display = "none";
      return;
    }
    loadTask();
  });

  loadTask();
};
</script>

{{< /rawhtml >}}