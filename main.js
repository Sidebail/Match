// Step 1a - Select and store the gameboard element

// Step 1b - Select and store the score element

// Step 1c - Select and store the cards element

// Step 1d - Select and store the message element
 

// Step 2 - Create an array of cards
const cardValues = ['A', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'J', 'Q', 'K'];
let deck = [];

// Step 2a - Create a function to shuffle the deck
... shuffleDeck () {
  // Step 2b - Create a placeholder array
  ... tmp ...

  // Step 2c - Iterate through card values 4 times
  ... (...) {
    // Step 2d - Using a conditional loop
    ... (cardValues... != 0) {
      // Step 2e - Select a random card from the array
      ... randomCard = Math...(Math...() * ...);

      // Step 2f - Add the card to the deck array
    }
  }
}

// Step 2g - Call the shuffleDeck function


// Step 3a - Create an array to store 2 players
... players ...;

// Step 3b - Create a variable to store the current player
... currentPlayer ...;

// Step 3c - Create a variable to store the first selected card
... currentCard ...;


// Step 4 - Iterate through the deck and bind a click event to each one
... {
  // Step 4a - Create a new div element to be a card
  ... cardEle = ...;

  // Step 3b - Add a 'card' class to the class list on the new div element
  ...('card');

  // Step 3c - Add a data value to the card with the card's value in it
  ...dataset.value = ...;

  // Step 3c - Bind the cardSelected function
  // to the click event on the cardEle
  ...
}


// Step 5 - Create a function to store the logic
// for when a card is selected
... cardSelected (...) {
  // Step 5a - Check if there is already a card selected
  ... {
    // Step 6 - Compare the cards
    ... {
      // Step 6b - Add a class to the 2 card elements
      // flipping them over
      ...('flipped');

      // Step 6c - Add a point to the score for this player
      ... += 1;

      // Step 6d - Tell the player to go again
      // (use string interpolation to show which player you're addressing)
      ... = `Congratulations! ..., please go again!`;
    } ... {
      // Step 6e - Provide a fail message to the player
      ... = "Oh, so sorry!!! But yer' not psychic!";

      // Step 6f - Using a ternary, change players
      ... 1 ... 0;

      // Step 6g - Concatenate a message to the message element
      // advising player 2 that it's their turn now
      // (use string interpolation to show which player you're addressing)
      ... = `..., your turn!`;
    }
  } ... {
    // Step 5b - Assign the card to currentCard
    ...

    // Step 5c - Tell the player to select another card
    // (use string interpolation to show which player you're addressing)
    ... = `..., please select another card`;
  }

  // Step 7 - Check if the board is full
  ... {
    // Step 7a - Check if one of the players has won
    ... {
      // Step 7b - Tell the player they've won
      // (use string interpolation to show which player you're addressing)
      ... = `..., you won!!! Congratulations!`;
    } ... {
      // Step 7c - Tell the players that the game has ended in a tie
      ... = "The game was a tie! Nice try!";
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