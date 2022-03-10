---
title: "Testi, testi, testi"
date: 2021-8-13
draft: false
type: page
layout: tehtava
---

{{< rawhtml >}}
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
    <div class="question">Lassen uusin heila Joanna on poliisi.</div> 
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
    <p class="info">Syö paskaa</p>
  </section>
  </div>
   <div class="row last">
  <section data-quiz-item>
    <div class="question">Löytyykö bugeja?</div>
    <div class="choices" data-choices='["Kyllä","Ei"]'></div>
    <p class="info">Ainakin dark mode on vituiillaan mut korjaan sen.</p>
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

<style>
.row:after {
  clear: both;
  content: "";
  display: table;
}
.row:before {
  content: "";
  display: table;
}

*, *:after, *:before {
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
}

.wrap body {
  background: #fff;
  font-family: 'Raleway';
  line-height: 1.55;
  color: #737373;
  font-weight: 400;
}

.wrap body a {
  color: #27b198;
  text-decoration: none;
  border-bottom: 2px solid #fff;
}

.wrap body a:hover {
  border-color: #eeeeee;
}

code {
  background: #fff;
  color: #999999;
  padding: 2px 8px;
}

header {
  position: relative;
  text-align: center;
  text-transform: uppercase;
  color: #ff5c00;
  border-bottom: 1px solid dareken(#2dceb1, 15%);
  letter-spacing: 4px;
  padding: 12px 0;
  background: #fafafa;
  border-bottom: 1px solid #eeeeee;
}

.wrap {
  max-width: 48em;
  margin: 0 auto;
  padding: 2.5em 0 4em;
}

.row.last {
  border-bottom: 1px solid #eeeeee;
}

.dark section {
  background: #1f2937;
  color: #FFFFFF;
}



section {
  position: relative;
  padding: 30px 20px;
  width: 100%;
  min-height: 8em;
  float: left;
  background: #fafafa;
  border-top: 1px solid #eeeeee;
  border-left: 1px solid #eeeeee;
}
section:nth-child(even) {
  border-right: 1px solid #eeeeee;
}
section.item-incorrect {
  background: #f6f6f6;
}

.info.item-correct {
    display: none;
}

.info {
  display: none;
}

.info.item-incorrect {
  display: flex
}

p.info {
    color: #ff5c61;
    font-size: .8em;
}

section p {
  display:none;
}

section.item-correct p {
  display: none;
}

section.item-incorrect p {
  display: flex;
}

section.item-incorrect:before {
  position: absolute;
  z-index: 399;
  bottom: 0;
  right: 0;
  content: "";
  height: 0;
  width: 0;
  border: 35px solid;
  border-color: transparent #ff5c61 #ff5c61 transparent;
}
section.item-incorrect:after {
  line-height: 1.4;
  position: absolute;
  z-index: 499;
  font-family: 'fontawesome';
  bottom: 0;
  right: 7px;
  font-size: 1.9em;
  color: #ff383e;
}

section.item-correct:before {
  position: absolute;
  z-index: 399;
  bottom: 0;
  right: 0;
  content: "";
  height: 0;
  width: 0;
  border: 35px solid;
  border-color: transparent #48d7bd #48d7bd transparent;
}
section.item-correct:after {
  line-height: 1.4;
  position: absolute;
  z-index: 499;
  font-family: 'fontawesome';
  bottom: 0;
  right: 7px;
  font-size: 1.9em;
  color: #2dceb1;
}

input[type="radio"] {
  position: absolute;
  visibility: hidden;
  padding-left: 1em;
  padding-right: 1em;
  width: 100%;
}

input[type="radio"] + label {
  background: #fff;
  display: inline-block;
  padding: 5px 15px;
  margin: 5px 10px 5px 0;
  border: 1px solid #eeeeee;
  -webkit-transition: all 0.1s linear;
  -moz-transition: all 0.1s linear;
  transition: all 0.1s linear;
}
input[type="radio"] + label:before {
  font-family: 'fontawesome';
  margin-right: 7px;
  color: #FFFFFF;
}
input[type="radio"] + label:hover {
  cursor: pointer;
}
input[type="radio"]:checked + label {
  background: #00ABC3;
  color: #FFFFFF;
}

input.item-incorrect[type="radio"]:checked + label {
  background: #ff383e;
  color: #FFFFFF;
}

input[type="radio"]:checked + label:before {
  color: #FFFFFF;
}

.item-incorrect input[type=radio]:checked+label {
    background-color: #ff383e;
}

.item-correct input[type=radio]:checked+label {
    background-color: #2dceb1;
}

.question {
}

.submit {
  padding: 20px 5px;
}
.submit button {
  display: block;
  outline: none;
  width: 300px;
  margin: 1em auto 1.5em;
  padding: .8em 1em;
  background: #f8f8f8;
  color: gainsboro;
  text-transform: uppercase;
  letter-spacing: 3px;
  border: 1px solid #eeeeee;
}

#emc-score {
  text-align: center;
  opacity: 0;
  padding: 0;
  -webkit-transition: all 0.55s ease;
  -moz-transition: all 0.55s ease;
  transition: all 0.55s ease;
}
#emc-score.new-score {
  opacity: 1;
  background: #2dceb1;
  color: #fbfbfb;
  padding: 20px;
}

#emc-submit {
  position: relative;
  -webkit-transition: all 0.33s ease;
  -moz-transition: all 0.33s ease;
  transition: all 0.33s ease;
}
#emc-submit.ready-show {
  background: #1F2937;
  color: #fff;
  border: none;
    box-shadow: 0 1px 1px rgba(68, 68, 68, 0.2);
  -webkit-transform: rotateX(360deg);
  -moz-transform: rotateX(360deg);
  -ms-transform: rotateX(360deg);
  -o-transform: rotateX(360deg);
  transform: rotateX(360deg);
}
#emc-submit.ready-show:hover {
  color: #fbfbfb;
  background: #ff5c00;
  border-color: #ff5c00;
}
#emc-submit.ready-show:active {
  top: 2px;
  border-bottom: none;
}

.attrib {
  padding: 10px 0;
  text-align: center;
}
.attrib i {
  margin-right: 7px;
  margin-left: 7px;
}
</style>

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