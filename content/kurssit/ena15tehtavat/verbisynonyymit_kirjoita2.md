---
title: "Verbisynonyymit: Kirjoita 2"
date: 2022-2-1
weight: 42
draft: false
type: page
layout: tehtava
---
{{< rawhtml >}}

<div class="tehtava">

  <p class="instruction">
    Kirjoita lyhyt tarina. Kun tekstissä on vähintään 500 merkkiä, tehtävä on valmis.
  </p>

  <textarea
    id="story"
    rows="10"
    placeholder="Aloita tarinasi tästä..."
  ></textarea>

  <p id="counter">0 / 500 merkkiä</p>

</div>


<script>
const textarea = document.getElementById("story");
const counter = document.getElementById("counter");
const LIMIT = 500;

textarea.addEventListener("input", function () {
  const length = this.value.length;
  counter.textContent = length + " / " + LIMIT + " merkkiä";

  this.classList.remove("ready");

  if (length >= LIMIT) {
    this.classList.add("ready");
  }
});
</script>

<style>

/* ===== ISO TEKSTIBOKSI ===== */

.tehtava textarea {
  width: 100%;
  max-width: 100%;
  min-height: 220px;
  padding: 0.75rem;
  font-size: 1rem;
  font-family: inherit;
  line-height: 1.6;

  border: 1px solid #d4d4d4;
  border-radius: 6px;
  background-color: #fafafa;
  resize: vertical;

  transition: border-color 0.3s ease, background-color 0.3s ease;
}

/* Valmis-tila (≥ 500 merkkiä) */
.tehtava textarea.ready {
  border-color: #299617;
  background-color: #ecfdf3;
}

/* Merkkilaskuri */
#counter {
  text-align: center;
  margin-top: 0.6rem;
  font-weight: 500;
  color: #555;
}

/* ===== DARK MODE ===== */

.dark .tehtava textarea {
  background-color: #1E2022;
  color: #FFFFFF;
  border: 1px solid #181a1b;
}

.dark .tehtava textarea.ready {
  background-color: #0f2f1d;
  border-color: #4ade80;
}

.dark #counter {
  color: #cbd5e1;
}

</style>

</rawhtml>

