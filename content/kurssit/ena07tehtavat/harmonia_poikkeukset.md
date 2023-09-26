---
title: "Aikamuotoharmonia: Poikkeukset"
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
    <div class="question">1. I ______ you've started a new job selling farming equipment.</div>
    <div class="choices" data-choices='["hear","heard", "have heard", "had heard"]'></div>
    <p class="info">Virkkeen alun johdattelevat ilmaisut (hear, understand jne.) poikkeuksellisesti yleispreesensissä perfektin sijasta. </p>
  </section>
  <section data-quiz-item>
    <div class="question">2. Every year, students ____ silly questions when the Sequence of Tenses is discussed on English lessons.</div>
    <div class="choices" data-choices='["ask","are asking", "have asked", "have been asking"]'></div>
    <p class="info">Kun kerrotaan toistuvien tapahtumien (every year) aikaan meneillä olevista tekemisistä, käytetään poikkeuksellisesti kestopreesensiä yleispreesensin sijaan.</p>
   </section>
  </div>
  <div class="row">
  <section data-quiz-item>
    <div class="question">3. I _____ my curriculum vitae in this letter and ____ to hearing from you again. (enclose = liittää [oheen])</div>
    <div class="choices" data-choices='["enclose, look forward", "enclose, am looking forward", "am enclosing, look forward", "am enclosing, looking forawrd"]'></div>
    <p class="info">Tietyt kirjeenvaihtoon liittyvät ilmaisut aina yleispreesensissä. Kestomuodot (I am enclosing, I am looking forward to) toimisivat myös, mutta ovat ehdottomasti puhekielisempiä ja näin ollen muodolliseen kirjeenvaihtoon sopimattomia.</p>
  </section>
   <section data-quiz-item>
    <div class="question">4. It doesn't matter how much you _____, the planet is doomed!</div> 
    <div class="choices" data-choices='["recycle", "are recycling", "will recycle"]'></div>
    <p class="info">Tietyissä ilmaisuissa, esim. in case, I bet, it doesn't matter, I don't care, I don't mind, käytetään yleispreesensiä, vaikka viitataankin tulevaisuuteen.</p>
  </section>
  </div>
   <div class="row">
  <section data-quiz-item>
    <div class="question">5. You speak English much better than I _____.</div>
    <div class="choices" data-choices='["expect", "expected", "have expected", "had expected"]'></div>
    <p class="info">Aikamuotoharmoniasta voidaan poiketa, jos kyseessä on uskomus, joka on juuri todistettu oikeaksi tai vääräksi.</p>
  </section>
   <section data-quiz-item>
    <div class="question">6. This is the first time I _____ any problems with verb tenses.</div>
    <div class="choices" data-choices='["have", "am having", "have had", "have been having"]'></div>
    <p class="info">Ilmauksissa this is the first/joku muu järjestysluku/best/worst time käytetään poikkeuksellisesti preesensin sijasta perfektiä, vaikka kyseessä olisikin parhaillaan käynnissä oleva tapahtuma.!</p>
  </section>
     <div class="row">
  <section data-quiz-item>
    <div class="question">7. It's high time we ____ doing this stupid exercises and get on with the lesson!</div>
    <div class="choices" data-choices='["stop", "are stopping", "stopped", "will stop"]'></div>
    <p class="info">High time-ilmauksen yhteydessä käytetään poikkeuksellisesti imperfektiä, vaikka viitataankin nykyhetkeen.</p>
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
  key: ["1","2","1","1","2","3","3"]
});</script>
{{< /rawhtml >}}