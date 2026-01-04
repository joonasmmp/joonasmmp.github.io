---
title: "Paljoussanat: yhdistä termit"
date: 2022-6-1
weight: 11
draft: false
type: page
layout: tehtava
---
{{< rawhtml >}}
<link rel="stylesheet" type="text/css" href="/css/yhdistely.css"/>

<div id="tehtava" class="grid grid-cols-2">
  <div><ul id="terms"></ul></div>
  <div><ul id="defs"></ul></div>
</div>

<button id="next" disabled>Seuraava tehtävä</button>
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
        { index: 0, text: "TERM A" },
        { index: 1, text: "TERM B" },
        { index: 2, text: "TERM C" },
        { index: 3, text: "TERM D" },
        { index: 4, text: "TERM E" },
        { index: 5, text: "TERM F" },
        { index: 6, text: "TERM G" },
        { index: 7, text: "TERM H" },
        { index: 8, text: "TERM I" },
        { index: 9, text: "TERM J" }
      ],
      definitions: [
        { index: 0, text: "DEF A" },
        { index: 1, text: "DEF B" },
        { index: 2, text: "DEF C" },
        { index: 3, text: "DEF D" },
        { index: 4, text: "DEF E" },
        { index: 5, text: "DEF F" },
        { index: 6, text: "DEF G" },
        { index: 7, text: "DEF H" },
        { index: 8, text: "DEF I" },
        { index: 9, text: "DEF J" }
      ],
      pairs: { 0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9 }
    },

    {
      terms: Array.from({ length: 10 }, (_, i) => ({ index: i, text: "TERM " + (i + 1) })),
      definitions: Array.from({ length: 10 }, (_, i) => ({ index: i, text: "DEF " + (i + 1) })),
      pairs: { 0:0,1:1,2:2,3:3,4:4,5:5,6:6,7:7,8:8,9:9 }
    }
  ];

  // ===== MUUTTUJAT =====
  var currentTask = 0;
  var selectedTerm = null;
  var selectedDef = null;
  var correctCount = 0;

  var termsContainer = document.querySelector("#terms");
  var defsContainer = document.querySelector("#defs");
  var nextBtn = document.getElementById("next");
  var info = document.getElementById("info");

  // ===== APUTOIMINNOT =====
  function isMatch(termIndex, defIndex) {
    return tehtavat[currentTask].pairs[termIndex] === defIndex;
  }

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  function createListHTML(list, container) {
    container.innerHTML = "";
    list.forEach(item => {
      container.innerHTML +=
        "<li data-index='" + item.index + "'><span>" +
        item.text + "</span></li>";
    });
  }

  function loadTask() {
    selectedTerm = null;
    selectedDef = null;
    correctCount = 0;
    nextBtn.disabled = true;
    info.textContent = "Tehtävä " + (currentTask + 1) + " / " + tehtavat.length;

    var data = tehtavat[currentTask];
    createListHTML(shuffle([...data.terms]), termsContainer);
    createListHTML(shuffle([...data.definitions]), defsContainer);
  }

  // ===== EVENTIT =====
  termsContainer.addEventListener("click", function (e) {
    var target = e.target.parentNode;
    if (target.className === "score") return;

    selectedTerm = Number(target.dataset.index);
    document.querySelectorAll("#terms li").forEach(li => li.removeAttribute("data-selected"));
    target.setAttribute("data-selected", true);
  });

  defsContainer.addEventListener("click", function (e) {
    var target = e.target.parentNode;
    if (target.className === "score") return;

    selectedDef = Number(target.dataset.index);
    document.querySelectorAll("#defs li").forEach(li => li.removeAttribute("data-selected"));
    target.setAttribute("data-selected", true);

    if (selectedTerm !== null) {
      var term = termsContainer.querySelector("[data-index='" + selectedTerm + "']");
      var def = defsContainer.querySelector("[data-index='" + selectedDef + "']");

      if (isMatch(selectedTerm, selectedDef)) {
        term.className = "score";
        def.className = "score";
        correctCount++;

        if (correctCount === tehtavat[currentTask].terms.length) {
          nextBtn.disabled = false;
          info.textContent = "Hienoa! Kaikki oikein 👍";
        }
      }

      term.removeAttribute("data-selected");
      def.removeAttribute("data-selected");
      selectedTerm = null;
      selectedDef = null;
    }
  });

  nextBtn.addEventListener("click", function () {
    currentTask++;
    if (currentTask >= tehtavat.length) {
      info.textContent = "Kaikki tehtävät tehty 🎉";
      nextBtn.disabled = true;
      return;
    }
    loadTask();
  });

  // ===== KÄYNNISTYS =====
  loadTask();
};
</script>
{{< /rawhtml >}}