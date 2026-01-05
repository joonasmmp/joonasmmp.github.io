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
const tehtavat = [
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

  const task = tehtavat[currentTask];
  instructionEl.textContent = task.instruction;
  info.textContent = `Tehtävä ${currentTask + 1} / ${tehtavat.length}`;

  task.sentences.forEach((sentence, i) => {
    const li = document.createElement("li");
    const parts = sentence.split("___");

    li.innerHTML = `
      ${parts[0]}
      <input type="text" id="q${i}" autocomplete="off">
      ${parts[1]}
    `;

    ol.appendChild(li);
  });

  attachInputListeners();
}

function attachInputListeners() {
  document.querySelectorAll("#task-list input").forEach(input => {
    input.addEventListener("input", () => {
      if (checkedOnce) {
        input.classList.remove("oikein", "vaarin");
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
    input.classList.remove("oikein", "vaarin");

    if (input.value.trim() === "") return;

    if (input.value.toLowerCase().trim() === ans) {
      input.classList.add("oikein");
      correct++;
    } else {
      input.classList.add("vaarin");
    }
  });

  if (correct === task.answers.length) {
    info.textContent = "Hienoa! Kaikki oikein 👍";
    nextBtn.disabled = false;
  }
}

form.addEventListener("submit", e => {
  e.preventDefault(); // 🔴 TÄMÄ ESTÄÄ SIVUN PÄIVITYKSEN
  checkAnswers();
});

nextBtn.addEventListener("click", () => {
  currentTask++;
  loadTask();
});

loadTask();
</script>

<style>
#task-list {
  list-style: decimal;
  padding-left: 1.5rem;
}

#task-list li {
  margin-bottom: 0.8rem;
}

#task-list input {
  min-width: 3ch;
  padding: 0.2rem 0.4rem;
  border: 2px solid #ccc;
  border-radius: 4px;
  font-size: 1rem;
  margin: 0 0.3rem;
  transition: background 0.2s, border 0.2s;
}

/* OIKEIN */
#task-list input.oikein {
  background: #dcfce7;
  border-color: #16a34a;
}

.dark #task-list input.oikein {
  background: #dcfce7;
  border-color: #16a34a;
  color: #374151;
}


/* VÄÄRIN */
#task-list input.vaarin {
  background: #fee2e2;
  border-color: #dc2626;
}

.dark #task-list input.vaarin {
  background: #fee2e2;
  border-color: #dc2626;
  color: #374151;
}

/* Ohjeteksti */
#instruction {
  font-weight: 500;
  margin-bottom: 0.5rem;
  text-align: center;
}

/* Tehtävä x/y */
#info {
  text-align: center;
  font-weight: 600;
  margin-bottom: 1rem;
}

/* Seuraava-nappi */
.next-wrapper {
  display: flex;
  justify-content: center;
  margin-top: 2rem;
}

#next {
  padding: 0.6rem 1.8rem;
  border-radius: 6px;
  border: none;
  background: #e9e9e9;
  color: #555;
}

.dark #next {
  background: #292929;
  color: ##1a1a1a;
}

#next:not(:disabled) {
  background: #16a34a;
  color: #fff;
  cursor: pointer;
}

/* ===== Tarkista vastaukset -painike ===== */

#buttonWrapper {
  display: flex;
  justify-content: center;
  margin-top: 1.5rem;
}

#submit {
  padding: 0.7rem 2.2rem;
  font-size: 1.05rem;
  font-weight: 600;
  border-radius: 999px; /* pillimäinen */
  border: none;
  background: linear-gradient(135deg, #93c5fd, #1d4ed8);
  color: #ffffff;
  cursor: pointer;
  box-shadow: 0 6px 16px rgba(37, 99, 235, 0.25);
  transition: all 0.25s ease;
}

/* Hover */
#submit:hover {
  transform: translateY(-1px);
  box-shadow: 0 10px 22px rgba(37, 99, 235, 0.35);
}

/* Active (klikattaessa) */
#submit:active {
  transform: translateY(0);
  box-shadow: 0 4px 10px rgba(37, 99, 235, 0.25);
}

/* Focus (näppäimistö) */
#submit:focus-visible {
  outline: 3px solid #93c5fd;
  outline-offset: 3px;
}

/* Dark mode */
.dark #submit {
  background: linear-gradient(135deg, #0076AI, #2563eb);
  box-shadow: 0 6px 16px rgba(59, 130, 246, 0.35);
}

/* ===== DARK MODE KORJAUS: tehtävän inputit ===== */

.dark .tehtava input[type="text"] {
  background-color: #1E2022;
  color: #FFFFFF;
  border-bottom: 1px solid #FFFFFF;
}


</style>

</rawhtml>

