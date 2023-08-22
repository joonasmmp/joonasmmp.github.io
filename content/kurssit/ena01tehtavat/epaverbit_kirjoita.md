---
title: "Täydennä kolmas muoto"
date: 2023-5-28
draft: false
type: page
layout: tehtava
---

Täydennä kolmas muoto annetusta verbistä. Kun vastaat oikein, verbien lista täydentyy.

{{< rawhtml >}}
<div id="tehtava">    
  <div id="verb-list"></div>

  <div id="exercise">
    <div class="verb-container">
>
      <div class="verb">go</div>
      <input type="text" class="answer" placeholder="third form">
      <button class="check-btn">Check</button>
    </div>
  </div>
</div>

<style>
.verb-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 0.5em;
}

div#tehtava {
  padding-left: 4em;
}

.verb {
  margin-right: 5px;
}

.verb-list {
  margin-right: 5px;
}

input {
  padding: 5px;
  margin-right: 5px;
  margin-left: 0.7em;
  width: 7em;
}

.dark input{
  background-color: #181A1B;
  padding: 5px;
  margin-right: 5px;
  margin-left: 0.7em;
  width: 7em;
}

.check-btn {
  padding: 5px 10px;
  color: white;
  border: none;
  cursor: pointer;
  background-color: #1F2937;
  border-radius: 5px;
}

.check-btn:hover {
  background-color: #45a049;
}

.result {
  margin-top: 10px;
  font-weight: bold;
}

.success {
  color: green;
}

.failure {
  color: red;
}

.content p {
  padding-top: 1.5rem;
}

#hello{
    background: url(/img/kansikuvat/kurssivalikot/kirjoita2.jpg)
}
  
#hello h {
    font-size: 2.5em!important;
}

</style>

