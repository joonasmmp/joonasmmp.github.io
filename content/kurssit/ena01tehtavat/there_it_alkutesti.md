---
title: "Muodolliset subjektit: Alkutesti"
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
    <div class="question">_____ is nice and hot today. Let's go outside!</div>
    <div class="choices" data-choices='["There", "It"]'></div>
    <p class="info">Sään kanssa aina it, kun kyseessä on adjektiivi.</p>
  </section>
  <section data-quiz-item>
    <div class="question">_____ was a storm last night. My flowers are ruined.</div>
   <div class="choices" data-choices='["There", "It"]'></div>
    <p class="info">Sään kanssa aina there, kun kyseessä on substantiivi.</p>
   </section>
  </div>
  <div class="row">
  <section data-quiz-item>
    <div class="question">_____ is so nice to see you today.</div>
     <div class="choices" data-choices='["There", "It"]'></div>
    <p class="info">Mielipide, tunne, yleinen ajatus -> it.</p>
  </section>
   <section data-quiz-item>
    <div class="question">_____ was something wrong with him, I'm really worried.</div> 
   <div class="choices" data-choices='["There", "It"]'></div>
    <p class="info">Jossain oli jotakin -> there.</p>
  </section>
  </div>
   <div class="row">
  <section data-quiz-item>
    <div class="question">_____ is a long way from here to Albuquerque. Let's hurry.</div>
   <div class="choices" data-choices='["There", "It"]'></div>
    <p class="info">Välimatkoissa aina it.</p>
  </section>
   <section data-quiz-item>
  <div class="question">_____ smells awful here. Have you showered recently?</div>
   <div class="choices" data-choices='["There", "It"]'></div>
    <p class="info">Viittaus yleiseen tilaan tai olosuhteeseen -> it.</p>
  </section>
  </div>
    <div class="row">
  <section data-quiz-item>
 <div class="question">_____ is my birthday today. Where's my present?</div>
   <div class="choices" data-choices='["There", "It"]'></div>
    <p class="info">Ajan ilmaisu -> it.</p>
  </section>
   <section data-quiz-item>
 <div class="question">_____ was someone outside last night, but he ran away when he saw me.</div>
   <div class="choices" data-choices='["There", "It"]'></div>
    <p class="info">Jossain oli jotakin -> there.</p>
  </section>
  </div>
   <div class="row last">
   <section data-quiz-item>
 <div class="question">_____ is interesting to hear what he's been doing the past four years.</div>
   <div class="choices" data-choices='["There", "It"]'></div>
    <p class="info">Mielipide -> It.</p>
  </section>
  <section data-quiz-item>
    <div class="question">_____ was my father who taught me to talk French. Je suis un passport.</div>
   <div class="choices" data-choices='["There", "It"]'></div>
    <p class="info">Jonkin asian korostus -> it..</p>
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
  key: ["2","1","2","1","2","2","2","1","2","2"]
});</script>
{{< /rawhtml >}}

{{%accordion "Säännöt lyhyesti" %}}
Pilkut:
1. Päälauseen jälkeen tulevaa sivulausetta ei eroteta pilkulla (päälause sivulause).
2. Päälausetta edeltävät sivilauseet erotetaan pilkulla (sivulause, päälause.). 
3. Irrralliset lisäykset, esim relatiivilauseet (who/which/that), lauseenvastikkeet tai lauseadverbiaalit (besides, however, in fact), erotetaan muusta lauseesta pilkuilla, tosin ei that-alkuisia relatiivilauseita.
4. Pilkulla erotetaan myös rinnasteiset päälauseet (but, and, or) sekä luettelon eri osat.

Yhdysviivat:
1. Käytetään moniosaisen adjektiivin lailla käytettävän sanayhdistelmän eteen silloin kun se edeltää substantiivia. Monesti nämä ovat mittaa ilmaisevia asioita (aika, ikä, hinta), mutta ei aina, esim. "a well-known fact".
2. Ei yhdysviivoja silloin kun sana on itsenäinen ilman substantiivia, esim. "My grandma is 85 years old."
3. Toisin kuin suomessa, yhdysviivoja ei käytetä yhdyssanoissa, joiden ensimmäinen osa on jokin nimi tai lyhennys, kuten TV show, New York, EU member state.
{{% /accordion%}}