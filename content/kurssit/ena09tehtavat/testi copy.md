---
title: "Testi, testi, testi"
date: 2021-8-13
draft: false
type: page
layout: tehtava
---

{{< rawhtml >}}
<<html>
<head>
  <title>Word Order Exercise</title>
  <link rel="stylesheet" type="text/css" href="style.css">
</head>
<body>
  <h2>Arrange the Words</h2>

  <div id="sentences">
    <div class="sentence">
      <div class="word">The</div>
      <div class="word">cat</div>
      <div class="word dropzone"></div>
      <div class="word">on</div>
      <div class="word">the</div>
      <div class="word">mat</div>
    </div>
    <div class="sentence">
      <div class="word dropzone"></div>
      <div class="word">playing</div>
      <div class="word">is</div>
      <div class="word">children</div>
      <div class="word">in</div>
      <div class="word">the</div>
      <div class="word">park</div>
    </div>
    <div class="sentence">
      <div class="word">I</div>
      <div class="word dropzone"></div>
      <div class="word">a</div>
      <div class="word">delicious</div>
      <div class="word">ate</div>
      <div class="word">slice</div>
      <div class="word">of</div>
      <div class="word">cake</div>
    </div>
  </div>

  <script src="script.js"></script>
</body>
</html>

<style>
  .sentence {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.word {
  padding: 5px;
  border: 1px solid #ccc;
  background-color: #f2f2f2;
  margin-right: 5px;
  cursor: pointer;
}

.dropzone {
  width: 50px;
  height: 20px;
  border: 2px dashed #aaa;
}

.highlight {
  background-color: #e0e0e0;
}

.success {
  background-color: lightgreen;
}

.failure {
  background-color: lightcoral;
}
</style>

<script>
  window.addEventListener('DOMContentLoaded', (event) => {
  const words = document.querySelectorAll('.word');
  const dropzones = document.querySelectorAll('.dropzone');

  words.forEach((word) => {
    word.addEventListener('dragstart', dragStart);
    word.addEventListener('dragend', dragEnd);
  });

  dropzones.forEach((dropzone) => {
    dropzone.addEventListener('dragover', dragOver);
    dropzone.addEventListener('dragenter', dragEnter);
    dropzone.addEventListener('dragleave', dragLeave);
    dropzone.addEventListener('drop', dragDrop);
  });

  function dragStart() {
    this.className += ' highlight';
    setTimeout(() => (this.className = 'word'), 0);
  }

  function dragEnd() {
    this.className = 'word';
  }

  function dragOver(e) {
    e.preventDefault();
  }

  function dragEnter(e) {
    e.preventDefault();
    this.className += ' highlight';
  }

  function dragLeave() {
    this.className = 'word dropzone';
  }

  function dragDrop() {
    if (this.innerHTML === '') {
      const word = document.querySelector('.highlight');
     
      this.appendChild(word);
      this.className = 'word dropzone success';
    } else {
      this.className = 'word dropzone failure';
    }

    checkSentences();
  }

  function checkSentences() {
    const sentences = document.querySelectorAll('.sentence');

    sentences.forEach((sentence) => {
      const dropzones = sentence.querySelectorAll('.dropzone');
      let isCorrect = true;

      dropzones.forEach((dropzone, index) => {
        const word = dropzone.querySelector('.word');
        const expectedWord = sentence.children[index * 2 + 1];

        if (word !== expectedWord) {
          isCorrect = false;
          return;
        }
      });

      if (isCorrect) {
        sentence.classList.add('success');
      } else {
        sentence.classList.remove('success');
      }
    });
  }
});
  </script>
{{< /rawhtml >}}