<script>
 window.addEventListener('DOMContentLoaded', (event) => {
  const verbs = [
  { baseForm: 'be', secondForm: 'was/were', thirdForms: ['been'] },
  { baseForm: 'have', secondForm: 'had', thirdForms: ['had'] },
  { baseForm: 'do', secondForm: 'did', thirdForms: ['done'] },
  { baseForm: 'say', secondForm: 'said', thirdForms: ['said'] },
  { baseForm: 'go', secondForm: 'went', thirdForms: ['gone'] },
  { baseForm: 'get', secondForm: 'got', thirdForms: ['got', 'gotten'] },
  { baseForm: 'make', secondForm: 'made', thirdForms: ['made'] },
  { baseForm: 'know', secondForm: 'knew', thirdForms: ['known'] },
  { baseForm: 'see', secondForm: 'saw', thirdForms: ['seen'] },
  { baseForm: 'come', secondForm: 'came', thirdForms: ['come'] },
  { baseForm: 'think', secondForm: 'thought', thirdForms: ['thought'] },
  { baseForm: 'take', secondForm: 'took', thirdForms: ['taken'] },
  { baseForm: 'find', secondForm: 'found', thirdForms: ['found'] },
  { baseForm: 'give', secondForm: 'gave', thirdForms: ['given'] },
  { baseForm: 'tell', secondForm: 'told', thirdForms: ['told'] },
  { baseForm: 'feel', secondForm: 'felt', thirdForms: ['felt'] },
  { baseForm: 'become', secondForm: 'became', thirdForms: ['become'] },
  { baseForm: 'leave', secondForm: 'left', thirdForms: ['left'] },
  { baseForm: 'put', secondForm: 'put', thirdForms: ['put'] },
  { baseForm: 'bring', secondForm: 'brought', thirdForms: ['brought'] },
  { baseForm: 'begin', secondForm: 'began', thirdForms: ['begun'] },
  { baseForm: 'keep', secondForm: 'kept', thirdForms: ['kept'] },
  { baseForm: 'hold', secondForm: 'held', thirdForms: ['held'] },
  { baseForm: 'write', secondForm: 'wrote', thirdForms: ['written'] },
  { baseForm: 'stand', secondForm: 'stood', thirdForms: ['stood'] },
  { baseForm: 'hear', secondForm: 'heard', thirdForms: ['heard'] },
  { baseForm: 'let', secondForm: 'let', thirdForms: ['let'] },
  { baseForm: 'mean', secondForm: 'meant', thirdForms: ['meant'] },
  { baseForm: 'set', secondForm: 'set', thirdForms: ['set'] },
  { baseForm: 'meet', secondForm: 'met', thirdForms: ['met'] },
  { baseForm: 'run', secondForm: 'ran', thirdForms: ['run'] },
  { baseForm: 'pay', secondForm: 'paid', thirdForms: ['paid'] },
  { baseForm: 'sit', secondForm: 'sat', thirdForms: ['sat'] },
  { baseForm: 'rise', secondForm: 'rose', thirdForms: ['risen'] },
  { baseForm: 'break', secondForm: 'broke', thirdForms: ['broken'] },
  { baseForm: 'choose', secondForm: 'chose', thirdForms: ['chosen'] },
  { baseForm: 'drive', secondForm: 'drove', thirdForms: ['driven'] },
  { baseForm: 'forget', secondForm: 'forgot', thirdForms: ['forgotten'] },
  { baseForm: 'freeze', secondForm: 'froze', thirdForms: ['frozen'] },
  { baseForm: 'hide', secondForm: 'hid', thirdForms: ['hidden'] },
  { baseForm: 'lose', secondForm: 'lost', thirdForms: ['lost'] },
  { baseForm: 'wake', secondForm: 'woke', thirdForms: ['woken'] },
  { baseForm: 'wear', secondForm: 'wore', thirdForms: ['worn'] },
  { baseForm: 'blow', secondForm: 'blew', thirdForms: ['blown'] },
  { baseForm: 'draw', secondForm: 'drew', thirdForms: ['drawn'] },
  { baseForm: 'fly', secondForm: 'flew', thirdForms: ['flown'] },
  { baseForm: 'grow', secondForm: 'grew', thirdForms: ['grown'] },
  { baseForm: 'throw', secondForm: 'threw', thirdForms: ['thrown'] },
  { baseForm: 'sing', secondForm: 'sang', thirdForms: ['sung'] },
  { baseForm: 'speak', secondForm: 'spoke', thirdForms: ['spoken'] },
  { baseForm: 'swim', secondForm: 'swam', thirdForms: ['swum'] },
  { baseForm: 'win', secondForm: 'won', thirdForms: ['won'] },
  { baseForm: 'arise', secondForm: 'arose', thirdForms: ['arisen'] },
  { baseForm: 'bear', secondForm: 'bore', thirdForms: ['born'] },
  { baseForm: 'bend', secondForm: 'bent', thirdForms: ['bent'] },
  { baseForm: 'bet', secondForm: 'bet', thirdForms: ['bet'] },
  { baseForm: 'bind', secondForm: 'bound', thirdForms: ['bound'] },
  { baseForm: 'bite', secondForm: 'bit', thirdForms: ['bitten', 'bit'] },
  { baseForm: 'bleed', secondForm: 'bled', thirdForms: ['bled'] },
  { baseForm: 'breed', secondForm: 'bred', thirdForms: ['bred'] },
  { baseForm: 'build', secondForm: 'built', thirdForms: ['built'] },
  { baseForm: 'burn', secondForm: 'burned/burnt', thirdForms: ['burned', 'burnt'] },
  { baseForm: 'burst', secondForm: 'burst', thirdForms: ['burst'] },
  { baseForm: 'buy', secondForm: 'bought', thirdForms: ['bought'] },
  { baseForm: 'cast', secondForm: 'cast', thirdForms: ['cast'] },
  { baseForm: 'catch', secondForm: 'caught', thirdForms: ['caught'] },
  { baseForm: 'cost', secondForm: 'cost', thirdForms: ['cost'] },
  { baseForm: 'cut', secondForm: 'cut', thirdForms: ['cut'] },
  { baseForm: 'deal', secondForm: 'dealt', thirdForms: ['dealt'] },
  { baseForm: 'dig', secondForm: 'dug', thirdForms: ['dug'] },
  { baseForm: 'dream', secondForm: 'dreamed/dreamt', thirdForms: ['dreamed', 'dreamt'] },
  { baseForm: 'drink', secondForm: 'drank', thirdForms: ['drunk'] },
  { baseForm: 'fall', secondForm: 'fell', thirdForms: ['fallen'] },
  { baseForm: 'feel', secondForm: 'felt', thirdForms: ['felt'] },
  { baseForm: 'fight', secondForm: 'fought', thirdForms: ['fought'] },
  { baseForm: 'fit', secondForm: 'fit/fitted', thirdForms: ['fit', 'fitted'] },
  { baseForm: 'flee', secondForm: 'fled', thirdForms: ['fled'] },
  { baseForm: 'fling', secondForm: 'flung', thirdForms: ['flung'] },
  { baseForm: 'forgive', secondForm: 'forgave', thirdForms: ['forgiven'] },
  { baseForm: 'grind', secondForm: 'ground', thirdForms: ['ground'] },
  { baseForm: 'hang', secondForm: 'hung', thirdForms: ['hung'] },
  { baseForm: 'hit', secondForm: 'hit', thirdForms: ['hit'] },
  { baseForm: 'hurt', secondForm: 'hurt', thirdForms: ['hurt'] },
  { baseForm: 'kneel', secondForm: 'kneeled/kneelt', thirdForms: ['kneeled', 'knelt'] },
  { baseForm: 'knit', secondForm: 'knit/knitted', thirdForms: ['knit', 'knitted'] },
  { baseForm: 'lay', secondForm: 'laid', thirdForms: ['laid'] },
  { baseForm: 'lean', secondForm: 'leaned/leant', thirdForms: ['leaned', 'leant'] },
  { baseForm: 'learn', secondForm: 'learned/learnt', thirdForms: ['learned', 'learnt'] },
  { baseForm: 'lend', secondForm: 'lent', thirdForms: ['lent'] },
  { baseForm: 'lie', secondForm: 'lay', thirdForms: ['lain'] },
  { baseForm: 'quit', secondForm: 'quit', thirdForms: ['quit'] },
  { baseForm: 'read', secondForm: 'read', thirdForms: ['read'] },
  { baseForm: 'ride', secondForm: 'rode', thirdForms: ['ridden'] },
  { baseForm: 'ring', secondForm: 'rang', thirdForms: ['rung'] },
  { baseForm: 'seek', secondForm: 'sought', thirdForms: ['sought'] },
  { baseForm: 'sell', secondForm: 'sold', thirdForms: ['sold'] },
  { baseForm: 'send', secondForm: 'sent', thirdForms: ['sent'] },
  ];

 const exercise = document.getElementById('exercise');
  const verbList = document.getElementById('verb-list');
  let currentIndex = 0;

  renderVerb();

  function renderVerb() {
    exercise.innerHTML = '';

    const verbContainer = document.createElement('div');
    verbContainer.classList.add('verb-container');

    const verb = document.createElement('div');
    verb.classList.add('verb');
    verb.textContent = verbs[currentIndex].baseForm;

    const secondForm = document.createElement('div');
    secondForm.classList.add('second-form');
    secondForm.textContent = `${verbs[currentIndex].secondForm}`;

    const answer = document.createElement('input');
    answer.classList.add('answer');
    answer.placeholder = 'third form';
    answer.addEventListener('keypress', (event) => {
      if (event.key === 'Enter') {
        checkAnswer(answer);
      }
    });

    const checkButton = document.createElement('button');
    checkButton.classList.add('check-btn');
    checkButton.textContent = 'Check';
    checkButton.addEventListener('click', () => {
      checkAnswer(answer);
    });

    verbContainer.appendChild(verb);
    verbContainer.appendChild(secondForm);
    verbContainer.appendChild(answer);
    verbContainer.appendChild(checkButton);

    exercise.appendChild(verbContainer);

    answer.focus();
  }

  function checkAnswer(answerInput) {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const expectedAnswer = verbs[currentIndex].thirdForms;

    if (expectedAnswer.includes(userAnswer)) {
      const verbListItem = document.createElement('div');
      verbListItem.textContent = `${verbs[currentIndex].baseForm} - ${verbs[currentIndex].secondForm} - ${verbs[currentIndex].thirdForms.join(', ')}`;
      verbList.appendChild(verbListItem);

      currentIndex++;

      if (currentIndex < verbs.length) {
        renderVerb();
      } else {
        showFinalResult();
      }
    } else {
      answerInput.value = '';
      answerInput.placeholder = 'Incorrect.';
      answerInput.focus();
    }
  }

  function showFinalResult() {
    exercise.innerHTML = '';

    const finalResult = document.createElement('div');
    finalResult.classList.add('result');

    const correctCount = currentIndex;
    const totalCount = verbs.length;

    finalResult.textContent = `Kaikki ${totalCount} kohtaa oikein! Ei huono!`;
    exercise.appendChild(finalResult);
  }
});
  </script>
{{< /rawhtml >}}