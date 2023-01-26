---
title: "Relatiivipronominit: Alkutesti"
date: 2023-1-1
draft: false
type: page
layout: tehtava
---
Mikä pääte sopii? Joudut ehkä muuttamaan kantasanaa.

{{< rawhtml >}}
<link rel="stylesheet" type="text/css" href="/css/monivalinta2.css"/>
<body class="dark:bg-warmgray-900">
<div class="wrap">
  <div class="row">
  <section data-quiz-item>
    <div class="question">Kieltäytyminen = refuse...</div>
    <div class="choices" data-choices='["-ment","-al", "-age"]'></div>
  </section>
  <section data-quiz-item>
    <div class="question">Kirjastonhoitaja = library...</div>
    <div class="choices" data-choices='["-ist","-ian", "-ant"]'></div>
   </section>
  </div>
  <div class="row">
  <section data-quiz-item>
    <div class="question">Työntekijä = employ...</div>
    <div class="choices" data-choices='["-er", "-ee", "-ist"]'></div>
    <p class="info">Employer = työnantaja</p>
  </section>
   <section data-quiz-item>
    <div class="question">Hoito = treat...</div> 
    <div class="choices" data-choices='["-ation", "-age", "-ment"]'></div>
    </section>
  </div>
   <div class="row">
  <section data-quiz-item>
    <div class="question">Jäsenyys = member...</div>
    <div class="choices" data-choices='["-ing", "-ance", "-ship"]'></div>
  </section>
   <section data-quiz-item>
    <div class="question">Keinottelija = profit..</div>
    <div class="choices" data-choices='["-or", "-eer", "-ant"]'></div>
  </section>
  </div>
    <div class="row">
  <section data-quiz-item>
    <div class="question">Varmuus = certain...</div>
    <div class="choices" data-choices='["-ness", "-ment", "-ty"]'></div>
   </section>
   <section data-quiz-item>
    <div class="question">Puute = short...</div>
    <div class="choices" data-choices='["-ness", "-age", "-acy"]'></div>
  </section>
  </div>
   <div class="row last">
   <section data-quiz-item>
    <div class="question">Veljeys = brother...</div>
    <div class="choices" data-choices='["-ity", "-hood", "-dom"]'></div>
  </section>
  <section data-quiz-item>
    <div class="question">Tylsistyminen = bore...</div>
    <div class="choices" data-choices='["-ence", "-ship", "-dom"]'></div>
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
  key: ["2","2","2","3","3","2","3","2","2","3"]
});</script>
{{< /rawhtml >}}