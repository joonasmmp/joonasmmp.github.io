---
title: "Tieteellinen kirjoittaminen: monivalinta 1"
date: 2022-9-18
draft: false
weight: 12
type: page
layout: tehtava
---

Choose the more scientific version in questions 1-3. In questions 4-12, complete the sentences with the more scientific version. 

{{< rawhtml >}}
<link rel="stylesheet" type="text/css" href="/css/monivalinta2.css"/>
<body class="dark:bg-warmgray-900">
<div class="wrap">
  <div class="row">
  <section data-quiz-item>
    <div class="question">Choose the more scientific version.</div>
    <div class="choices" data-choices='["First, I took a banana from the deep-freezer. Then I superheated it to thirty thousand degrees Celsius for 0.001 seconds. Finally, I coated it with maple syrup and ate it.","First, a banana was taken from the deep-freezer. Then it was superheated to thirty thousand degrees Celsius for 0.001 seconds. Finally, it was coated with maple syrup and eaten."]'></div>
    <p class="info">Passive voice is more formal.</p>
  </section>
  <section data-quiz-item>
    <div class="question">Choose the more scientific version.</div>
    <div class="choices" data-choices='["You just pour hot water on the tea leaves, let it steep for five minutes, and it is ready.", "Hot water is poured on the tea leaves, after which the drink is left to steep for fives minutes."]'></div>
    <p class="info">Use proper passive voice, not the you-passive.</p>
   </section>
  </div>
  <div class="row">
  <section data-quiz-item>
    <div class="question">Choose the more scientific version</div>
    <div class="choices" data-choices='["According to the results, there is some indication that the medicine may potentionally work against both the common flu and prostate cancer.", "According to the results, it is clear that the medicine is not only effective against the common flu but also prostate cancer."]'></div>
    <p class="info">Scientific language is never certain - some calculations might have errors, for example.</p>
  </section>
   <section data-quiz-item>
    <div class="question">This study ______ that having no common language between doctors and patients.... </div> 
    <div class="choices" data-choices='["shows", "suggests"]'></div>
    <p class="info">Suggests is more uncertain, therefore more scientific.</p>
  </section>
  </div>
   <div class="row">
  <section data-quiz-item>
    <div class="question">... _____ to unnecessary medications and medical procedures.</div>
    <div class="choices" data-choices='["leads", "may lead"]'></div>
    <p class="info">May lead is more uncertain, therefore more scientific.</p>
  </section>
   <section data-quiz-item>
    <div class="question">The findings _____ density greater than anticipated.</div>
    <div class="choices" data-choices='["imply", "confirm"]'></div>
    <p class="info">Imply = suggest. Confirm would be too sure there is nothing wrong with the study or its repetitiveness.</p>
  </section>
  </div>
    <div class="row">
  <section data-quiz-item>
    <div class="question">Further studies on the subject _____ help us understand the factors behind the phenomenon.</div>
    <div class="choices" data-choices='["will", "could"]'></div>
    <p class="info">Could is more uncertain, therefore more scientific.</p>
  </section>
   <section data-quiz-item>
    <div class="question">The newly developed vaccine _____ increase prostate cancer survival rate by up to twenty percent.</div>
    <div class="choices" data-choices='["could potentially", "can"]'></div>
    <p class="info">Can is too certain.</p>
  </section>
  </div>
   <div class="row last">
   <section data-quiz-item>
    <div class="question">Criminals _____ by an urge to earn easy money.</div>
    <div class="choices" data-choices='["are motivated", "are potentionally motivated"]'></div>
    <p class="info">Most are, but not necessarily all. Therefore potentionally.</p>
  </section>
  <section data-quiz-item>
    <div class="question">According a study conducted by the University of Kemi, motivating your students is ____ an effective way to increase learning results.</div>
    <div class="choices" data-choices='["arguably", "without a doubt"]'></div>
    <p class="info">Without a doubt is way too certain and way too informal.</p>
  </section>
  <section data-quiz-item>
   <div class="question">_____ who study hard earn good grades.</div>
  <div class="choices" data-choices='["People", "Many of the people"]'></div>
  <p class="info">Most, but not 100% all the time.</p>
  </section>
  </div>
</div>
  <div id="emc-score"></div>
  <div class="submit">
  <button id="emc-submit">Vastaa</button>
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
      $scoreEl.text("Vastauksista oikein "+score).addClass('new-score');
    }
 
  }
}(jQuery));
 
 
$(document).emc({
  key: ["2","2","1","2","2","1","2","1","2","1","2"]
});</script>
{{< /rawhtml >}}