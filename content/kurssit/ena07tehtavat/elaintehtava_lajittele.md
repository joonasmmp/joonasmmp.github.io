---
title: "1. Lajittele eläimet oikeaan kategoriaan"
date: 2022-2-1
weight: 82
draft: false
type: page
layout: tehtavaxxl
---
Aseta eläinsanat oikeaan kategoriaan. Osa eläimistä voi kuulua useampaan kategoriaan, mutta tässä tehtävässä jokainen eläin kuuluu vain yhteen kategoriaan.

{{< rawhtml >}}

<div class="tarkista">
 <button id="check-button">Check Answers</button> 
</div>

   <div class="game-area">
      <div class="categories">
        <div class="category" data-category="marsupial"><b>Marsupials</b></div>
        <div class="category" data-category="fish"><b>Fish</b></div>
        <div class="category" data-category="bird"><b>Birds</b></div>
        <div class="category" data-category="mammal"><b>Mammals</b></div>
        <div class="category" data-category="reptile"><b>Reptiles</b></div>
        <div class="category" data-category="mollusc"><b>Molluscs</b></div>
        <div class="category" data-category="rodent"><b>Rodents</b></div>
        <div class="category" data-category="amphibian"><b>Amphibians</b></div>
        <div class="category" data-category="insect"><b>Insects</b></div>
        <div class="category" data-category="invertebrate"><b>Invertebrates</b></div>
      </div>
            <div class="animals">
        <div class="animal" draggable="true" data-category="marsupial">Kangaroo</div>
        <div class="animal" draggable="true" data-category="marsupial">Tasmanian devil</div>
        <div class="animal" draggable="true" data-category="marsupial">Koala</div>
        <div class="animal" draggable="true" data-category="marsupial">Opossum</div>
        <div class="animal" draggable="true" data-category="fish">Perch</div>
        <div class="animal" draggable="true" data-category="fish">Salmon</div>
        <div class="animal" draggable="true" data-category="fish">Roach</div>
        <div class="animal" draggable="true" data-category="fish">Pike</div>
        <div class="animal" draggable="true" data-category="fish">Trout</div>
        <div class="animal" draggable="true" data-category="fish">Herring</div>
        <div class="animal" draggable="true" data-category="mammal">Wolverine</div>
        <div class="animal" draggable="true" data-category="mammal">Whale</div>
        <div class="animal" draggable="true" data-category="mammal">Dolphin</div>
        <div class="animal" draggable="true" data-category="mammal">Bat</div>
        <div class="animal" draggable="true" data-category="mammal">Platypus</div>
        <div class="animal" draggable="true" data-category="reptile">Adder</div>
        <div class="animal" draggable="true" data-category="reptile">Rattlesnake</div>
        <div class="animal" draggable="true" data-category="reptile">Crocodile</div>
        <div class="animal" draggable="true" data-category="reptile">Lizard</div>
        <div class="animal" draggable="true" data-category="amphibian">Salamander</div>
        <div class="animal" draggable="true" data-category="amphibian">Toad</div>
        <div class="animal" draggable="true" data-category="amphibian">Poison dart frog</div>
        <div class="animal" draggable="true" data-category="insect">Flea</div>
        <div class="animal" draggable="true" data-category="insect">Cockroach</div>
        <div class="animal" draggable="true" data-category="insect">Mosquito</div>
        <div class="animal" draggable="true" data-category="mollusc">Squid</div>
        <div class="animal" draggable="true" data-category="mollusc">Snail</div>
        <div class="animal" draggable="true" data-category="mollusc">Cuttlefish</div>
        <div class="animal" draggable="true" data-category="invertebrate">Jellyfish</div>
        <div class="animal" draggable="true" data-category="invertebrate">Sea urchin</div>
        <div class="animal" draggable="true" data-category="invertebrate">Earthworm</div>
        <div class="animal" draggable="true" data-category="rodent">Squirrel</div>
        <div class="animal" draggable="true" data-category="rodent">Beaver</div>
        <div class="animal" draggable="true" data-category="rodent">Rat</div>
        <div class="animal" draggable="true" data-category="bird">Great tit</div>
        <div class="animal" draggable="true" data-category="bird">Magpie</div>
        <div class="animal" draggable="true" data-category="bird">Whooper swan</div>
        <div class="animal" draggable="true" data-category="bird">Raven</div>
        <div class="animal" draggable="true" data-category="bird">Sparrow</div>
            </div>
      </div> 
        
<style>

.tarkista {
    display: flex;
    align-items: center;
    justify-content: center;
}

.game-area {
    display: flex;
    justify-content: space-between;
    margin-top: 20px;
   text-align: center;
}

.categories {
    flex: 1;
    padding: 10px;
    display: grid;
    grid-template-columns: repeat(3, 1fr);

}

.category {
    background-color: #f0f0f0;
    margin: 5px;
    border: 1px solid #ccc;
    cursor: pointer;
    margin-bottom: 1em;
    padding-bottom: 1em;
}

.dark .category {
    background-color: #181818;
}

.animals {
    grid-template-columns: repeat(2, 1fr);
    flex: .5;
    padding: 10px;
    display: grid;
    align-content: flex-start;

}

.animal {
    background-color: #f0f0f0;
    border: 1px solid #ccc;
    padding: 5px;
    margin: 5px;
    cursor: pointer;
    height: 2em;
}

.dark .animal {
    background-color: #1F2937;
    color: white;
    border: 1px solid #000000;
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

#hello{
    background: url(/img/kansikuvat/kurssivalikot/lajittelu.jpg)
}
  
#hello h {
    font-size: 2.5em!important;
}

</style>

<script>
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

const animals = document.querySelectorAll('.animal');
const categories = document.querySelectorAll('.category');
const checkButton = document.getElementById('check-button');
let answersChecked = false;
let currentDraggedItem = null;

// Shuffle the animals' order
const animalsArray = Array.from(animals);
shuffleArray(animalsArray);

animalsArray.forEach((animal, index) => {
    animal.style.order = index;
});

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
            animal.style.backgroundColor = '#2dceb1'
            animal.style.color = 'white'
            animal.removeAttribute('draggable');
        } else if (animal.classList.contains('incorrect')) {
            animal.style.backgroundColor = '#ff383e';
            animal.style.color = 'white'
        }
    });
});

function drop(ev) {
    ev.preventDefault();
    var data=ev.dataTransfer.getData("Text");
    ev.target.appendChild(document.getElementById(data));
}

    var stop = true;
    $(".draggable").on("drag", function (e) {

        stop = true;

        if (e.originalEvent.clientY < 150) {
            stop = false;
            scroll(-1)
        }

        if (e.originalEvent.clientY > ($(window).height() - 150)) {
            stop = false;
            scroll(1)
        }

    });

    $(".draggable").on("dragend", function (e) {
         stop = true;
    });

    var scroll = function (step) {
        var scrollY = $(window).scrollTop();
        $(window).scrollTop(scrollY + step);
        if (!stop) {
            setTimeout(function () { scroll(step) }, 20);
        }
    }

</script>

{{< /rawhtml >}}

{{%accordion "Lisätietoja ?" %}}
Toad ei ole Super Mario-pelisarjan sieni, vaan rupikonna. <br>
Saa jee ou nou
{{% /accordion%}}