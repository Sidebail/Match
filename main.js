// Step 1a - Select and store the gameboard element
const gameboardEle = document.querySelector('#gameboard');
// Step 1b - Select and store the score element
const scoreEle = document.querySelector('#score');
// Step 1c - Select and store the cards element
var cardsEle = document.querySelector('#cards');
// Step 1d - Select and store the message element
const messageEle =  document.querySelector('#message');

// Step 2 - Create an array of cards
const cardValues = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
const cardTypes = ['Spades','Clubs','Hearts','Diamonds']
let initialDeck = [];
let deck = [];

let counter = 0;

cardTypes.forEach(function(type){
  cardValues.forEach(function(value){
    initialDeck.push({
      value:value,
      type:type
      
    });
    console.log(++counter);
  })

  

 
})



// Step 3a - Create an array to store 2 players
var players = [{
  name: "Player 1",
  score: 0
},{
  name: "Player 2",
  score: 0
}];

// Step 2a - Create a function to shuffle the deck
function shuffleDeck () {
  // Step 2b - Create a placeholder array
  let tmp = initialDeck;
  
  // Step 2c - Iterate through card values 4 times

 
    // Step 2d - Using a conditional loop
    console.log(initialDeck.length);
    while (tmp.length > 0) {
      // Step 2e - Select a random card from the array
      let randomCard = Math.floor(Math.random() * (tmp.length - 1));
      
      console.log(randomCard + "    " + tmp[randomCard].value + "  " + tmp[randomCard].type);
      // Step 2f - Add the card to the deck array
      deck.unshift(tmp[randomCard]);
      
      tmp.splice(randomCard, 1);

      //how to change style : ele.style.[propertyAfterdash] = "anything"
      
    }
    
}





// Step 2g - Call the shuffleDeck function


var currentPlayer = players[0];

// Step 3b - Create a variable to store the current player


// Step 3c - Create a variable to store the first selected card
var currentCard = null;
var card = null;
function cardSetting(){
  currentCard = null;
  card = null;
  console.log("CHECK");
  shuffleDeck();

   while (gameboard.firstChild) {
     gameboard.removeChild(gameboard.firstChild);
  }
  
// Step 4 - Iterate through the deck and bind a click event to each one
  deck.forEach( function(ele){
    // Step 4a - Create a new div element to be a card
   var cardEle = document.createElement('div');

    // Step 3b - Add a 'card' class to the class list on the new div element
   cardEle.classList.add('card');

    // Step 3c - Add a data value to the card with the card's value in it
    cardEle.dataset.value = ele.value;
  
   cardEle.textContent = ele.value + " " + ele.type;

    gameboard.appendChild(cardEle);
  
   // Step 3c - Bind the cardSelected function
    // to the click event on the cardEle
    cardEle.addEventListener('click', cardSelected);

}); 

    var currentPlayer = players[0];
    players[0].score = 0;
    players[1].score = 0;
    messageEle.textContent = `${currentPlayer.name}, your turn!`;

    var bReset = document.createElement('button');


  bReset.textContent = "Reset the Game!";
  console.log(bReset.textContent);
  gameboard.appendChild(bReset);
  console.log(gameboard.lastChild.textContent);
  bReset.addEventListener('click', cardSetting);
  console.log(currentPlayer.name)
}

