---
title: "Persoonapronominit: Alkutesti"
date: 2022-9-18
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
    <div class="question">______ have some difficulties with personal pronouns.</div>
    <div class="choices" data-choices='["He","She", "We", "It"]'></div>
    <p class="info">Vastauksen pakko olla 'We', koska sitä seuraava verbi 'have' on monikko.</p>
  </section>
  <section data-quiz-item>
    <div class="question">You can drive a person crazy by telling _____ about grammar rules all day.</div>
    <div class="choices" data-choices='["him","her", "it", "them"]'></div>
    <p class="info">Them on objektimuotona silloin kun puhutaan henkilöstä, jonka sukupuoli ei ole tiedossa.</p>
   </section>
  </div>
  <div class="row">
  <section data-quiz-item>
    <div class="question">My friend finds my habit of talking to _____ about grammar rules very irritating.</div>
    <div class="choices" data-choices='["himself","herself", "themselves", "myself"]'></div>
    <p class="info">Se joka puhuu itsekseen ei ole ystävä vaan sinä (my habit of).</p>
  </section>
   <section data-quiz-item>
    <div class="question">That umbrella over there is ______.</div> 
    <div class="choices" data-choices='["my", "mine", "me", "I"]'></div>
    <p class="info">Itsenäinen omistuspronomini 'mine', koska sitä ei seuraa substantiivia.</p>
  </section>
  </div>
   <div class="row">
  <section data-quiz-item>
    <div class="question">But that ugly blue umbrella over there, that's _____ umbrella.</div>
    <div class="choices" data-choices='["your", "yours", "your&apos;s", "you"]'></div>
    <p class="info">Kun omistuspronominia seuraa substantiivi, on käytettävä sen adjektiivimuotoa 'your'</p>
  </section>
   <section data-quiz-item>
    <div class="question">This exercise has lost ____ purpose now that I know all these pronoun rules by heart</div>
    <div class="choices" data-choices='["their", "its", "it&apos;s", "their&apos;s"]'></div>
    <p class="info">Ei mitään heittomerkkejä omistusmuodoissa!.</p>
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
  key: ["3","3","4","2","1","2"]
});</script>
{{< /rawhtml >}}