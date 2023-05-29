---
title: "Täydennä kolmas muoto"
date: 2023-5-28
draft: false
type: page
layout: tehtava
---

Täydennä kolmas muoto annetusta verbistä. Kun vastaat oikein, verbien lista täydentyy.

{{< rawhtml >}}
<!DOCTYPE html>
<html>
<head>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
     
  <div id="verb-list"></div>

  <div id="exercise">
    <div class="verb-container">
>
      <div class="verb">go</div>
      <input type="text" class="answer" placeholder="Enter the third form">
      <button class="check-btn">Check</button>
    </div>

    <!-- Add more verb containers here -->
  </div>
      
  <script src="script.js"></script>
</body>
</html>

<style>
.verb-container {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  margin-top: 0.5em;
}

.verb {
  padding: 5px;
  margin-right: 5px;
}

.answer {
  padding: 5px;
  margin-right: 5px;
  margin-left: 0.7em;
}

.check-btn {
  padding: 5px 10px;
  color: white;
  border: none;
  cursor: pointer;
  background-color: #1F2937;
}

#dark.check-btn {
  color:black;
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
  { baseForm: 'take', secondForm: 'took', thirdForms: ['taken'] },
  { baseForm: 'wake', secondForm: 'woke', thirdForms: ['woken'] },
  { baseForm: 'wear', secondForm: 'wore', thirdForms: ['worn'] },
  { baseForm: 'blow', secondForm: 'blew', thirdForms: ['blown'] },
  { baseForm: 'choose', secondForm: 'chose', thirdForms: ['chosen'] },
  { baseForm: 'draw', secondForm: 'drew', thirdForms: ['drawn'] },
  { baseForm: 'fly', secondForm: 'flew', thirdForms: ['flown'] },
  { baseForm: 'grow', secondForm: 'grew', thirdForms: ['grown'] },
  { baseForm: 'know', secondForm: 'knew', thirdForms: ['known'] },
  { baseForm: 'throw', secondForm: 'threw', thirdForms: ['thrown'] },
  { baseForm: 'sing', secondForm: 'sang', thirdForms: ['sung'] },
  { baseForm: 'speak', secondForm: 'spoke', thirdForms: ['spoken'] },
  { baseForm: 'swim', secondForm: 'swam', thirdForms: ['swum'] },
  { baseForm: 'wear', secondForm: 'wore', thirdForms: ['worn'] },
  { baseForm: 'win', secondForm: 'won', thirdForms: ['won'] },
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
    answer.placeholder = 'Enter the third form';
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
      answerInput.placeholder = 'Incorrect. Try again.';
      answerInput.focus();
    }
  }

  function showFinalResult() {
    exercise.innerHTML = '';

    const finalResult = document.createElement('div');
    finalResult.classList.add('result');

    const correctCount = currentIndex;
    const totalCount = verbs.length;

    finalResult.textContent = `You have completed the exercise. Final score: ${correctCount}/${totalCount}`;
    exercise.appendChild(finalResult);
  }
});
  </script>
{{< /rawhtml >}}