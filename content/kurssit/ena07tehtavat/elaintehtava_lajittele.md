---
title: "1. Lajittele eläimet oikeaan kategoriaan"
date: 2022-2-1
weight: 82
draft: false
type: page
layout: tehtavaxxl
---
{{< rawhtml >}}
    <div class="container">

   <div class="game-area">
            <div class="categories">
                <div class="category" data-category="bird">Birds</div>
                <div class="category" data-category="fish">Fishes</div>
                <div class="category" data-category="mammal">Mammals</div>
            <div class="category" data-category="reptile">reptiles</div>
            </div>
            <div class="animals">
                <div class="animal" draggable="true" data-category="bird">Bird</div>
                <div class="animal" draggable="true" data-category="bird">Bird</div>
                <div class="animal" draggable="true" data-category="bird">Bird</div>
                <div class="animal" draggable="true" data-category="fish">Fish</div>
                <div class="animal" draggable="true" data-category="fish">Fish</div>
                <div class="animal" draggable="true" data-category="fish">Fish</div>
                <div class="animal" draggable="true" data-category="mammal">Mammal</div>
                <div class="animal" draggable="true" data-category="mammal">Mammal</div>
                <div class="animal" draggable="true" data-category="mammal">Mammal</div>
            </div>
        </div> 
      </div>
        
        <button id="check-button">Check Answers</button>


<style>

.container {
    text-align: center;
    margin-top: 20px;
}

.game-area {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
}

.categories {
    flex: 1;
    border: 1px solid #ccc;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

}

.category {
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    margin: 5px;
    cursor: pointer;
    margin-bottom: 1em;
    padding-bottom: 1em;
}

.animals {
    grid-template-columns: repeat(2, 1fr);
    flex: 1;
    border: 1px solid #ccc;
    padding: 10px;
    display: grid;
}

.animal {
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    padding: 5px;
    margin: 5px;
    cursor: pointer;
    height: 2em;
}

#check-button {
    margin-top: 20px;
    padding: 10px 20px;
    font-size: 16px;
    background-color: #007bff;
    color: #fff;
    border: none;
    cursor: pointer;
}

#check-button:hover {
    background-color: #0056b3;
}

</style>

<script>
const animals = document.querySelectorAll('.animal');
const categories = document.querySelectorAll('.category');
const checkButton = document.getElementById('check-button');
let currentDraggedItem = null;

animals.forEach((animal) => {
    animal.addEventListener('dragstart', (e) => {
        currentDraggedItem = animal;
        e.dataTransfer.setData('text/plain', animal.textContent);
    });

    animal.addEventListener('dragend', () => {
        currentDraggedItem = null;
    });
});

categories.forEach((category) => {
    category.addEventListener('dragover', (e) => {
        e.preventDefault();
    });

    category.addEventListener('drop', (e) => {
        e.preventDefault();
        if (currentDraggedItem) {
            const categoryType = category.getAttribute('data-category');
            if (currentDraggedItem.getAttribute('data-category') === categoryType) {
                currentDraggedItem.classList.add('correct');
            } else {
                currentDraggedItem.classList.add('incorrect');
            }
            category.appendChild(currentDraggedItem);
            currentDraggedItem = null;
        }
    });
});

checkButton.addEventListener('click', () => {
    animals.forEach((animal) => {
        if (animal.classList.contains('correct')) {
            animal.style.backgroundColor = 'green';
            animal.removeAttribute('draggable');
        } else if (animal.classList.contains('incorrect')) {
            animal.style.backgroundColor = 'red';
        }
    });
});

function drop(ev) {
    ev.preventDefault();
    var data=ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
}

</script>

{{< /rawhtml >}}