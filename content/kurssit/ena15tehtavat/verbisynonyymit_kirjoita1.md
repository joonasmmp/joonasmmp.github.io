---
title: "1. Mikä paikan prepositio?"
date: 2022-2-1
weight: 42
draft: false
type: page
layout: tehtava
---

Täydennä annettuja lauseita prepositioilla in/on/at. 

{{< rawhtml >}}

<div class="tehtava">

  <p id="instruction"></p>
  <p id="info"></p>

  <form autocomplete="off">
    <ol id="task-list"></ol>

    <div id="buttonWrapper">
      <input type="submit" id="submit" value="Tarkista vastaukset" />
    </div>

  </form>

  <div class="next-wrapper">
    <button id="next" disabled>Seuraava tehtävä</button>
  </div>

</div>



<script>

var tehtavat = [
  {
    instruction: "Täydennä lauseet oikealla prepositiolla (in / on / at).",
    sentences: [
      "He had a Nicolas Cage poster hanging ___ the wall.",
      "Let's meet ___ the corner of Kauppurienkatu and Ratakatu.",
      "Is that man with his hands ___ his pockets following us?",
      "Which page is this exercise ___?",
      "I live ___ the first floor, welcome!",
      "I wish I lived ___ the countryside.",
      "___ the border I started having second thoughts.",
      "That spooky house ___ the end of the road.",
      "You can see stars ___ the night sky.",
      "He had to sit ___ the floor."
    ],
    answers: ["on","at","in","on","on","in","at","at","in","on"]
  },
  {
    instruction: "Täydennä lauseet oikealla prepositiolla (in / on / at).",
    sentences: [
      "She arrived ___ the airport early.",
      "I left my keys ___ the table.",
      "They live ___ Helsinki.",
      "Meet me ___ noon.",
      "There’s a cat ___ the roof.",
      "He works ___ an office.",
      "We met ___ the bus stop.",
      "The painting is ___ the wall.",
      "She sat ___ the chair.",
      "He was born ___ 1999."
    ],
    answers: ["at","on","in","at","on","in","at","on","on","in"]
  }
];

let currentTask = 0;
let checkedOnce = false;

const ol = document.getElementById("task-list");
const form = document.querySelector("form");
const nextBtn = document.getElementById("next");
const info = document.getElementById("info");
const instructionEl = document.getElementById("instruction");

function loadTask() {
  checkedOnce = false;
  ol.innerHTML = "";
  nextBtn.disabled = true;
  nextBtn.style.display = "inline-block";

  const task = tehtavat[currentTask];
  instructionEl.textContent = task.instruction;
  info.textContent = "Tehtävä " + (currentTask + 1) + " / " + tehtavat.length;

  task.sentences.forEach((sentence, i) => {
    const li = document.createElement("li");
    const section = document.createElement("section");
    const parts = sentence.split("___");

    section.appendChild(document.createTextNode(parts[0]));

    const input = document.createElement("input");
    input.type = "text";
    input.id = "q" + i;
    li.appendChild(section);
    section.appendChild(input);

    const span = document.createElement("span");
    section.appendChild(span);

    section.appendChild(document.createTextNode(parts[1]));

    li.appendChild(section);
    ol.appendChild(li);
  });

  enableSmartResize();
}

function enableSmartResize() {
  const measure = document.createElement("span");
  measure.style.position = "absolute";
  measure.style.left = "-9999px";
  measure.style.whiteSpace = "pre";
  document.body.appendChild(measure);

  document.querySelectorAll(".tehtava input[type=text]").forEach(input => {
    const span = input.nextElementSibling;

    input.addEventListener("input", function () {
      // Poista väri kirjoitettaessa
      if (checkedOnce) {
        const li = this.closest("li");
        li.classList.remove("oikein", "vaarin");
      }

      // Älykäs resize
      measure.textContent = this.value || "";
      if (measure.offsetWidth > this.offsetWidth) {
        this.style.width = measure.offsetWidth + "px";
      }
    });
  });
}

function checkAnswers() {
  checkedOnce = true;
  let correct = 0;
  const task = tehtavat[currentTask];

  task.answers.forEach((ans, i) => {
    const input = document.getElementById("q" + i);
    const li = input.closest("li");

    li.classList.remove("oikein", "vaarin");

    if (input.value.trim() === "") return; // tyhjä ei muuta väriä

    if (input.value.toLowerCase().trim() === ans) {
      li.classList.add("oikein");
      correct++;
    } else {
      li.classList.add("vaarin");
    }
  });

  if (correct === task.answers.length) {
    if (currentTask === tehtavat.length - 1) {
      info.textContent = "Kaikki tehtävät tehty 🎉";
      nextBtn.style.display = "none";
    } else {
      info.textContent = "Hienoa! Kaikki oikein 👍";
      nextBtn.disabled = false;
    }
  }
}

// Estä sivun lataaminen ja tarkista vastaukset
form.addEventListener("submit", function(e) {
  e.preventDefault();
  checkAnswers();
});

// Seuraava tehtävä
nextBtn.addEventListener("click", function() {
  currentTask++;
  loadTask();
});

// Lataa ensimmäinen tehtävä
loadTask();
</script>

<style>
.instruction {
  font-size: 1.1rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 0.8rem;
  padding: 0.6rem 1rem;
  background: #f1f5f9;
  border-left: 4px solid #2563eb;
  border-radius: 4px;
}

.task-info {
  text-align: center;
  font-weight: 600;
  margin-bottom: 1rem;
}

.next-wrapper {
  display: flex;
  justify-content: center;
  margin: 2rem 0;
}

#next {
  padding: 0.7rem 2rem;
  font-size: 1.05rem;
  border-radius: 6px;
  border: none;
  background-color: #ccc;
  color: #666;
  cursor: not-allowed;
  transition: all 0.3s ease;
}

#next:not(:disabled) {
  background-color: #00a86b;
  color: #fff;
  cursor: pointer;
}

#next:not(:disabled):hover {
  background-color: #1d4ed8;
}

.tehtava form::after {
  content: "";
  display: block;
  clear: both;
}

</style>

</rawhtml>

