---
title: "Täydennä kolmas muoto"
date: 2023-5-28
draft: false
type: page
layout: tehtava
---

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
  background-color: #f2f2f2;
  margin-right: 5px;
}

.answer {
  padding: 5px;
  margin-right: 5px;
  margin-left: 0.7em;
}

.check-btn {
  padding: 5px 10px;
  background-color: #4CAF50;
  color: white;
  border: none;
  cursor: pointer;
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
  { baseForm: 'be', secondForm: 'was/were', thirdForm: 'been' },
  { baseForm: 'have', secondForm: 'had', thirdForm: 'had' },
  { baseForm: 'do', secondForm: 'did', thirdForm: 'done' },
  { baseForm: 'say', secondForm: 'said', thirdForm: 'said' },
  { baseForm: 'go', secondForm: 'went', thirdForm: 'gone' },
  { baseForm: 'get', secondForm: 'got', thirdForm: 'got/gotten' },
  { baseForm: 'make', secondForm: 'made', thirdForm: 'made' },
  { baseForm: 'know', secondForm: 'knew', thirdForm: 'known' },
  { baseForm: 'see', secondForm: 'saw', thirdForm: 'seen' },
  { baseForm: 'come', secondForm: 'came', thirdForm: 'come' },
  { baseForm: 'think', secondForm: 'thought', thirdForm: 'thought' },
  { baseForm: 'take', secondForm: 'took', thirdForm: 'taken' },
  { baseForm: 'find', secondForm: 'found', thirdForm: 'found' },
  { baseForm: 'give', secondForm: 'gave', thirdForm: 'given' },
  { baseForm: 'tell', secondForm: 'told', thirdForm: 'told' },
  { baseForm: 'see', secondForm: 'saw', thirdForm: 'seen' },
  { baseForm: 'feel', secondForm: 'felt', thirdForm: 'felt' },
  { baseForm: 'become', secondForm: 'became', thirdForm: 'become' },
  { baseForm: 'leave', secondForm: 'left', thirdForm: 'left' },
  { baseForm: 'put', secondForm: 'put', thirdForm: 'put' },
  { baseForm: 'bring', secondForm: 'brought', thirdForm: 'brought' },
  { baseForm: 'begin', secondForm: 'began', thirdForm: 'begun' },
  { baseForm: 'keep', secondForm: 'kept', thirdForm: 'kept' },
  { baseForm: 'hold', secondForm: 'held', thirdForm: 'held' },
  { baseForm: 'write', secondForm: 'wrote', thirdForm: 'written' },
  { baseForm: 'stand', secondForm: 'stood', thirdForm: 'stood' },
  { baseForm: 'hear', secondForm: 'heard', thirdForm: 'heard' },
  { baseForm: 'let', secondForm: 'let', thirdForm: 'let' },
  { baseForm: 'mean', secondForm: 'meant', thirdForm: 'meant' },
  { baseForm: 'set', secondForm: 'set', thirdForm: 'set' },
  { baseForm: 'meet', secondForm: 'met', thirdForm: 'met' },
  { baseForm: 'run', secondForm: 'ran', thirdForm: 'run' },
  { baseForm: 'pay', secondForm: 'paid', thirdForm: 'paid' },
  { baseForm: 'sit', secondForm: 'sat', thirdForm: 'sat' },
  { baseForm: 'rise', secondForm: 'rose', thirdForm: 'risen' },
  { baseForm: 'break', secondForm: 'broke', thirdForm: 'broken' },
  { baseForm: 'choose', secondForm: 'chose', thirdForm: 'chosen' },
  { baseForm: 'drive', secondForm: 'drove', thirdForm: 'driven' },
  { baseForm: 'forget', secondForm: 'forgot', thirdForm: 'forgotten' },
  { baseForm: 'freeze', secondForm: 'froze', thirdForm: 'frozen' },
  { baseForm: 'hide', secondForm: 'hid', thirdForm: 'hidden' },
  { baseForm: 'lose', secondForm: 'lost', thirdForm: 'lost' },
  { baseForm: 'take', secondForm: 'took', thirdForm: 'taken' },
  { baseForm: 'wake', secondForm: 'woke', thirdForm: 'woken' },
  { baseForm: 'wear', secondForm: 'wore', thirdForm: 'worn' },
  { baseForm: 'blow', secondForm: 'blew', thirdForm: 'blown' },
  { baseForm: 'choose', secondForm: 'chose', thirdForm: 'chosen' },
  { baseForm: 'draw', secondForm: 'drew', thirdForm: 'drawn' },
  { baseForm: 'fly', secondForm: 'flew', thirdForm: 'flown' },
  { baseForm: 'grow', secondForm: 'grew', thirdForm: 'grown' },
  { baseForm: 'know', secondForm: 'knew', thirdForm: 'known' },
  { baseForm: 'throw', secondForm: 'threw', thirdForm: 'thrown' },
  { baseForm: 'sing', secondForm: 'sang', thirdForm: 'sung' },
  { baseForm: 'speak', secondForm: 'spoke', thirdForm: 'spoken' },
  { baseForm: 'swim', secondForm: 'swam', thirdForm: 'swum' },
  { baseForm: 'wear', secondForm: 'wore', thirdForm: 'worn' },
  { baseForm: 'win', secondForm: 'won', thirdForm: 'won' },
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
    checkButton.addEventListener('click', checkAnswer.bind(null, answer));

    verbContainer.appendChild(verb);
    verbContainer.appendChild(secondForm);
    verbContainer.appendChild(answer);
    verbContainer.appendChild(checkButton);

    exercise.appendChild(verbContainer);

    answer.focus();
  }

  function checkAnswer(answerInput) {
    const userAnswer = answerInput.value.trim().toLowerCase();
    const expectedAnswer = verbs[currentIndex].thirdForm;

    if (userAnswer === expectedAnswer) {
      const verbListItem = document.createElement('div');
      verbListItem.textContent = `${verbs[currentIndex].baseForm} - ${verbs[currentIndex].secondForm} - ${verbs[currentIndex].thirdForm}`;
      verbList.appendChild(verbListItem);

      currentIndex++;
      answerInput.disabled = true;
      answerInput.removeEventListener('keypress', checkAnswer);
      this.disabled = true;
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