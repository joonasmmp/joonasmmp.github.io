---
title: "Relatiivipronominit: Alkutesti"
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
    <div class="question">The United States of America, ______ which is a country in North America, is often called the USA.</div>
    <div class="choices" data-choices='["that","which", "what", "who"]'></div>
    <p class="info">Ainut oikea vaihtoehto on WHICH, koska pilkun kanssa ei voi käyttää that-pronominia.</p>
  </section>
  <section data-quiz-item>
    <div class="question">And in the USA, Angus MacGyver is the kind of man _____ never lets anyone down.</div>
    <div class="choices" data-choices='["whose","which", "what", "who"]'></div>
    <p class="info">Ihmisiin viitattaessa who.</p>
   </section>
  </div>
  <div class="row">
  <section data-quiz-item>
    <div class="question">He is famous for his Swiss army knife _____ he carries around in his pocket.</div>
    <div class="choices" data-choices='["which", "whom", "what", "who"]'></div>
    <p class="info">Esineisiin viitattaessa pronominina toimii which.</p>
  </section>
   <section data-quiz-item>
    <div class="question">The antagonist of the TV show was Murdoc, _____ only purpose was to defeat MacGyver, for some reason.</div> 
    <div class="choices" data-choices='["who", "whom", "whose", "which"]'></div>
    <p class="info">Korrelaatti on henkilö ja prepositio whose viittaa omistamiseen.</p>
  </section>
  </div>
   <div class="row">
  <section data-quiz-item>
    <div class="question">The TV show is also famous for its theme song ____ is an absolute banger.</div>
    <div class="choices" data-choices='["that", "what", "who", "whose"]'></div>
    <p class="info">Viitataan asiaan (kappale) joten pronominiksi käy joko WHICH tai THAT (koska ei ole pilkkua) ja koska yritin säätää tämän tehtävän niin että voit valita usean vaihtoehdon, mutta en onnistunut, niin ainoastaan THAT käy näistä vaihtoehdoista.</p>
  </section>
   <section data-quiz-item>
    <div class="question">_____ I usually think of when I hear the word MacGyver is his awesome hairstyle.</div>
    <div class="choices" data-choices='["that", "what", "which", "who"]'></div>
    <p class="info">What sisältää korrelaatin eikä viittaa mihinkään muuhun asiaan lauseessa. Yleensä tehtävissä se onkin sijoitettu lauseen alkuun.</p>
  </section>
  </div>
    <div class="row">
  <section data-quiz-item>
    <div class="question">My students, to _____ I tell MacGyver facts, aren't interested.</div>
    <div class="choices" data-choices='["who", "what", "whom", "whose"]'></div>
    <p class="info">Korrelaattina on henkilö ja pronominin edessä prepositio, käytetään muotoa whom. Saman voisi sanoa myös who-pronominilla, mutta tällöin prepositio olisi lauseen lopussa: My students, who I tell MacGyver facts to, aren't interested.</p>
  </section>
   <section data-quiz-item>
    <div class="question">What is the best thing ____ MacGyver ever did in your opinion?</div>
    <div class="choices" data-choices='["that", "what", "which", "who"]'></div>
    <p class="info">Korrelaattina on superlatiivi (the best thing), joten yleensä viittauksena toimii THAT.</p>
  </section>
  </div>
   <div class="row last">
   <section data-quiz-item>
    <div class="question">Something ____ people often forget is the name of MacGyver's best friend. It's Pete Thornton.</div>
    <div class="choices" data-choices='["that", "what", "which", "who"]'></div>
    <p class="info">-thing päätteiset korrelaatit saavat yleensä relatiivipronominikseen THAT.</p>
  </section>
  <section data-quiz-item>
    <div class="question">They no longer show MacGyver on TV, _______ makes me sad.</div>
    <div class="choices" data-choices='["that", "what", "which", "who"]'></div>
    <p class="info">Korrelaattina toimii koko lause, joten pilkku ja which on oikea tapa viitata siihen.</p>
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
  key: ["2","4","1","3","1","2","3","1","1","3"]
});</script>
{{< /rawhtml >}}