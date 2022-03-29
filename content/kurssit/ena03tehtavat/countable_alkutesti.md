---
title: "Laskettavat ja ei-laskettavat substantiivit: Alkutesti"
date: 2022-3-29
draft: false
type: page
layout: tehtava
---

{{< rawhtml >}}
<link rel="stylesheet" type="text/css" href="/css/monivalinta2.css"/>
<body class="dark:bg-warmgray-900">
<div class="wrap">
  <div class="row">
  <section data-quiz-item>
    <div class="question">Water</code></div>
    <div class="choices" data-choices='["Countable","Uncountable"]'></div>
    <p class="info">Water eli vesi on ainesana. Sitä ei voi laskea ilman mittayksikköä esim. a drop of water, a glass of water. A water yleensä tarkoittaa yhtä vesiannosta ravintolassa, mutta ei aina. </p>
     </section>
  <section data-quiz-item>
    <div class="question">People</div>
    <div class="choices" data-choices='["Countable","Uncountable"]'></div>
    <p class="info">People on monikko sanalle person. Ihmisiä voi laskea: one person, two people, jne.</p>
   </section>
  </div>
  <div class="row">
  <section data-quiz-item>
    <div class="question">Bread</div>
    <div class="choices" data-choices='["Countable","Uncountable"]'></div>
    <p class="info">Leipä tarvii myös mittayksikön, esim a slice of bread, a loaf of bread. Bread itsessään on leipää, sitä ainetta. </p>

  </section>
   <section data-quiz-item>
    <div class="question">Money</div> 
    <div class="choices" data-choices='["Countable","Uncountable"]'></div>
    <p class="info">Raha myös vaatii mittayksikön. Yksi raha, kaksi raha, jne. yleensä ymmärretään että kyse on kolikoista, mutta ei ole kieliopillisesti oikein. Puhutaan dollareista, euroista, kolikoista, seteleistä ja muista laskettavista yksiköistä.</p>
  </section>
  </div>
   <div class="row">
  <section data-quiz-item>
    <div class="question">Orange</div>
    <div class="choices" data-choices='["Countable","Uncountable"]'></div>
    <p class="info">Nyt on kyse substantiiveista, joten tarkoitetaan appelsiinia. Ja niitähän voi laskea: an orange, two oranges.</p>
  </section>
   <section data-quiz-item>
    <div class="question">Electricity</div>
    <div class="choices" data-choices='["Countable","Uncountable"]'></div>
    <p class="info">Sähkö on ainesana. </p>
  </section>
  </div>
   <div class="row last">
  <section data-quiz-item>
    <div class="question">Dollar</div>
    <div class="choices" data-choices='["Countable","Uncountable"]'></div>
    <p class="info">Tämähän jo kerrottiin tuolla raha-osiossa, eli valuuttaa voi laskea, rahaa ei.</p>
  </section>
  </div>
  <div id="emc-score"></div>
  <div class="submit">
  <button id="emc-submit">Vastaa</button>
  </div>
</div>
 
 <script src='https://cdnjs.cloudflare.com/ajax/libs/jquery/2.1.3/jquery.min.js'></script>
 
</body>
</html>

<script>
  
    (function($) {
  $.fn.emc = function(options) {
    
    var defaults = {
      key: [],
      scoring: "normal",
      progress: true
    },
    settings = $.extend(defaults,options),
    $quizItems = $('[data-quiz-item]'),
    $choices = $('[data-choices]'),
    itemCount = $quizItems.length,
    chosen = [],
    $option = null,
    $label = null;
    
   emcInit();
    
   if (settings.progress) {
      var $bar = $('#emc-progress'),
          $inner = $('<div id="emc-progress_inner"></div>'),
          $perc = $('<span id="emc-progress_ind">0/'+itemCount+'</span>');
      $bar.append($inner).prepend($perc);
    }
    
    function emcInit() {
      $quizItems.each( function(index,value) {
      var $this = $(this),
          $choiceEl = $this.find('.choices'),
          choices = $choiceEl.data('choices');
        for (var i = 0; i < choices.length; i++) {
          $option = $('<input name="'+index+'" id="'+index+'_'+i+'" type="radio">');
          $label = $('<label for="'+index+'_'+i+'">'+choices[i]+'</label>');
          $choiceEl.append($option).append($label);
         
          $option.on( 'change', function() {
            return getChosen();
          }); 
        }
      });
    }
    
    function getChosen() {
      chosen = [];
      $choices.each( function() {
        var $inputs = $(this).find('input[type="radio"]');
        $inputs.each( function(index,value) {
          if($(this).is(':checked')) {
            chosen.push(index + 1);
          }
        });
      });
      getProgress();
    }
    
    function getProgress() {
      var prog = (chosen.length / itemCount) * 100 + "%",
          $submit = $('#emc-submit');
      if (settings.progress) {
        $perc.text(chosen.length+'/'+itemCount);  
        $inner.css({height: prog});
      }
      if (chosen.length === itemCount) {
        $submit.addClass('ready-show');
        $submit.click( function(){
          return scoreNormal();
        });
      }
    }
    
    function scoreNormal() {
      var wrong = [],
          score = null,
          $scoreEl = $('#emc-score');
      for (var i = 0; i < itemCount; i++) {
        if (chosen[i] != settings.key[i]) {
          wrong.push(i);
        }
      }
      $quizItems.each( function(index) {
        var $this = $(this);
        if ($.inArray(index, wrong) !== -1 ) {
         $this.removeClass('item-correct').addClass('item-incorrect');
        } else {
          $this.removeClass('item-incorrect').addClass('item-correct');
        }
      });
      
      score = ((itemCount - wrong.length) / itemCount).toFixed(2) * 100 + "%";
      $scoreEl.text("Vastauksista oikein: "+score).addClass('new-score');
    }
 
  }
}(jQuery));
 
 
$(document).emc({
  key: ["2","1","2","2","1","2","1"]
});</script>
{{< /rawhtml >}}