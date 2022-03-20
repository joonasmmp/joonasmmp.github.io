---
title: "Testi, testi, testi"
date: 2021-8-13
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
    <div class="question">Kuka on Severin isä?</code></div>
    <div class="choices" data-choices='["Aaro","Eero", "Uuro", "Iiro"]'></div>
    <p class="info">Aaro kylläkin väittää olevansa koska on HULLU</p>
     </section>
  <section data-quiz-item>
    <div class="question">Ressu Redford on nähty Salkkareissa, mutta missä?</div>
    <div class="choices" data-choices='["Lentokoneessa","Junassa","Laivalla","Bussissa"]'></div>
    <p class="info">Junassa kun Salla lähti sarjasta pois niin Ressu istui viereen ja laulaa luikautti</p>
   </section>
  </div>
  <div class="row">
  <section data-quiz-item>
    <div class="question">Mihin Linda muutti?</div>
    <div class="choices" data-choices='["Marseille","Tampere","New York","Lyon"]'></div>
    <p class="info">Interpolin hommiin Ranskan Lyoniin </p>

  </section>
   <section data-quiz-item>
    <div class="question">Lassen uusin tyttöystävä Joanna on poliisi.</div> 
    <div class="choices" data-choices='["Totta","Tarua"]'></div>
    <p class="info">Mikin työpari ja Lindan korvaaja</p>
  </section>
  </div>
   <div class="row">
  <section data-quiz-item>
    <div class="question">Anu Sinisalo näytteli kenen äitiä?</div>
    <div class="choices" data-choices='["Romeo","Tale","Taneli","Sofia"]'></div>
    <p class="info">Talen äiti on Elina, Sofian äiti oli Hanna Salin</p>
  </section>
   <section data-quiz-item>
    <div class="question">Onko Salkkarit hyvä ohjelma?</div>
    <div class="choices" data-choices='["Kyllä","Ei"]'></div>
    <p class="info">>:(</p>
  </section>
  </div>
   <div class="row last">
  <section data-quiz-item>
    <div class="question">Löytyykö bugeja?</div>
    <div class="choices" data-choices='["Kyllä","Ei"]'></div>
    <p class="info">No ainahan niitä jostain löytyy.</p>
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
  key: ["2","2","4","1","3","1","1"]
});</script>
{{< /rawhtml >}}