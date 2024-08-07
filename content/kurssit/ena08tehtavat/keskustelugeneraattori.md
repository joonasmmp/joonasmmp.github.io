---
title: "Keskustelunavausgeneraattori"
date: 2021-8-13
draft: false
type: page
layout: tehtava
---

{{< rawhtml >}}
<div id="cardArea"></div>
<div id="buttonArea" class="grid grid-cols-1"></div>

<script>
$(document).ready(function() {

  var currentQuestion = 0;
  var qbank = [
["What's your favorite movie and why do you like it?"],
["If you could travel anywhere in the world, where would you go?"],
["What is your dream job and why?"],
["Do you prefer reading books or watching movies? Why?"],
["What is your favorite season and what do you like to do during that time?"],
["If you could have any superpower, what would it be?"],
["What is your favorite hobby and how did you get into it?"],
["Who is someone you look up to and why?"],
["What is the best vacation you’ve ever had?"],
["Do you prefer cats or dogs? Why?"],
["What’s your favorite food and how often do you eat it?"],
["If you could meet any historical figure, who would it be and why?"],
["What’s your favorite holiday and how do you celebrate it?"],
["If you could live in any time period, which one would you choose?"],
["Do you prefer the city or the countryside? Why?"],
["What’s the best gift you’ve ever received?"],
["What’s something you’ve always wanted to learn?"],
["Do you have any hidden talents? What are they?"],
["What’s your favorite way to relax after a long day?"],
["If you could be any animal, which one would you be and why?"],
["What’s the most interesting place you’ve visited?"],
["What’s your favorite song or music genre?"],
["If you could change one thing about the world, what would it be?"],
["What’s your favorite thing to do on the weekend?"],
["If you had a time machine, would you go to the past or the future?"],
["What’s the most memorable book you’ve read?"],
["What’s your favorite childhood memory?"],
["Do you enjoy playing video games? Which ones?"],
["If you could have dinner with anyone, dead or alive, who would it be?"],
["What’s your favorite way to spend a rainy day?"],
["Do you prefer sweet or savory snacks?"],
["What’s the most unusual food you’ve ever tried?"],
["What’s your favorite type of weather?"],
["Do you like surprises? Why or why not?"],
["What’s something that always makes you laugh?"],
["What’s the best advice you’ve ever received?"],
["Do you like to plan things out or be spontaneous?"],
["What’s a skill you’d like to develop?"],
["What’s your favorite family tradition?"],
["If you won the lottery, what would you do with the money?"],
["What is the most adventurous thing you’ve ever done?"],
["Do you prefer mornings or evenings? Why?"],
["What’s your favorite way to stay active?"],
["If you could learn any language, which one would you choose and why?"],
["What’s your favorite way to celebrate your birthday?"],
["Do you have a favorite quote or saying? What is it?"],
["What’s something you’re really proud of?"],
["If you could instantly become an expert in something, what would it be?"],
["What’s your favorite TV show or series?"],
["Do you prefer the beach or the mountains?"],
["What’s your favorite thing about your hometown?"],
["If you could create a new holiday, what would it be and how would people celebrate it?"],
["What’s your favorite thing to do with your friends?"],
["What’s the best concert you’ve ever been to?"],
["Do you prefer to cook at home or eat out?"],
["What’s your favorite sport to watch or play?"],
["If you could have any job for a day, what would it be?"],
["What’s something that you find really interesting or fascinating?"],
["Do you like to make plans in advance or do things last minute?"],
["What’s your favorite app or website?"],
["What’s the coolest gadget or piece of technology you own?"],
["If you could redesign your school, what changes would you make?"],
["What’s your favorite type of art or creative activity?"],
["Do you prefer summer or winter activities?"],
["What’s the most important lesson you’ve learned so far?"],
["What’s your favorite thing to do when you have free time?"],
["If you could swap lives with someone for a week, who would it be?"],
["What’s the best book you’ve ever read?"],
["Do you like to plan for the future or live in the moment?"],
["What’s your favorite type of clothing or fashion style?"],
["If you could only eat one type of food for a month, what would it be?"],
["What’s your favorite way to spend time outdoors?"],
["Do you enjoy puzzles or brain games?"],
["What’s your favorite thing to do on a rainy day?"],
["If you could have a conversation with any fictional character, who would it be?"],
["What’s the best thing about being a student?"],
["Do you like to listen to music while you work or study?"],
["What’s your favorite holiday tradition?"],
["What’s something you’re curious about and would like to learn more about?"],
["Do you prefer working in a team or alone?"],
["What’s your favorite ice cream flavor?"],
["If you could live in any fictional world, which one would you choose?"],
["What’s your favorite memory from elementary school?"],
["Do you prefer board games or card games?"],
["What’s the best piece of advice you’ve ever given to someone else?"],
["What’s your favorite type of movie: comedy, drama, action, or horror?"],
["Do you have any phobias or things that scare you?"],
["What’s your favorite type of weather and why?"],
["Do you like to follow trends or set your own style?"],
["What’s your favorite type of exercise or workout?"],
["If you could host a talk show, who would be your first guest?"],
["What’s your favorite holiday destination?"],
["Do you prefer writing by hand or typing on a computer?"],
["What’s your favorite way to stay healthy?"],
["Do you have any unusual collections or hobbies?"],
["What’s your favorite thing about weekends?"],
["What’s the most important quality in a friend?"],
["What’s your favorite way to unwind and relax?"],
["What’s your favorite kind of dessert?"],
["If you could change one thing about your school, what would it be?"],
["What’s your favorite subject in school and why?"],
["Do you prefer to stay up late or wake up early?"],
["What’s your favorite game to play?"],
["If you could be any fictional character for a day, who would you be?"],
["What’s something you’re passionate about?"],
["Do you prefer spending time indoors or outdoors?"],
["What’s your favorite animal and why?"],
["If you could invent something, what would it be?"],
["What’s the most important thing you’ve learned from a teacher?"],
["Do you prefer tea or coffee?"],
["What’s your favorite type of clothing to wear?"],
["If you could go on a road trip with anyone, who would it be?"],
["What’s your favorite thing to do during the holidays?"],
["Do you enjoy doing crafts or DIY projects?"],
["What’s your favorite type of music to dance to?"],
["If you could have any animal as a pet, what would it be?"],
["What’s your favorite way to stay in touch with friends?"],
["Do you prefer shopping online or in-store?"],
["What’s something you’d like to try but haven’t yet?"],
["If you could change one thing about yourself, what would it be?"],
["What’s your favorite outdoor activity?"],
["Do you like to watch the news? Why or why not?"],
["What’s your favorite childhood book?"],
["If you could make a movie, what would it be about?"],
["What’s your favorite type of fruit?"],
["Do you prefer winter or summer holidays?"],
["What’s the best meal you’ve ever had?"],
["Do you like to follow a routine or mix things up?"],
["What’s your favorite thing to do at the beach?"],
["If you could visit any planet, which one would you choose?"],
["What’s your favorite app on your phone?"],
["Do you enjoy cooking or baking?"],
["What’s something you’re really good at?"],
["If you could speak to your future self, what would you ask?"],
["What’s your favorite way to spend a day off?"],
["Do you prefer watching movies at home or in the theater?"],
["What’s your favorite thing about your best friend?"],
["If you could create your own business, what would it be?"],
["What’s the most challenging thing you’ve ever done?"],
["Do you like trying new foods?"],
["What’s your favorite way to stay fit?"],
["If you could go back in time, what advice would you give to your younger self?"],
["What’s your favorite snack?"],
["Do you enjoy playing sports? Which ones?"],
["What’s your favorite type of flower?"],
["If you could design your perfect home, what would it look like?"],
["What’s the best compliment you’ve ever received?"],
["Do you like to watch documentaries? Why or why not?"],
["What’s your favorite type of weather and why?"],
["If you could meet any celebrity, who would it be?"],
["What’s your favorite way to express yourself creatively?"],
["Do you prefer books or e-books?"],
["What’s your favorite way to celebrate special occasions?"],
["If you could change one thing about your community, what would it be?"],
["What’s your favorite season and why?"],
["Do you enjoy visiting museums or galleries?"],
["What’s your favorite thing about nature?"],
["If you could have any job in the world, what would it be?"],
["What’s your favorite type of movie plot or genre?"],
["Do you prefer big cities or small towns?"],
["What’s your favorite thing to do on a lazy day?"],
["If you could write a book, what would it be about?"],
["What’s your favorite type of pie?"],
["Do you enjoy listening to podcasts? What are your favorites?"],
["What’s your favorite family recipe?"],
["If you could visit any fictional place, where would you go?"],
["What’s the most beautiful place you’ve ever seen?"],
["Do you prefer taking photos or videos?"],
["What’s your favorite way to learn something new?"],
["If you could make one wish, what would it be?"],
["What’s your favorite way to spend a Saturday night?"],
["Do you like participating in school clubs or activities?"],
["What’s your favorite board game?"],
["If you could be any age for a week, what age would you choose?"],
["What’s your favorite thing about your culture?"],
["Do you prefer writing stories or essays?"],
["What’s your favorite candy or sweet treat?"],
["If you could decorate your room any way you wanted, what would it look like?"],
["What’s your favorite thing about weekends?"],
["Do you like to volunteer or help others? How do you do it?"],
["What’s the most interesting fact you know?"],
["Do you prefer sunny or rainy days?"],
["What’s the best project you’ve worked on at school?"],
["What’s your favorite type of cake?"],
["Do you enjoy gardening?"],
["What’s the most surprising thing that’s ever happened to you?"],
["If you could be a character in any book, who would you be?"],
["What’s your favorite kind of breakfast?"],
["Do you prefer watching sports or playing them?"],
["What’s your favorite time of day?"],
["If you could have any fictional creature as a pet, what would it be?"],
["What’s the best prank you’ve ever played on someone?"],
["Do you like to plan out your week or go with the flow?"],
["What’s your favorite thing to do at a park?"],
["If you could visit any country, which one would it be?"],
["What’s your favorite kind of sandwich?"],
["Do you prefer the sunrise or the sunset?"],
["What’s the most creative thing you’ve ever done?"],
["If you could be famous for one thing, what would it be?"],
["What’s your favorite type of ice cream topping?"],
["Do you like to sing in the shower?"],
["What’s the best advice you’ve ever given?"],
["What’s your favorite way to spend a Sunday afternoon?"],
["If you could create a new sport, what would it be like?"],
["What’s your favorite thing about your school?"],
["Do you like to wear accessories? What kinds?"],
["What’s your favorite thing to do with your family?"],
["If you could be any mythical creature, which one would you choose?"],
["What’s your favorite way to celebrate an achievement?"],
["Do you prefer digital or analog clocks?"],
["What’s the best thing you’ve ever built or created?"],
["If you could live in any country, which one would you choose?"],
["What’s your favorite type of cheese?"],
["Do you enjoy solving riddles or puzzles?"],
["What’s your favorite type of juice?"],
["If you could attend any event in history, which one would you choose?"],
["What’s your favorite type of salad?"],
["Do you prefer gold or silver jewelry?"],
["What’s the funniest thing that’s ever happened to you?"],
["If you could have any job in the world, what would it be?"],
["What’s your favorite type of soup?"],
["Do you like to dance? What’s your favorite style?"],
["What’s your favorite kind of cookie?"],
["If you could redesign the school uniform, what would it look like?"],
["What’s your favorite way to cool down on a hot day?"],
["Do you like to play card games? Which ones?"],
["What’s the best thing about your favorite season?"],
["If you could be a professional athlete, what sport would you play?"],
["What’s your favorite pizza topping?"],
["Do you enjoy playing musical instruments? Which ones?"],
["What’s your favorite thing to do at a fair or amusement park?"],
["If you could create a new flavor of ice cream, what would it be?"],
["What’s your favorite way to spend time with your grandparents?"],
["Do you prefer hot or cold drinks?"],
["What’s the most difficult thing you’ve ever learned to do?"],
["If you could have a conversation with your future self, what would you ask?"],
["What’s your favorite type of pasta?"],
["Do you like to follow fashion trends or set your own style?"],
["What’s your favorite thing about nature?"],
["If you could learn to do anything, what would it be?"],
["What’s your favorite type of muffin?"],
["Do you prefer staying in hotels or camping?"],
["What’s the most interesting dream you’ve ever had?"],
["If you could change one thing about your daily routine, what would it be?"],
["What’s your favorite way to stay motivated?"],
["Do you prefer spicy or mild food?"],
["What’s your favorite type of candy?"],
["If you could have any job in the future, what would it be?"],
["What’s your favorite way to spend a long weekend?"],
["Do you like to watch movies more than once?"],
["What’s your favorite thing about school breaks?"],
["If you could have any piece of technology, what would it be?"],
["What’s your favorite way to help others?"],
["Do you prefer classical music or modern music?"],
["What’s your favorite type of tree?"],
["If you could live in any era, which one would you choose?"],
["What’s your favorite kind of sushi?"],
["Do you enjoy doing puzzles?"],
["What’s the best gift you’ve ever given someone?"],
["If you could change one thing about your home, what would it be?"],
["What’s your favorite type of sandwich?"],
["Do you like to keep a journal or diary?"],
["What’s the best book you’ve read recently?"],
["If you could meet any historical figure, who would it be?"],
["What’s your favorite thing to do on a rainy day?"],
["Do you prefer salty or sweet snacks?"],
["What’s the most exciting thing you’ve ever done?"],
["If you could speak any language fluently, which one would you choose?"],
["What’s your favorite type of breakfast cereal?"],
["Do you enjoy drawing or painting?"],
["What’s the best advice you’ve ever received?"],
["If you could live anywhere, where would it be?"],
["What’s your favorite kind of candy bar?"],
["Do you like to go to the movies or watch at home?"],
["What’s your favorite way to spend a holiday?"],
["If you could play any instrument, what would it be?"],
["What’s your favorite type of cookie?"],
["Do you prefer reading fiction or non-fiction?"],
["What’s the most beautiful place you’ve ever visited?"],
["If you could invent something, what would it be?"],
["What’s your favorite type of flower?"],
["Do you enjoy baking?"],
["What’s your favorite thing to do with your friends?"],
["If you could change one thing about the world, what would it be?"],
["What’s your favorite type of sandwich filling?"],
["Do you prefer action movies or comedies?"],
["What’s the most challenging part of your day?"],
["If you could learn any skill instantly, what would it be?"],
["What’s your favorite kind of pie?"],
["Do you like to go for walks or runs?"],
["What’s your favorite way to relax?"],
["If you could have a superpower, what would it be?"],
["What’s your favorite type of cake?"],
["Do you prefer cats or dogs?"],
["What’s the most interesting thing you’ve ever learned?"],
["If you could meet any fictional character, who would it be?"],
["What’s your favorite type of pizza?"],
["Do you enjoy cooking?"],
["What’s the best part of your day?"],
["If you could visit any place in the world, where would it be?"],
["What’s your favorite holiday and why?"],
["Do you prefer texting or talking on the phone?"],
["What’s the best way to spend a snow day?"],
["If you could learn a new skill overnight, what would it be?"],
["What’s your favorite type of vacation?"],
["Do you enjoy attending live events, like concerts or sports games?"],
["What’s your favorite way to get around: bike, car, bus, train, or walking?"],
["If you could have any job for a week, what would it be?"],
["What’s the most beautiful building you’ve ever seen?"],
["Do you like to follow a strict schedule or be more flexible?"],
["What’s your favorite thing to do in your free time?"],
["If you could visit any city in the world, which one would you choose?"],
["What’s your favorite childhood cartoon?"],
["Do you prefer mornings or nights?"],
["What’s your favorite kind of fruit juice?"],
["If you could change your name, what would you choose?"],
["What’s your favorite kind of bread?"],
["Do you enjoy photography?"],
["What’s the most interesting museum you’ve visited?"],
["If you could be any age forever, what age would you choose?"],
["What’s your favorite board game?"],
["Do you prefer shopping for clothes or electronics?"],
["What’s your favorite memory with your friends?"],
["If you could visit any fictional place, where would you go?"],
["What’s your favorite type of soup?"],
["Do you enjoy watching the stars at night?"],
["What’s the most interesting documentary you’ve seen?"],
["If you could have any job, what would it be?"],
["What’s your favorite thing to do at a fair or festival?"],
["Do you prefer sunny or rainy days?"],
["What’s your favorite kind of pizza topping?"],
["If you could live in any book’s world, which one would you choose?"],
["What’s your favorite thing to do on a rainy day?"],
["Do you like to play video games?"],
["What’s your favorite type of pasta?"],
["If you could instantly learn any language, which one would it be?"],
["What’s your favorite outdoor activity?"],
["Do you prefer cats or dogs?"],
["What’s the best gift you’ve ever received?"],
["If you could travel back in time, which era would you visit?"],
["What’s your favorite type of ice cream?"],
["Do you like to watch documentaries?"],
["What’s your favorite way to relax?"],
["If you could meet any celebrity, who would it be?"],
["What’s your favorite way to spend a weekend?"],
["Do you enjoy cooking or baking more?"],
["What’s your favorite sport to watch?"],
["If you could live in any city, which one would it be?"],
["What’s your favorite type of music?"],
["Do you prefer spending time indoors or outdoors?"],
["What’s the best vacation you’ve ever had?"],
["If you could be any animal, which one would you choose?"],
["What’s your favorite thing to do with your family?"],
["Do you like to go hiking?"],
["What’s your favorite kind of candy?"],
["If you could learn any instrument, which one would it be?"],
["What’s your favorite way to exercise?"],
["Do you enjoy reading?"],
["What’s the most beautiful place you’ve visited?"],
["If you could change one thing about the world, what would it be?"],
["What’s your favorite holiday tradition?"],
["Do you like to plan things out or be spontaneous?"],
["What’s your favorite childhood memory?"],
["If you could be a character in any movie, who would you be?"],
["What’s your favorite type of weather?"],
["Do you prefer hot or cold beverages?"],
["What’s the most fun project you’ve worked on at school?"],
["If you could visit any country, which one would you choose?"],
["What’s your favorite type of food?"],
["Do you enjoy swimming?"],
["What’s the best movie you’ve seen recently?"],
["If you could have any superpower, what would it be?"],
["What’s your favorite way to spend a day off?"],
["Do you like to play sports?"],
["What’s your favorite dessert?"],
["If you could live anywhere in the world, where would it be?"],
["What’s your favorite holiday?"],
["Do you enjoy drawing or painting?"],
["What’s the best book you’ve read recently?"],
["If you could meet any historical figure, who would it be?"],
["What’s your favorite way to spend time with friends?"],
["Do you prefer listening to music or watching TV?"],
["What’s the most exciting thing you’ve done this year?"],
["If you could be famous for one thing, what would it be?"],
["What’s your favorite way to stay active?"],
["Do you enjoy going to museums?"],
["What’s your favorite type of fruit?"],
["If you could travel anywhere, where would you go?"],
["What’s your favorite snack?"],
["Do you like to spend time in nature?"],
["What’s the best advice you’ve ever received?"],
["If you could have any job, what would it be?"],
["What’s your favorite type of flower?"],
["Do you prefer morning or evening?"],
["What’s the most interesting thing you’ve learned in school?"],
["If you could visit any planet, which one would you choose?"],
["What’s your favorite type of cereal?"],
["Do you enjoy cooking?"],
["What’s the most beautiful place you’ve ever seen?"],
["If you could change one thing about your school, what would it be?"],
["What’s your favorite thing to do on the weekends?"],
["Do you like to listen to podcasts?"],
["What’s your favorite way to relax after a long day?"],
["If you could be any character in a book, who would you be?"],
["What’s your favorite type of movie?"],
["Do you prefer cats or dogs?"],
["What’s the best meal you’ve ever had?"],
["If you could learn any language, which one would it be?"],
["What’s your favorite type of clothing?"],
["Do you enjoy playing video games?"],
["What’s your favorite way to stay active?"],
["If you could visit any historical site, which one would you choose?"],
["What’s your favorite type of ice cream?"],
["Do you like to watch sports?"],
["What’s your favorite way to spend a rainy day?"],
["If you could have any job for a day, what would it be?"],
["What’s your favorite type of music?"],
["Do you prefer summer or winter?"],
["What’s the most interesting place you’ve visited?"],
["If you could meet any celebrity, who would it be?"],
["What’s your favorite way to spend time with family?"],
["Do you enjoy going to the beach?"],
["What’s the best gift you’ve ever received?"],
["If you could visit any country, which one would you choose?"],
["What’s your favorite type of weather?"],
["Do you like to spend time indoors or outdoors?"],
["What’s your favorite holiday tradition?"],
["If you could have any superpower, what would it be?"],
["What’s your favorite way to celebrate your birthday?"],
["Do you enjoy baking?"],
["What’s your favorite type of cake?"],
["If you could live in any city, which one would it be?"],
["What’s your favorite way to spend a summer day?"],
["Do you like to read books?"],
["What’s your favorite childhood memory?"],
["If you could visit any place, where would it be?"],
["What’s your favorite type of movie?"],
["Do you enjoy going to the theater?"],
["What’s the best vacation you’ve ever had?"],
["If you could learn any skill, what would it be?"],
["What’s your favorite way to spend a weekend?"],
["Do you like to play sports?"],
["What’s your favorite way to relax?"],
["If you could be any animal, which one would you choose?"],
["What’s your favorite type of music?"],
["Do you enjoy going to concerts?"],
["What’s your favorite type of cuisine?"],
["If you could visit any national park, which one would you choose?"],
["What’s your favorite thing to do during summer break?"],
["Do you prefer hot or cold weather?"],
["What’s the most adventurous thing you’ve ever done?"],
["If you could have dinner with any historical figure, who would it be?"],
["What’s your favorite type of dance?"],
["Do you like to watch animated movies?"],
["What’s your favorite way to spend a winter day?"],
["If you could be any character in a movie, who would you be?"],
["What’s your favorite holiday dish?"],
["Do you prefer reading books or watching movies?"],
["What’s your favorite type of tea?"],
["If you could learn any sport, which one would it be?"],
["What’s your favorite way to spend time with your siblings?"],
["Do you enjoy attending festivals?"],
["What’s the most memorable event you’ve ever attended?"],
["If you could have any job in the future, what would it be?"],
["What’s your favorite type of dessert?"],
["Do you prefer casual or formal clothing?"],
["What’s the most interesting thing you’ve ever seen?"],
["If you could visit any historical event, which one would you choose?"],
["What’s your favorite type of bread?"],
["Do you enjoy spending time at the library?"],
["What’s your favorite type of snack?"],
["If you could instantly become an expert in any subject, what would it be?"],
["What’s your favorite type of movie genre?"],
["Do you prefer taking notes by hand or on a computer?"],
["What’s the best gift you’ve ever given?"],
["If you could travel to any time period, which one would you choose?"],
["What’s your favorite thing to do at a party?"],
["Do you like to follow the news?"],
["What’s the most beautiful artwork you’ve ever seen?"],
["If you could have any piece of technology, what would it be?"],
["What’s your favorite way to spend a holiday?"],
["Do you prefer spending time alone or with others?"],
["What’s the most exciting thing that’s happened to you recently?"],
["If you could be any mythical creature, which one would you choose?"],
["What’s your favorite type of soup?"],
["Do you enjoy going to the zoo?"],
["What’s your favorite way to spend a long weekend?"],
["If you could have any talent, what would it be?"],
["What’s your favorite type of fruit?"],
["Do you prefer writing or speaking?"],
["What’s the best book you’ve ever read?"],
["If you could change one thing about yourself, what would it be?"],
["What’s your favorite way to relax after a stressful day?"],
["Do you enjoy going to the beach?"],
["What’s your favorite type of exercise?"],
["If you could live anywhere in the world, where would it be?"],
["What’s your favorite thing to do on a lazy day?"],
["Do you like to go on picnics?"],
["What’s the most interesting thing you’ve learned recently?"],
["If you could be any fictional character, who would you choose?"],
["What’s your favorite type of candy?"],
["Do you enjoy visiting historical sites?"],
["What’s your favorite type of weather?"],
["If you could learn to play any instrument, which one would it be?"],
["What’s your favorite way to spend time with your friends?"],
["Do you prefer sweet or savory snacks?"],
["What’s the most exciting trip you’ve ever taken?"],
["If you could have any job, what would it be?"],
["What’s your favorite type of movie to watch with friends?"],
["Do you enjoy playing board games?"],
["What’s the most beautiful sunset you’ve ever seen?"],
["If you could meet any author, who would it be?"],
["What’s your favorite type of flower?"],
["Do you prefer breakfast or dinner?"],
["What’s the most memorable book you’ve read?"],
["If you could travel anywhere in the world, where would you go?"],
["What’s your favorite type of cereal?"],
["Do you like to go camping?"],
["What’s the most interesting museum you’ve visited?"],
["If you could have any superpower, what would it be?"],
["What’s your favorite way to spend a sunny day?"],
["Do you enjoy watching documentaries?"],
["What’s the best advice you’ve ever given?"],
["If you could meet any musician, who would it be?"],
["What’s your favorite thing to do on a rainy day?"],
["Do you prefer books or e-books?"],
["What’s your favorite way to celebrate a special occasion?"],
["If you could live in any book’s world, which one would you choose?"],
["What’s your favorite type of juice?"],
["Do you like to follow fashion trends?"],
["What’s the most interesting place you’ve traveled to?"],
["If you could be any character in a TV show, who would you be?"],
["What’s your favorite way to spend a holiday?"],
["Do you prefer hot or cold beverages?"],
["What’s the most challenging thing you’ve ever done?"],
["If you could learn any language, which one would it be?"],
["What’s your favorite thing to do in the winter?"],
["Do you enjoy going to theme parks?"],
["What’s the most exciting event you’ve ever attended?"],
["If you could be an expert in any field, what would it be?"],
["What’s your favorite way to stay healthy?"],
["Do you prefer reading fiction or non-fiction?"],
["What’s the most beautiful thing you’ve ever seen in nature?"],
["If you could visit any place in the world, where would it be?"],
["What’s your favorite way to spend a day off?"],
["Do you enjoy listening to music?"],
["What’s the most interesting class you’ve taken?"],
["If you could have any job for a week, what would it be?"],
["Do you like to follow sports?"],

  ];

window.addEventListener('keydown', (e) => {
    if (e.keyCode === 32 && e.target === document.body) {
      e.preventDefault();
    }
  });

  document.body.onkeydown = function(event) {
    event = event || window.event;
    var keycode = event.charCode || event.keyCode;
    if (keycode === 39 && currentQuestion < qbank.length) {
    currentQuestion++;
    beginActivity();
    }
  }

for (var a=[],i=0;i<5;++i) a[i]=i;

function shufflee(array) {
  var tmp, current, top = array.length;
  if(top) while(--top) {
    current = Math.floor(Math.random() * (top + 1));
    tmp = array[current];
    array[current] = array[top];
    array[top] = tmp;
  }
  return array;
}

qbank = shufflee(qbank);

  beginActivity();
  seuraava();

 
 	function beginActivity() {
    $("#cardArea").empty();
    $("#cardArea").append('<div id="card1" class="card">' + qbank[currentQuestion] + '</div>');
    $("#card1").css("background-color", "#1F2937");
    if (currentQuestion == qbank.length) {
      $("#cardArea").empty();
      $("#buttonArea").empty();
      $("#buttonArea").append('<div id="restartButton" onClick="window.location.reload()">Aloita alusta</div>');
      $("#cardArea").append('<div id="done">Tehtävä suoritettu</div>');
    }
  }
  
  function seuraava() {
    $("#buttonArea").append('<div id="nextButton">Seuraava</div>');
    $("#nextButton").on("click", function() {
      if (currentQuestion < qbank.length) {
        currentQuestion++;
        beginActivity();}
      }
   )
  }
})
</script>

