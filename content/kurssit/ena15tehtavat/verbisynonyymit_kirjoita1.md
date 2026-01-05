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
  }
];

let currentTask = 0;
const ol = document.getElementById("task-list");
const form = document.querySelector("form");
const nextBtn = document.getElementById("next");
const info = document.getElementById("info");
const instructionEl = document.getElementById("instruction");

function loadTask() {
  ol.innerHTML = "";
  nextBtn.disabled = true;

  instructionEl.textContent = tehtavat[currentTask].instruction;
  info.textContent = "Tehtävä " + (currentTask + 1) + " / " + tehtavat.length;

  tehtavat[currentTask].sentences.forEach((sentence, i) => {
    const section = document.createElement("section");
    section.innerHTML = sentence.replace(
      "___",
      `<li><input type="text" id="q${i}"/><span></span></li>`
    );
    ol.appendChild(section);
  });

  enableSmartResize();
}

function checkAnswers() {
  let correct = 0;

  tehtavat[currentTask].answers.forEach((ans, i) => {
    const input = document.getElementById("q" + i);
    const li = input.parentElement;

    li.classList.remove("oikein", "vaarin");

    if (input.value.trim() === "") {
      li.classList.add("vaarin");
      return;
    }

    if (input.value.toLowerCase().trim() === ans) {
      li.classList.add("oikein");
      correct++;
    } else {
      li.classList.add("vaarin");
    }
  });

  if (correct === tehtavat[currentTask].answers.length) {
    if (currentTask === tehtavat.length - 1) {
      info.textContent = "Kaikki tehtävät tehty 🎉";
      nextBtn.style.display = "none";
    } else {
      info.textContent = "Hienoa! Kaikki oikein 👍";
      nextBtn.disabled = false;
    }
  }
}

form.addEventListener("submit", function (e) {
  e.preventDefault();
  checkAnswers();
});

nextBtn.addEventListener("click", function () {
  currentTask++;
  loadTask();
});

/* ========= LEVEYDEN HALLINTA ========= */
function enableSmartResize() {
  document.querySelectorAll(".tehtava input[type=text]").forEach(input => {
    const span = input.nextElementSibling;

    input.addEventListener("input", function () {
      span.textContent = this.value || "";

      if (span.offsetWidth > this.offsetWidth) {
        this.style.width = span.offsetWidth + "px";
      }
    });
  });
}

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
</style>

</rawhtml>

