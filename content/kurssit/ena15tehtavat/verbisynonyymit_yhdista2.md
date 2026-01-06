---
title: "Verbisynonyymit: yhdistä termit 2"
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
  <title>Verbisynonyymit: yhdistä termit 2</title>
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

 var tehtavat = [

  // ===== EXERCISE 1F: Holding/Touching Verbs =====
  {
    terms: [
      { index: 0, text: "hold very tightly" },
      { index: 1, text: "touch gently and lovingly" },
      { index: 2, text: "take quickly and roughly" },
      { index: 3, text: "hold firmly" },
      { index: 4, text: "touch lightly" },
      { index: 5, text: "pull suddenly and hard" },
      { index: 6, text: "hold and squeeze" },
      { index: 7, text: "touch softly (like petting)" },
      { index: 8, text: "take and hold protectively" },
      { index: 9, text: "push gently and repeatedly" }
    ],
    definitions: [
      { index: 0, text: "clutch" },
      { index: 1, text: "caress" },
      { index: 2, text: "snatch" },
      { index: 3, text: "grasp" },
      { index: 4, text: "brush" },
      { index: 5, text: "yank" },
      { index: 6, text: "squeeze" },
      { index: 7, text: "stroke" },
      { index: 8, text: "cradle" },
      { index: 9, text: "nudge" }
    ],
    pairs: { 0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9 }
  },

  // ===== EXERCISE 1G: Emotion/Reaction Verbs =====
  {
    terms: [
      { index: 0, text: "smile widely" },
      { index: 1, text: "cry loudly" },
      { index: 2, text: "laugh quietly" },
      { index: 3, text: "shake with fear" },
      { index: 4, text: "breathe out in relief" },
      { index: 5, text: "become red (embarrassed)" },
      { index: 6, text: "shake with cold" },
      { index: 7, text: "cry quietly" },
      { index: 8, text: "laugh loudly" },
      { index: 9, text: "smile in a mean way" }
    ],
    definitions: [
      { index: 0, text: "beam" },
      { index: 1, text: "wail" },
      { index: 2, text: "chuckle" },
      { index: 3, text: "tremble" },
      { index: 4, text: "sigh" },
      { index: 5, text: "blush" },
      { index: 6, text: "shiver" },
      { index: 7, text: "sob" },
      { index: 8, text: "roar" },
      { index: 9, text: "smirk" }
    ],
    pairs: { 0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9 }
  },

  // ===== EXERCISE 1H: Destruction/Force Verbs =====
  {
    terms: [
      { index: 0, text: "break into small pieces" },
      { index: 1, text: "break completely/violently" },
      { index: 2, text: "hit hard repeatedly" },
      { index: 3, text: "throw violently" },
      { index: 4, text: "break with a loud noise" },
      { index: 5, text: "tear into pieces" },
      { index: 6, text: "press and break" },
      { index: 7, text: "cut roughly" },
      { index: 8, text: "hit and break through" },
      { index: 9, text: "burn completely" }
    ],
    definitions: [
      { index: 0, text: "shatter" },
      { index: 1, text: "smash" },
      { index: 2, text: "pound" },
      { index: 3, text: "hurl" },
      { index: 4, text: "crack" },
      { index: 5, text: "rip" },
      { index: 6, text: "crush" },
      { index: 7, text: "hack" },
      { index: 8, text: "demolish" },
      { index: 9, text: "incinerate" }
    ],
    pairs: { 0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9 }
  },

  // ===== EXERCISE 1I: Sound Verbs =====
  {
    terms: [
      { index: 0, text: "make a high sharp sound" },
      { index: 1, text: "make a loud deep sound" },
      { index: 2, text: "make a low continuous constant sound" },
      { index: 3, text: "ring loudly and repeatedly" },
      { index: 4, text: "make a soft continuous sound" },
      { index: 5, text: "make a loud sudden sound" },
      { index: 6, text: "make a sharp cracking sound" },
      { index: 7, text: "make a light ringing sound" },
      { index: 8, text: "make noise hitting together" },
      { index: 9, text: "make a low continuous varying sound" }
    ],
    definitions: [
      { index: 0, text: "screech" },
      { index: 1, text: "roar" },
      { index: 2, text: "hum" },
      { index: 3, text: "clang" },
      { index: 4, text: "murmur" },
      { index: 5, text: "bang" },
      { index: 6, text: "snap" },
      { index: 7, text: "tinkle" },
      { index: 8, text: "clatter" },
      { index: 9, text: "rumble" }
    ],
    pairs: { 0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9 }
  },

  // ===== EXERCISE 1J: Weather/Nature Verbs =====
  {
    terms: [
      { index: 0, text: "rain lightly" },
      { index: 1, text: "rain very hard" },
      { index: 2, text: "shine brightly (sun)" },
      { index: 3, text: "blow strongly (wind)" },
      { index: 4, text: "flow quickly (water)" },
      { index: 5, text: "move in waves (water)" },
      { index: 6, text: "fall as snow lightly" },
      { index: 7, text: "shake and move (earthquake)" },
      { index: 8, text: "burn with flames" },
      { index: 9, text: "blow in sudden gusts" }
    ],
    definitions: [
      { index: 0, text: "drizzle" },
      { index: 1, text: "pour" },
      { index: 2, text: "blaze" },
      { index: 3, text: "gust" },
      { index: 4, text: "surge" },
      { index: 5, text: "ripple" },
      { index: 6, text: "flutter" },
      { index: 7, text: "tremble" },
      { index: 8, text: "rage" },
      { index: 9, text: "buffet" }
    ],
    pairs: { 0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9 }
  }

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