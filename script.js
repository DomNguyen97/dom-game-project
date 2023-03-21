// constants

// letters 
// const letters = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z']
//  numbers of incorrect guesses
let tally = 0;

// variables

// const secret word bank(array) 
const secretWordBank = ['APPLE', 'PEAR', 'ORANGES', 'GRAPEFRUIT', 'LIME', 'PINEAPPLE'];
// let secret word(array)
let secretWord = [];
let incompleteWord = [];
//  (placeholds the correct numbers of letters and current correct guesses)
let userInput = ['T','E','S','T'];
// (banks of letters used)

// cached elements
// reset button


// event listeners
// /click


// functions

// init function 
function initGame() {
    resetVariables();
    randomSecretWord();
    initIncomplete();
    renderGameBoard();
    renderTally();
    renderUserInput();
}

function resetVariables() {
    userInput = [];
    secretWord = [];
    incompleteWord = [];
    tally= 0;

}
// random pull from secret word bank/ apply to secretWord
function randomSecretWord() {
    let lengthOfArray = secretWordBank.length;
    let pulledItem = Math.floor(Math.random() * (lengthOfArray + 1));
    let str = secretWordBank[pulledItem];
    secretWord = str.split('');
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
function renderTally() {
    document.querySelector(".tally").innerText = tally;
}

// render user input
function renderUserInput() {
    document.querySelector('.previous-input').innerHTML = '';
    userInput.forEach(function(moon){ 
    let dog = document.createElement('div');
    dog.className = 'input-input';
    dog.innerText = moon;
    document.querySelector('.previous-input').appendChild(dog);
    });  
}


// create keyboard(using foreach and onclick functions)
// check win condition function
// check lose condition function
// check user input against secret word and update gameboard function
// create start/reset button 



