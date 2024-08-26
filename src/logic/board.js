  import { WINNER_COMBOS } from "../constants"
  
  // Check the combinations to see who is the winner
  export const checkWinner = (boardToCheck) => {
    for (const combo of WINNER_COMBOS){
    const [a,b,c] = combo
    if (
      boardToCheck[a] &&
      boardToCheck[a] === boardToCheck[b] &&
      boardToCheck[a] === boardToCheck[c]
    ){
      return boardToCheck[a]
    }
  }
  // no winner
  return null
}


export const checkEndGame = (newBoard) =>{
    // Check if we have a draw 
    return newBoard.every((Square) => Square !== null)
  }