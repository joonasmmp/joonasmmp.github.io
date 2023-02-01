---
title: "Lukusanat: Alkutesti"
date: 2022-9-18
draft: false
weight: 12
type: page
layout: tehtava
---

{{< rawhtml >}}
<link rel="stylesheet" type="text/css" href="/css/monivalinta2.css"/>
<body class="dark:bg-warmgray-900">
<div class="wrap">
  <div class="row">
  <section data-quiz-item>
    <div class="question">4. Joulukuuta vuonna 1951</div>
    <div class="choices" data-choices='["in December 4, 1951","on December 4, 1951"]'></div>
    <p class="info">Päivämäärät aina on-prepositiolla.</p>
  </section>
  <section data-quiz-item>
    <div class="question">Kymmeniä munia</div>
    <div class="choices" data-choices='["ten eggs","a dozen eggs","tens of eggs","dozens of eggs"]'></div>
    <p class="info">Englanniksi puhutaan tusinoista kymmenien sijaan kun ei ole tarkka määrä kyseessä. kaksi ensimmäistä vaihtoehtoa ovat liian tarkkoja (10 ja 12).</p>
   </section>
  </div>
  <div class="row">
  <section data-quiz-item>
    <div class="question">Kaksikymmentä yksi</div>
    <div class="choices" data-choices='["twenty one", "twenty-one"]'></div>
    <p class="info">Lukujen väliin viiva.</p>
  </section>
   <section data-quiz-item>
    <div class="question">1900-luvulla.</div> 
    <div class="choices" data-choices='["in the 18th century", "in the 19th century", "in the 20th century"]'></div>
    <p class="info">Kyseessä on 20. vuosisata koska ensimmäinen vuosisata alkaa vuodesta (tai vuodesta 1 tulkinnasta riippuen). Kuitenkin, vastaa aina yksi isompi kuin mitä numeroilla.</p>
  </section>
  </div>
   <div class="row">
  <section data-quiz-item>
    <div class="question">70-vuotias</div>
    <div class="choices" data-choices='["70 year old", "70-year old", "70 year-old", "70-year-old"]'></div>
    <p class="info">Adjektiivisessa muodossa viivat joka väliin.</p>
  </section>
   <section data-quiz-item>
    <div class="question">Hän on 70-vuotias. </div>
    <div class="choices" data-choices='["He is 70 years old", "He is 70-years old", "He is 70 years-old", "He is 70-years-old"]'></div>
    <p class="info">Olla-verbin jälkeen viivat kuitenkin lähtevät kun ei olla enää adjektiivisessa muodossa.</p>
  </section>
  </div>
    <div class="row">
  <section data-quiz-item>
    <div class="question">1990-luvun puolivälissä.</div>
    <div class="choices" data-choices='["in the 1990s", "in the mid 1990s", "in the mid 1990", "in the mid-1990s"]'></div>
    <p class="info">Viiva mukaan!</p>
  </section>
   <section data-quiz-item>
    <div class="question">Mijardi</div>
    <div class="choices" data-choices='["a milliard", "a million", "a billion", "a billiard"]'></div>
    <p class="info">Billion = mijardi. Trillion = biljoona. Ei mittään järkeä.</p>
  </section>
  </div>
   <div class="row last">
   <section data-quiz-item>
    <div class="question">Kaksi viidesosaa</div>
    <div class="choices" data-choices='["Two fives", "two fifths", "two-fifths", "two-fives"]'></div>
    <p class="info">A large amount ei sovi koska se vaatisi yksikön verbiä is.</p>
  </section>
  <section data-quiz-item>
    <div class="question">Kello 14:30</div>
    <div class="choices" data-choices='["2:30 AM", "2:30 PM"]'></div>
    <p class="info">PM on keskipäivän (klo 12) jälkeen. Post meridiem, kun taas AM ennen sitä, ante meridiem.</p>
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
  key: ["2","4","2","3","4","1","4","3","2","2"]
});</script>
{{< /rawhtml >}}