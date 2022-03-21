---
title: "Epäsuora kerronta: Alkutesti"
date: 2022-21-3
draft: false
type: page
layout: tehtava
---

{{< rawhtml >}}
<link rel="stylesheet" type="text/css" href="/css/monivalinta2.css"/>
<body class="dark:bg-warmgray-900">
<div class="wrap">
  <section data-quiz-item>
    <div class="question">"I have the perfect daughter."</code></div>
    <div class="choices" data-choices='["The father said (that) he has the perfect daughter","The father said (that) he had the perfect daughter", "The father said (that) he has had the perfect daughter"]'></div>
    <p class="info">Johtolauseen verbi vaatii imperfektin</p>
     </section>
  <section data-quiz-item>
    <div class="question">The teacher is proud of his students.</div>
    <div class="choices" data-choices='["Is says here that the teacher is proud of his students.","Is says here that the teacher was proud of his students.","Is says here that the teacher has been proud of his students."]'></div>
    <p class="info">Johtolauseen verbi preesensissä ei kuitenkaan muuta aikamuotoa.</p>
   </section>
  <div class="row">
  <section data-quiz-item>
    <div class="question">"I've landed the job!"</div>
    <div class="choices" data-choices='["She said she lands the job.","She said she landed the job.","She said she has landed the job.","She said she had landed the job."]'></div>
    <p class="info">Johtolauseen verbi vaatii menneen aikamuodon, joten perfekti -> pluskvamperfekti.</p>
  </section>
   <section data-quiz-item>
    <div class="question">Pokémon won't be on TV tomorrow.</div> 
    <div class="choices" data-choices='["My father told me Pokémon is not on TV tomorrow.","My father told me Pokémon will not be on TV tomorrow.", "My father told me Pokémon would not be on TV tomorrow."]'></div>
    <p class="info">Won't = Will not = futuuri, joten johtolauseen verbi vaatii menneen aikamuodon, joten futuuri = konditionaali.</p>
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
  key: ["2","1","4","3","3","1","1"]
});</script>
{{< /rawhtml >}}