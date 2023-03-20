	/*----- constants -----*/
let redPiece = 1
let blackPiece = -1
let emptySlot = 0

	/*----- state variables -----*/
    let board = [
        [0, -1, 0, -1, 0, -1, 0, -1, 0, -1],
        [-1, 0, -1, 0, -1, 0, -1, 0, -1, 0],
        [0, -1, 0, -1, 0, -1, 0, -1, 0, -1],
        [-1, 0, -1, 0, -1, 0, -1, 0, -1, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
        [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
        [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
      ];

	/*----- cached elements  -----*/


	/*----- event listeners -----*/


	/*----- functions -----*/
    function builBoard() {
        game.innerHTML = "";
        for (let i = 0; i < board.length; i++) {
          const element = board[i];
          let row = document.createElement("div"); 
          row.setAttribute("class", "row");
          for (let j = 0; j < element.length; j++) {
            const elmt = element[j];
            let col = document.createElement("div"); 
            let piece = document.createElement("div");
            let caseType = "";
            let emptySlot = "";
            if (i % 2 === 0) {
              if (j % 2 === 0) {
                caseType = "redCase";
              } else {
                caseType = "blackCase";
              }
            } else {
              if (j % 2 !== 0) {
                caseType = "redCase";
              } else {
                caseType = "blackCase";
              }
            }
        }