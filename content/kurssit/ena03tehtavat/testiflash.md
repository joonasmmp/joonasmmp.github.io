---
title: "Testi, testi, flashcard"
date: 2021-8-13
draft: false
type: page
layout: tehtava
---

{{< rawhtml >}}
<!DOCTYPE html>
 <body>
  <div id="activityTitle">English/Spanish Flashcards</div>
  <div id="cardArea"></div>
  <div id="buttonArea"></div>
 </body>
</html>

<style>
    html, body {
 margin: 0;
 padding: 0;
 -webkit-user-select: none;
 -moz-user-select: none;
 user-select: none;
}
@font-face {
 font-family: Montserrat;
 src: url('Montserrat-Medium.ttf');
}
#activityTitle{
 text-align:center;
 font-size:38px;
 font-family:Montserrat,Arial;
 margin-top:50px;
}
#cardArea{
 width:300px;
 height:200px;
 margin:auto;
 margin-top:80px;
 border:3px solid #ABB7B7;
 border-radius:5px;
 position:relative;
 overflow:hidden;
}
.card{
 width:300px;
 height:200px;
 position:absolute;
 text-align:center;
 line-height:200px;
 font-size:45px;
 color:#efefef;
 font-family:Montserrat,Arial;
 cursor:pointer;
}
#nextButton{
 width:80px;
 text-align:center;
 font-size:20px;
 padding:10px;
 cursor:pointer;
 color:#efefef;
 margin:auto;
 margin-top:30px;
 background-color:#019875;
 border: 2px solid #1E824C;
 border-radius:5px;
 font-family:Montserrat,Arial;
}
#nextButton:hover{
 opacity:.6;
}
#finalMessage{
 text-align:center;
 font-size:30px;
 margin-top:30px;
 font-family:Montserrat,Arial;
}
</style>

<script> $(document).ready(function () {

 var colorArray=["#019875","#1E8BC3","#D91E18","#D35400","#8E44AD","#C0392B"];
 var cardState;
 var currentQuestion=0;
 var qbank=new Array;

 loadDB();

function loadDB(){
 $.getJSON("../database/testi.json", function(data) {
  for(i=0;i<data.questionlist.length;i++){
   qbank[i]=[];
   qbank[i][0]=data.questionlist[i].cardfront;
   qbank[i][1]=data.questionlist[i].cardback;
  }//for
  beginActivity();
 })//gtjson
}//loadDB

 function beginActivity(){
  cardState=0;
  var color1=colorArray[Math.floor(Math.random()*colorArray.length)];
  $("#cardArea").empty();
  $("#cardArea").append('<div id="card1" class="card">' + qbank[currentQuestion][0] + '</div>');
  $("#cardArea").append('<div id="card2" class="card">' + qbank[currentQuestion][1] + '</div>');
  $("#card1").css("background-color",color1);
  $("#card2").css("background-color","#34495E");
  $("#card2").css("top","200px");
  $("#cardArea").on("click",function(){
   if(cardState!=1){
    cardState=1;
    //togglePosition();
    $("#card1").animate({top: "-=200"}, 150, function() {cardState=0;togglePosition();});
    $("#card2").animate({top: "-=200"}, 150, function() {togglePosition2();});
   }//if
  });//click function
  currentQuestion++;
  $("#buttonArea").empty();
  $("#buttonArea").append('<div id="nextButton">NEXT</div>');
  $("#nextButton").on("click",function(){
   if(currentQuestion<qbank.length){beginActivity();}
   else{displayFinalMessage();}
  });//click function
 }//beginactivity

 function togglePosition(){
  if($("#card1").position().top==-200){$("#card1").css("top","200px");};
 }//toggle

 function togglePosition2(){
  if($("#card2").position().top==-200){$("#card2").css("top","200px");};
 }//toggle2

 function displayFinalMessage(){
  $("#buttonArea").empty();
  $("#cardArea").empty();
  $("#cardArea").append('<div id="finalMessage">You have finished the activity.</div>');
 }//final message
});</script>

{{< /rawhtml >}}