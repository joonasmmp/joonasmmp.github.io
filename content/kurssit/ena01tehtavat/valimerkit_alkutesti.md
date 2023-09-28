---
title: "Välimerkit: Alkutesti"
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
    <div class="question">Mikä seuraavista on oikein?</div>
    <div class="choices" data-choices='["I often read cookbooks because they are very informative.","I often read cookbooks, because they are very informative.", "I often read cookbooks, because, they are very informative."]'></div>
    <p class="info">Tässä ei tarvita pilkkua, koska aloittava lause on päälause eikä sivulause.</p>
  </section>
  <section data-quiz-item>
    <div class="question">Mikä seuraavista on oikein?</div>
    <div class="choices" data-choices='["If you want to learn comma rules try doing these exercises.","If you want to learn comma rules, try doing these exercises.", "If, you want to learn comma rules, try doing these exercises."]'></div>
    <p class="info">Sivulause aloittaa lauseen (ehtolause), joten pilkku ennen päälausetta.</p>
   </section>
  </div>
  <div class="row">
  <section data-quiz-item>
    <div class="question">Mikä seuraavista on oikein?</div>
    <div class="choices" data-choices='["I would however like to study something else.", "I would, however like to study something else.", "I would, however, like to study something else."]'></div>
    <p class="info">Irrallisiin konnektiiveihin kuten lauseadverbiaaleihin pilkut ympärille.</p>
  </section>
   <section data-quiz-item>
    <div class="question">Mikä seuraavista on oikein?</div> 
    <div class="choices" data-choices='["I love playing with punctuation which might sound like an odd hobby.", "I love playing with punctuation, which might sound like an odd hobby.", "I love playing, with punctuation, which might sound like an odd hobby."]'></div>
    <p class="info">Relatiivipronomini which haluaa pilkun eteensä! Lisää osiossa ENA4.</p>
  </section>
  </div>
   <div class="row">
  <section data-quiz-item>
    <div class="question">Mikä seuraavista on oikein?</div>
    <div class="choices" data-choices='["My dog Walther who is a German Shepherd by the way is amazing at finding lost children.", "My dog Walther, who is a German Shepherd by the way is amazing at finding lost children.", "My dog Walther who is a German Shepherd by the way, is amazing at finding lost children.", "My dog Walther, who is a German Shepherd by the way, is amazing at finding lost children."]'></div>
    <p class="info">Lisätietoa tuova relatiivilause vaatii aina pilkut ympärilleen. Lisätietoa osiossa ENA4.</p>
  </section>
   <section data-quiz-item>
  <div class="question">Mikä seuraavista on oikein?</div>
    <div class="choices" data-choices='["I have my dog with me at all times and he loves my company.", "I have my dog with me at all times, and he loves my company.", "I have my dog with me, at all times, and he loves my company."]'></div>
    <p class="info">Rinnasteiset päälauseet, joiden välissä on and/or/but, erotetaan usein pilkulla.</p>
  </section>
  </div>
    <div class="row">
  <section data-quiz-item>
 <div class="question">Mikä seuraavista on oikein?</div>
    <div class="choices" data-choices='["Even my 85 year old grandma knows the answer to this question!", "Even my 85-year old grandma knows the answer to this question!", "Even my 85-year-old grandma knows the answer to this question!", "Even my 85-year-old-grandma knows the answer to this question!"]'></div>
    <p class="info">Yhdysviivat moniosaisen adjektiivin lailla käytettävän sanayhdistelmän eteen silloin kun se edeltää substantiivia.</p>
  </section>
   <section data-quiz-item>
 <div class="question">Mikä seuraavista on oikein?</div>
    <div class="choices" data-choices='["Are you sure your grandma is 85 years old?", "Are you sure your grandma is 85-years old?", "Are you sure your grandma is 85-years-old?"]'></div>
    <p class="info">Ei yhdysviivoja silloin kun sana on itsenäinen ilman substantiivia</p>
  </section>
  </div>
   <div class="row last">
   <section data-quiz-item>
 <div class="question">Mikä seuraavista on oikein?</div>
    <div class="choices" data-choices='["Yes, I absolutely love my gran. We just spent a two week holiday togehter.", "Yes, I absolutely love my gran. We just spent a two-week holiday togehter.", "Yes, I absolutely love my gran. We just spent a two-week-holiday togehter."]'></div>
    <p class="info">Yhdysviivat moniosaisen adjektiivin lailla käytettävän sanayhdistelmän eteen silloin kun se edeltää substantiivia.</p>
  </section>
  <section data-quiz-item>
    <div class="question">Mikä seuraavista on oikein?</div>
    <div class="choices" data-choices='["The exercises that we do in school are very useful in real life.", "The exercises, that we do in school are very useful in real life.", "The exercises, that we do in school, are very useful in real life."]'></div>
    <p class="info">Ei pilkkua ennen that-lauseita.</p>
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
  key: ["1","2","3","2","4","2","3","1","2","1"]
});</script>
{{< /rawhtml >}}

{{%accordion "Säännöt lyhyesti" %}}
Pilkut:
1. Päälauseen jälkeen tulevaa sivulausetta ei eroteta pilkulla (päälause sivulause).
2. Päälausetta edeltävät sivilauseet erotetaan pilkulla (sivulause, päälause.). 
3. Irrralliset lisäykset, esim relatiivilauseet (who/which), lauseenvastikkeet tai lauseadverbiaalit (besides, however, in fact), erotetaan muusta lauseesta pilkuilla, tosin ei that-alkuisia relatiivilauseita.
4. Pilkulla erotetaan myös rinnasteiset päälauseet (but, and, or) sekä luettelon eri osat.

Yhdysviivat:
1. Käytetään moniosaisen adjektiivin lailla käytettävän sanayhdistelmän eteen silloin kun se edeltää substantiivia. Monesti nämä ovat mittaa ilmaisevia asioita (aika, ikä, hinta), mutta ei aina, esim. "a well-known fact".
2. Ei yhdysviivoja silloin kun sana on itsenäinen ilman substantiivia, esim. "My grandma is 85 years old."
3. Toisin kuin suomessa, yhdysviivoja ei käytetä yhdyssanoissa, joiden ensimmäinen osa on jokin nimi tai lyhennys, kuten TV show, New York, EU member state.
{{% /accordion%}}