<style>
   #cardArea{
    width: 95%;
    height: 300px;
    margin: auto;
    margin-top: 20px;
    position: relative;
    overflow: hidden;
   }

   .card{
    width: 100%;
    height: 300px;
    position: absolute;
    text-align: center;
    font-size: 1.3em;
    color: #efefef;
    cursor: pointer;
    padding: 1em;
    display: flex;
    justify-content: center;
    align-items: center;
   }
   
   #nextButton{
    width:40%;
    text-align: center;
    font-size: 1em;
    padding:10px;
    cursor: pointer;
    color: #efefef;
    margin: auto;
    margin-top: 1.4em;
    background-color: #1F2937;
    border: 1px solid  #000000;
    font: inherit;
   }
   
   #restartButton{
    width: 40%;
    text-align: center;
    font-size: 1em;
    padding: 10px;
    cursor: pointer;
    color: #efefef;
    margin: auto;
    background-color: #1F2937;
    border: 1px solid  #000000;
    font: inherit;
   }

  div#done {
    width: 100%;
    height: 300px;
    position: absolute;
    text-align: center;
    font-size: 1.3em;
    color: black;
    cursor: pointer;
    padding: 1em;
    background-color: white;
    display: flex;
    justify-content: center;
    align-items: center;
  }
  </style>

  {{< /rawhtml >}}