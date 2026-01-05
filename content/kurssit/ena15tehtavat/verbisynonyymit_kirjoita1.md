---
title: "Verbisynonyymit: Kirjoita"
date: 2022-2-1
weight: 42
draft: false
type: page
layout: tehtava
---
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
    instruction: "Replace the underlined phrases with a strong verb from the following: creep, limp, storm, tiptoe, dart, stroll, wander, march.",
    sentences: [
      "The angry manager ___ out of the meeting. (walked quickly and angrily)",
      "The children ___ past their sleeping father. (walked quietly on their toes)",
      "The mouse ___ across the kitchen floor. (moved quickly)",
      "On Sunday afternoon, we ___ through the park. (walked in a relaxed way)",
      "The injured player ___ off the field. (walked with difficulty)",
      "The soldiers ___ toward the parade ground. (walked in formation)",
      "The burglar ___ through the dark house. (moved quietly and carefully)",
      "The tourists ___ around the old city. (walked without a clear direction)"
    ],
    answers: [
      "stormed",
      "tiptoed",
      "darted",
      "strolled",
      "limped",
      "marched",
      "crept",
      "wandered"
    ]
  },

  {
    instruction: "Replace 'said' with a more descriptive verb. Consider the emotion and manner of speaking. Use the following verbs: enquire, retort, stammer, whisper, bellow, declare, announce, sneer.",
    sentences: [
      "\"Please don't go,\" he ___ (said quietly).",
      "\"The answer is obviously 67,\" the teacher ___ (said firmly).",
      "\"That's not true at all!\" Maria ___ (said in response).",
      "\"I... I don't know what to say,\" Tom ___  (said nervously).",
      "\"Get out of my house!\" Mr. Brown ___ (said very loudly).",
      "\"Well, actually, I think you're wrong,\" she ___  (said smugly).",
      "\"The meeting starts at 3 PM,\" the secretary ___ (said officially).",
      "\"Could you possibly help me?\" she ___ (asked politely)."
    ],
    answers: [
      "whispered",
      "declared",
      "retorted",
      "stammered",
      "bellowed",
      "sneered",
      "announced",
      "enquired"
    ]
  },

  {
    instruction: "Instead of using an adjective + verb, use a powerful verb that shows the emotion or manner. Use following verbs: glide, stomp, snatch, devour, glare, flee, sob, chuckle.",
    sentences: [
      "She ___ at him after his comments (looked angrily).",
      "He ___ his lunch (ate hungrily).",
      "They ___ the venue after the ceremony (leave quickly)",
      "She ___ the money (took quickly).",
      "After the lesson the teached ___ in the empty classroom (cried quietly).",
      "James ___ up the stairs (walked heavily).",
      "The students ___ when the teacher made a mistake (laughed quietly).",
      "Late for class, Jorma ___ down the stairs (moved gracefully and effortlessly).",
    ],
    answers: [
      "glared",
      "devoured",
      "fled",
      "snatched",
      "sobbed",
      "stomped",
      "chuckled",
      "glided",
    ]
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
  enableSmartResize();
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

  tehtavat[currentTask].answers.forEach((ans, i) => {
    const input = document.getElementById("q" + i);
    const li = input.closest("li");

    li.classList.remove("oikein", "vaarin");

    if (input.value.trim() === "") return; // tyhjä ei saa väriä

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

      // Piilota seuraava-nappi
      nextBtn.style.display = "none";

      // Lisää automaattinen hyperlinkki
      const finishedMsg = document.createElement("p");
      finishedMsg.style.textAlign = "center";
      finishedMsg.style.fontWeight = "600";
      finishedMsg.style.marginTop = "1.5rem";
      finishedMsg.innerHTML =
        'Hienoa! <a href="https://joonasmmp.github.io/kurssit/ena15tehtavat/verbisynonyymit_kirjoita2/">Siirry seuraavaan tehtävään</a>';

      nextBtn.parentNode.appendChild(finishedMsg);

    } else {
      info.textContent = "Hienoa! Kaikki oikein 👍";
      nextBtn.disabled = false;
    }
  }
}

form.addEventListener("submit", e => {
  e.preventDefault(); // 🔴 TÄMÄ ESTÄÄ SIVUN PÄIVITYKSEN
  checkAnswers();
});

nextBtn.addEventListener("click", function () {
  currentTask++;

  if (currentTask >= tehtavat.length) {
    // Poistetaan nappi
    nextBtn.style.display = "none";

    // Luodaan teksti hyperlinkillä
    const finishedMsg = document.createElement("p");
    finishedMsg.style.textAlign = "center";
    finishedMsg.style.fontWeight = "600";
    finishedMsg.style.marginTop = "1.5rem";

    finishedMsg.innerHTML =
      'Kaikki tehtävät tehty! <a href="https://joonasmmp.github.io/kurssit/ena15tehtavat/verbisynonyymit_kirjoita2/" target="_blank">Siirry seuraavaan tehtävään</a>';

    nextBtn.parentNode.appendChild(finishedMsg);

    return; // Ei ladata uutta tehtävää
  }

  // Muuten ladataan seuraava tehtävä
  loadTask();
});

function enableSmartResize() {
  const measure = document.createElement("span");
  measure.style.position = "absolute";
  measure.style.left = "-9999px";
  measure.style.whiteSpace = "pre";
  measure.style.fontSize = "inherit";
  measure.style.fontFamily = "inherit";

  document.body.appendChild(measure);

  document.querySelectorAll(".tehtava input[type='text']").forEach(input => {
    const startWidth = input.offsetWidth;

    input.addEventListener("input", function () {
      measure.textContent = this.value || "";
      const neededWidth = measure.offsetWidth + 10;

      if (neededWidth > this.offsetWidth) {
        this.style.width = neededWidth + "px";
      }
    });
  });
}

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
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg, #4c545f, #1F2937);
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

#hello{
  background: url(/img/kansikuvat/kurssivalikot/kirjoitateht.jpg);
  border-radius: 0.5rem 0.5rem 0rem 0rem;
}

#hello h {
  font-size: 2.5em!important;
}

</style>

</rawhtml>

