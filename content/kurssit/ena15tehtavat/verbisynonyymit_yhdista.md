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

  /* ===============================
     MUUTTUJAT
     =============================== */

  var currentTask = 0;
  var selectedTerm = null;
  var selectedDef = null;
  var correctCount = 0;
  var numero = 0; // order-laskuri oikein yhdistetyille

  var termsContainer = document.getElementById("terms");
  var defsContainer = document.getElementById("defs");
  var nextBtn = document.getElementById("next");
  var info = document.getElementById("info");

  /* ===============================
     APUTOIMINNOT
     =============================== */

  function isMatch(termIndex, defIndex) {
    return tehtavat[currentTask].pairs[termIndex] === defIndex;
  }

  function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;
    while (currentIndex !== 0) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }
    return array;
  }

  function createListHTML(list, container) {
    container.innerHTML = "";
    for (var i = 0; i < list.length; i++) {
      container.innerHTML +=
        "<li data-index='" + list[i].index + "'>" +
        "<span>" + list[i].text + "</span></li>";
    }
  }

  function loadTask() {
    selectedTerm = null;
    selectedDef = null;
    correctCount = 0;
    numero = 0;
    nextBtn.disabled = true;

    info.textContent =
      "Tehtävä " + (currentTask + 1) + " / " + tehtavat.length;

    var data = tehtavat[currentTask];
    createListHTML(shuffle([...data.terms]), termsContainer);
    createListHTML(shuffle([...data.definitions]), defsContainer);
  }

  /* ===============================
     EVENTIT
     =============================== */

  termsContainer.addEventListener("click", function (e) {
    var target = e.target.parentNode;
    if (!target || target.className === "score") return;

    document
      .querySelectorAll("#terms li")
      .forEach(li => li.removeAttribute("data-selected"));

    selectedTerm = Number(target.getAttribute("data-index"));
    target.setAttribute("data-selected", true);
  });

  defsContainer.addEventListener("click", function (e) {
    var target = e.target.parentNode;
    if (!target || target.className === "score") return;

    document
      .querySelectorAll("#defs li")
      .forEach(li => li.removeAttribute("data-selected"));

    selectedDef = Number(target.getAttribute("data-index"));
    target.setAttribute("data-selected", true);

    if (selectedTerm !== null && selectedDef !== null) {
      var term = termsContainer.querySelector(
        "[data-index='" + selectedTerm + "']"
      );
      var def = defsContainer.querySelector(
        "[data-index='" + selectedDef + "']"
      );

      if (isMatch(selectedTerm, selectedDef)) {
        term.className = "score";
        def.className = "score";

        numero++;
        term.style.order = numero;
        def.style.order = numero;

        correctCount++;

        if (correctCount === tehtavat[currentTask].terms.length) {
          nextBtn.disabled = false;
          info.textContent = "Hienoa! Kaikki parit oikein 👍";
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

  /* ===============================
     KÄYNNISTYS
     =============================== */

  loadTask();
};
</script>

<style>
  .next-wrapper {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

/* Perustila */
#next {
  padding: 0.8rem 2.2rem;
  font-size: 1.1rem;
  font-weight: 600;
  border-radius: 6px;
  border: none;
  background-color: #ccc;
  color: #666;
  cursor: not-allowed;
  transition: all 0.3s ease;
}

/* Aktiivinen tila */
#next:not(:disabled) {
  background-color: #2563eb; /* sininen */
  color: #fff;
  cursor: pointer;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
}

/* Hover vain kun aktiivinen */
#next:not(:disabled):hover {
  background-color: #1d4ed8;
  transform: translateY(-2px);
}

/* Pieni painallusefekti */
#next:not(:disabled):active {
  transform: translateY(0);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.2);
}
</style>

{{< /rawhtml >}}