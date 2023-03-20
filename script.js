	/*----- constants -----*/
// let redPiece = 1
// let blackPiece = -1
// let emptySlot = 0

	/*----- state variables -----*/
    // let board = [
    //     [0, -1, 0, -1, 0, -1, 0, -1, 0, -1],
    //     [-1, 0, -1, 0, -1, 0, -1, 0, -1, 0],
    //     [0, -1, 0, -1, 0, -1, 0, -1, 0, -1],
    //     [-1, 0, -1, 0, -1, 0, -1, 0, -1, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    //     [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    //     [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    //     [0, 1, 0, 1, 0, 1, 0, 1, 0, 1],
    //     [1, 0, 1, 0, 1, 0, 1, 0, 1, 0],
    //   ];

	/*----- cached elements  -----*/


	/*----- event listeners -----*/


	/*----- functions -----*/
    
    //function turns checkers colors 
   function toggle(cell) {
// console.log('toggling cell:', cell)
// console.log("children: ", cell.children)
let redChecker = cell.children[0]
let blackChecker = cell.children[1]

if (!redChecker.hidden && blackChecker.hidden){
    redChecker.hidden = true
    blackChecker.hidden = false
} else if (redChecker.hidden && !blackChecker.hidden) {
    redChecker.hidden = true
    blackChecker.hidden = true
}else if (redChecker.hidden && blackChecker.hidden) {
    redChecker.hidden = false
    blackChecker.hidden = true
}
   }