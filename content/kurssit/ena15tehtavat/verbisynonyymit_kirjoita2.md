---
title: "Verbisynonyymit: Kirjoita 2"
date: 2022-2-1
weight: 42
draft: false
type: page
layout: tehtava
---
{{< rawhtml >}}

Choose one of the ten topics below and write a short story of at least 300 characters. Use the idioms, adjectives and verbs you've learned today. Avoid adjectives such as good, bad, happy, angry and verbs like walk, go, say, look, get and take. 

1. You overslept and need to rush to school for an important exam.

2. You're at a family dinner and an argument breaks out between two relatives.

3. You're home alone at night and hear a strange noise downstairs.

4. You're waiting for important exam results and finally receive them.

5. You're trying to cook dinner but everything goes wrong.

6. You witness a minor car accident on the street.

7. You're lost in a new city and trying to find your way back to your hotel.

8. Your best friend tells you some shocking news at lunch.

9. You're on a first date at a restaurant and it's going badly.

10. You find a lost puppy in the park and try to help it.


<div class="tehtava">

  <textarea
    id="story"
    rows="10"
    placeholder="Aloita tarinasi tästä..."
  ></textarea>

  <p id="counter">0 / 300 merkkiä</p>

</div>


<script>
const textarea = document.getElementById("story");
const counter = document.getElementById("counter");
const LIMIT = 300;

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

#hello{
  background: url(/img/kansikuvat/kurssivalikot/kirjoitateht.jpg);
  border-radius: 0.5rem 0.5rem 0rem 0rem;
}

#hello h {
  font-size: 2.5em!important;
}

</style>

</rawhtml>

