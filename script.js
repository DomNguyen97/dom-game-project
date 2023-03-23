// constants

// letters 
const letters = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z']
//  numbers of incorrect guesses 
let lifePoints = 10;

// variables

// const secret word bank(array) 
const secretWordBank = ['RED','ORANGE','YELLOW','GREEN','BLUE','PURPLE'];
const hints = ["a","o","y","g","b",'p'];
// let secret word(array)
let secretWord = [];
let incompleteWord = [];
let getHint;
//  (placeholds the correct numbers of letters and current correct guesses)
let userInput = [];
let lengthOfArray = secretWordBank.length;
let pulledItem = Math.floor(Math.random() * (lengthOfArray + 1));


// (banks of letters used)

// cached elements
let gimmeHint = document.getElementById("hint");
let theClue = document.getElementById("clue");
let AyoStart = document.getElementById("start");


// event listeners
// /click


// functions

// init function 
function initGame() {
    resetVariables();
    randomSecretWord();
    initIncomplete();
    renderGameBoard();
    renderlifePoints();
    renderUserInput();
    resetButton();
    gameStatus();
    

}

function resetVariables() {
    userInput = [];
    secretWord = [];
    incompleteWord = [];
    lifePoints = 10;

}
// random pull from secret word bank/ apply to secretWord
function randomSecretWord() {
    // let lengthOfArray = secretWordBank.length;
    let pulledItem = Math.floor(Math.random() * (lengthOfArray + 1));
    let str = secretWordBank[pulledItem];
    secretWord = str.split('');
}
// pull up hint 


    gimmeHint.onclick= function() {
        console.log(pulledItem);
    theClue.innerHTML = "Clue - " + hints[pulledItem];
}

// creating an array(incompleteWord) based on the secret word array
function initIncomplete() {
    let lengthOfArray = secretWord.length;
    let i = 0;
    while (i < lengthOfArray) {
        incompleteWord.push('_')
        i++;
        
    }
}

// render gameboard function 
function renderGameBoard() {
    document.querySelector(".gameboard").innerHTML = '';
    incompleteWord.forEach(function (space) {
        let key = document.createElement('div');
        key.className = 'secretWord';
        key.innerText = space;
        document.querySelector(".gameboard").appendChild(key);

    });
}

//render tallies
function renderlifePoints() {
    document.querySelector(".lifePoints").innerText = "Number of tries Left:" + lifePoints;
}

// render user input
function renderUserInput() {
    document.querySelector('.previous-input').innerHTML = '';
    userInput.forEach(function (input) {
        let char = document.createElement('div');
        char.className = 'input-input';
        char.innerText = input;
        document.querySelector('.previous-input').appendChild(char);
    });
    
}



// create keyboard(using foreach and onclick functions)
letters.forEach(function (letter, idx) {
    let keyOnBoard = document.createElement('div');
    keyOnBoard.className = "key-button"
    keyOnBoard.innerText = letter;
    keyOnBoard.id = idx;
    keyOnBoard.onclick = function () {
        userChecker(letter)
    }
    document.querySelector(".key-board").appendChild(keyOnBoard);
});

// access all of const letters
// grab the button from the html
// loop through the whole alhpabet
// create the atribute and class 
// append the letters to the button

// check lose condition function
function loserChecker() {
    if (lifePoints = 0) {
        return true;
    } else {
        return false;
    }
}
// check win condition function
function winnerChecker() {
    incompleteWord.join(',');
    secretWord.join(',');
    if (secretWord.join()===incompleteWord.join('')) {
        return true;
    } else {
        return false;
    }
}


// check user input against secret word and update gameboard function
function userChecker(letter) {
    if (secretWord.includes(letter)) {
        secretWord.forEach(function (space, idx) {
            if (space === letter) {
                incompleteWord[idx] = letter;
                winnerChecker();
            }
        })
    } else {
        lifePoints -= 1;
        userInput.push(letter);
        
    }
    renderGameBoard();
    renderlifePoints();
    renderUserInput();
    gameStatus();
    winnerChecker();
    
}
// create start/reset button  

 AyoStart.onclick= function() {
    initGame();

}

function resetButton() {
    document.querySelector(".reset-button-container").innerText = '';

    let resetButton = document.createElement("div")
    resetButton.className = ".reset-button";
    resetButton.innerText = "Reset Game";
    resetButton.onclick = function() {
        initGame(); 
    }
    document.querySelector(".reset-button-container").appendChild(resetButton);

}

function gameStatus() {
   
    let gameStatus = document.querySelector(".game-status");
    console.log(secretWord, incompleteWord)
    if(incompleteWord.join('') === secretWord.join('')) {
      gameStatus.innerHTML = "You win!"  
    } else if(lifePoints <= 0) {
      gameStatus.innerHTML = "Game Over, try again!"  
    }else {
       gameStatus.innerHTML = "Guess The letters to save Space man!"; 
    };

}
function startGame(){

} 