cardSetting();
// Step 5 - Create a function to store the logic
// for when a card is selected
var isFreezed = false;
function cardSelected (event) {
  if (!isFreezed){
  card = event.target;
  // Step 5a - Check if there is already a card selected
    if(currentCard != null) {
      // Step 6 - Compare the cards
      console.log("DEBUG_____________ ", card.value,  currentCard.value);
      if(currentCard.dataset.value == card.dataset.value) {
        // Step 6b - Add a class to the 2 card elements
        // flipping them over
        console.log("DEBUG_____________ ", card.dataset.value,  currentCard.dataset.value);
        card.classList.add('flipped');




      // Step 6c - Add a point to the score for this player
      currentPlayer.score += 1;

      // Step 6d - Tell the player to go again
      // (use string interpolation to show which player you're addressing)

      currentCard.classList.toggle('flipped');
      card.classList.toggle('flipped');
      currentCard.classList.toggle('setted');
      card.classList.toggle('setted');
      messageEle.textContent = `Congratulations! ${currentPlayer.name}, please go again!  SCORE: ` + currentPlayer.score;
      currentCard.removeEventListener('click',cardSelected);
      currentCard = null;
      card.removeEventListener('click',cardSelected);
      card = null;
      
     
    } else {
      
      // Flip those two cards back
      card.classList.toggle('flipped');
      // Step 6e - Provide a fail message to the player
      messageEle.textContent = "Oh, so sorry!!! But yer' not psychic!";
      isFreezed = true;
      setTimeout(function() {
          //your code to be executed after 3 seconds
        currentCard.classList.toggle('flipped');
        card.classList.toggle('flipped');


        currentCard = null;
        card = null;

        // Step 6f - Using a ternary, change players
      // 1 ... 0;
      console.log("GEBUBPASDFLP_SAFDKO_A__________________")
      if(currentPlayer == players[0]){
        currentPlayer = players[1];
      }else{
        currentPlayer = players[0];
      }
      
      // Step 6g - Concatenate a message to the message element
      // advising player 2 that it's their turn now
      // (use string interpolation to show which player you're addressing)
      messageEle.textContent = `${currentPlayer.name}, your turn!`;
      isFreezed = false;
      }, 2200);
     
      

      
    }
    } else {
    // Step 5b - Assign the card to currentCard
    currentCard = card;
    currentCard.classList.toggle('flipped');

    // Step 5c - Tell the player to select another card
    // (use string interpolation to show which player you're addressing)
    
    messageEle.textContent = `${currentPlayer.name}, please select another card`;
  }
  

  // Step 7 - Check if the board is full
  console.log("DEBUG__________ ",gameboard.querySelectorAll('.flipped').length);
  if (gameboard.querySelectorAll('.setted').length === 52) {
    // Step 7a - Check if one of the players has won
    if (players[0].score != players[1].score) {
      // Step 7b - Tell the player they've won
      // (use string interpolation to show which player you're addressing)
      currentPlayer = ((players[0].score > players[1].score) ? players[0] : players[1]);
      
      messageEle.textContent = `${currentPlayer.name}, you won!!! Congratulations!`;
      
    } else {
      // Step 7c - Tell the players that the game has ended in a tie
      messageEle.textContent = "The game was a tie! Nice try!";
    
    }
  }
}
}

// Take it further - Reset the board allowing the user to play again (Worth 20% of the final grade)
/*
  Step 1 - You will need a reset button in index.html
  Step 2 - You will need to bind an event listener
           that detects the click and executes a function
  Step 3 - You will need to reset all the pieces on the
           board
  Step 4 - You will need to reset the messages
  Step 5 - You will need to reset the players
*/







function gameReset(){
  // console.log("RESET!");
  // currentPlayer = players[0];
  // players[0].score = 0;
  // players[1].score = 0;

  // shuffleDeck();

  // while (gameboard.firstChild) {
  //   gameboard.removeChild(gameboard.firstChild);
  // }

  // deck.forEach( function(ele){
  //   // Step 4a - Create a new div element to be a card
  //   var cardEle = document.createElement('div');
  
  //   // Step 3b - Add a 'card' class to the class list on the new div element
  //   cardEle.classList.add('card');
  
  //   // Step 3c - Add a data value to the card with the card's value in it
  //   cardEle.dataset.value = ele.value;
    
  //   cardEle.textContent = ele.value + " " + ele.type;
  
  //   gameboard.appendChild(cardEle);
    
  //   // Step 3c - Bind the cardSelected function
  //   // to the click event on the cardEle
  //   cardEle.addEventListener('click', cardSelected);

  //   messageEle.textContent = `${currentPlayer.name}, your turn!`;
  
  // }); 
}

