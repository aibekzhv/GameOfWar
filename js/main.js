/*----- constants -----*/

/*----- app's state (variables) -----*/
var suits = ["spades", "hearts", "clubs", "diams"];
var cardFace = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
var cards = [];
var firstRun = true;
var players = [[],[]];
//here i captured the element
var fightButton = document.querySelector("#btnBattle");

//added event listener for captured element
fightButton.addEventListener('click',battle);

//functions
//this function for button
function battle() {
    if(firstRun){
      firstRun = false;
      buildCards();
      shuffleArray(cards);
      dealCards(cards);
    }
    console.log('works');
  }
//deck
  function buildCards() {
    cards = []; // i store here
    for(s in suits){
      var suitNew = suits[s][0].toUpperCase();
      for(n in cardFace){
        var card = {
          suit:suits[s],
          num:cardFace[n],
          cardValue:parseInt(n) +2,
          icon:suitNew
        }
        cards.push(card);
      }
    }
    console.log(cards);
  }
//dealing cards
  function dealCards (array){ 
      for(var i = 0; i<array.length; i++ ) {
          var m = i % 2;
          players[m].push(array[i]);
      }
      console.log(players);
  }
///here shuffling using math
  function shuffleArray(array){
     for(var x = array.length -1;x>0;x--){
       var ii = Math.floor(Math.random() * (x+1));
       var temp = array[x];
       array[x] = array[ii];
       array[ii] = temp;
     }
     return array;
  }



  





 