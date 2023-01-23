---
title: "Paljoussanat: Alkutesti"
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
    <div class="question">_____ people know that brushing your teeth after eating breakfast is actually harmful.</div>
    <div class="choices" data-choices='["Little","Few"]'></div>
    <p class="info">Little people tarkoittaisi pieniä ihmisiä. Few koska laskettava. .</p>
  </section>
  <section data-quiz-item>
    <div class="question">If you want to feel _____ bloated, don't eat pizza all day every day.</div>
    <div class="choices" data-choices='["less","the least"]'></div>
    <p class="info">Less eli vähemmän, the least olisi vähiten turvonnut.</p>
   </section>
  </div>
  <div class="row">
  <section data-quiz-item>
    <div class="question">Products with _____ fat don’t necessarily contain _____ calories</div>
    <div class="choices" data-choices='["less, fewer", "fewer, fewer", "less, a little", "fewer, a little"]'></div>
    <p class="info">Ensimmäiseen kohtaan less koska rasva on ei-laskettava. Toiseen kohtaan fewer koska kalorit on laskettavia, nehän on energian yksikkö.</p>
  </section>
   <section data-quiz-item>
    <div class="question">Our teacher has given us ____ opportunities to prove our language skills.</div> 
    <div class="choices" data-choices='["many", "much"]'></div>
    <p class="info">Many koska mahdollisuudet ovat laskettavia.</p>
  </section>
  </div>
   <div class="row">
  <section data-quiz-item>
    <div class="question">Even though we don't have _____ free time, we spend it doing exercises.</div>
    <div class="choices" data-choices='["many", "much"]'></div>
    <p class="info">Much koska aika ei ole laskettava.</p>
  </section>
   <section data-quiz-item>
    <div class="question">After graduation _____ people regret not taking advantage of our fantastic school system.</div>
    <div class="choices" data-choices='["most", "most of"]'></div>
    <p class="info">Pelkkä most riittää. Most of viittaisi että suurin osa jostakin tietystä ihmisryhmästä, most of our classmates esimerkiksi.</p>
  </section>
  </div>
    <div class="row">
  <section data-quiz-item>
    <div class="question">_____ cities have as many mayonnaise pizzas as Oulu, which has the most in the world.</div>
    <div class="choices" data-choices='["Many", "Few", "Little", "Many"]'></div>
    <p class="info">Few eli harva kaupunki. Täytyy päätellä tuosta sivulauseesta ettei many sovi tähän.</p>
  </section>
   <section data-quiz-item>
    <div class="question">Only ____ of my friends actually enjoy pineapple on a pizza.</div>
    <div class="choices" data-choices='["few", "many", "a little", "a few"]'></div>
    <p class="info">Vain muutamat, only a few.</p>
  </section>
  </div>
   <div class="row last">
   <section data-quiz-item>
    <div class="question">There are ____ sights to see in Kiiminki.</div>
    <div class="choices" data-choices='["a little", "much", "a lot of", "a large amount of"]'></div>
    <p class="info">A large amount ei sovi koska se vaatisi yksikön verbiä is.</p>
  </section>
  <section data-quiz-item>
    <div class="question">If you have any ideas how I could make _____ extra cash without breaking the law, let me know.</div>
    <div class="choices" data-choices='["a few", "some", "little", "much"]'></div>
    <p class="info">Ei-laskettava, joten a few putoaa pois. Much ei myöskään kuulosta järkevältä, little vaatisi artikkelin. Some siis ainut järkevä.</p>
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
  key: ["1","1","1","1","2","1","2","4","3","2"]
});</script>
{{< /rawhtml >}}