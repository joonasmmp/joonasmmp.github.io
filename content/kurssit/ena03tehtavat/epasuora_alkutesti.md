---
title: "Epäsuora kerronta: Alkutesti"
date: 2022-21-3
draft: false
type: page
layout: tehtava
---
Muunna lauseet epäsuoraan kerrontaan sopiviksi.
{{< rawhtml >}}
<link rel="stylesheet" type="text/css" href="/css/monivalinta2.css"/>
<body class="dark:bg-warmgray-900">
<div class="wrap">
  <section data-quiz-item>
    <div class="question">"1. I have the perfect daughter."</code></div>
    <div class="choices" data-choices='["The father said (that) he has the perfect daughter","The father said (that) he had the perfect daughter", "The father said (that) he has had the perfect daughter"]'></div>
    <p class="info">Johtolauseen verbi vaatii imperfektin.</p>
     </section>
  <section data-quiz-item>
    <div class="question">2. The teacher is proud of his students.</div>
    <div class="choices" data-choices='["It says here that the teacher is proud of his students.","It says here that the teacher was proud of his students.","It says here that the teacher has been proud of his students."]'></div>
    <p class="info">Johtolauseen verbi preesensissä ei vaadi aikamuotojen muutosta.</p>
   </section>
  <div class="row">
  <section data-quiz-item>
    <div class="question">3. "I've landed the job!"</div>
    <div class="choices" data-choices='["She said she lands the job.","She said she landed the job.","She said she has landed the job.","She said she had landed the job."]'></div>
    <p class="info">Johtolauseen verbi vaatii menneen aikamuodon, joten perfekti -> pluskvamperfekti.</p>
  </section>
   <section data-quiz-item>
    <div class="question">4. "Pokémon won't be on TV tomorrow."</div> 
    <div class="choices" data-choices='["My father told me Pokémon is not on TV the following day.","My father told me Pokémon will not be on TV the following day.", "My father told me Pokémon would not be on TV the following day."]'></div>
    <p class="info">Won't = Will not = futuuri, joten johtolauseen verbi vaatii menneen aikamuodon, joten futuuri = konditionaali. Today muuttuu muotoon the day after tai the next/following day. 3 </p>
  </section>
  </div>
   <div class="row">
  <section data-quiz-item>
    <div class="question">5. It may be too late to start studying.</div>
    <div class="choices" data-choices='["My mother told me it is too late to start studying.","My mother told me it was too late to start studying.","My mother told me it may be too late to start studying.","My mother told me it might be too late to start studying."]'></div>
    <p class="info">Modaaliapuverbeissä myös muutoksia, tässä tapauksesssa may -> might</p>
  </section>
   <section data-quiz-item>
    <div class="question">6. "I put them here yesterday!"</div>
    <div class="choices" data-choices='["Peter told me he put them here yesterday.", "Peter told me he put them there yesterday.", "Peter told me he put them here the day before.", "Peter told me he put them there the day before."]'></div>
    <p class="info">Tarkkana demonstratiivipronominien ja ajan ja paikan ilmaisujen kanssa! Here -> there koska paikka ei ole sama. Yesterday -> the day before koska eihän päiväkään ole välttämättä sama.</p>
  </section>
  </div>
   <div class="row">
  <section data-quiz-item>
    <div class="question">7. "What do you think of this shirt?"</div>
    <div class="choices" data-choices='["Chantel asked me what do you think of that shirt", "Chantel asked me what I think of that shirt", "Chantel asked me what I thought of that shirt", "Chantel asked me what did I think of this shirt"]'></div>
    <p class="info">This -> that, lisäksi do-apuverbi katoaa muissa kuin kielteisissä kysymyksissä. Pääverbi muuttuu imperfektiksi.</p>
  </section>
   <section data-quiz-item>
    <div class="question">8. "Your expectations are too high!"</div>
    <div class="choices" data-choices='["I pointed ouf that your expectations are too high.", "I pointed out that their expectations are too high.", "I pointed out that their expectations were too high.", "I pointed out that your expectations were too high."]'></div>
    <p class="info">Pronominit muuttuvat eli myöhemmin kerrottuna YOU ei ole enää YOU vaan THEY. Verbi muuttuu myös tietty imperfektiksi.</p>
  </section>
  </div>
   <div class="row last">
  <section data-quiz-item>
    <div class="question">9. "What is your biggest weakness?"</div>
    <div class="choices" data-choices='["They wanted to know what is my biggest weakness.","They wanted to know what was my biggest weakness.", "They wanted to know what my biggest weakness is.", "They wanted to know what my biggest weakness was."]'></div>
    <p class="info">What-alkuisessa kysymyksessä kysymyssana säilyy. AIkamuoto johtolauseen mukaan imperfektiksi ja sanajärjestys kääntyy suoraksi. </p>
  </section>
   <section data-quiz-item>
    <div class="question">10. "Do you have any questions?</div>
    <div class="choices" data-choices='["The teacher asked if we had any questions.","The teacher asked do we have any questions.", "The teacher asked if we do have any questions.", "The teacher asked did we have any questions."]'></div>
    <p class="info">Mikäli kysymys alkaa verbillä, vaaditaan alkuun joko if tai whether. Do-verbi jää pois muissa kuin kielteisissä kysymyksissä. </p>
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
  key: ["2","1","4","3","4","4","3","3","4","1"]
});</script>
{{< /rawhtml >}}