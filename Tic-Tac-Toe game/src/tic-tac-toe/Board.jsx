import React , {useState} from "react";
import './Board.css'
import Square from "./Square";

const Board=()=>{
   const [Val , setVal] = useState(Array(9).fill(null));
   const[IsXTurn , setIsXTurn] = useState(true);

   const handleClick = (index)=>{
      if(Val[index]!==null){return;}
      const newVal = [...Val];
      newVal[index] = IsXTurn ? "X" : "O" ;
      setVal(newVal);
      setIsXTurn(!IsXTurn);
   };

   const checkWinner = ()=>{
      const winnerLogic=[
         [0 ,1 ,2], 
         [3 ,4 ,5],
         [6 ,7 ,8],
         [0 ,3 ,6],
         [1 ,4 ,7],
         [2 ,5 ,8],
         [0 ,4 ,8],
         [2 ,4 ,6]
      ];

      for(let logic of winnerLogic){
         const[a,b,c] = logic;
         if( Val[c]!==null &&  Val[a]===Val[b] &&Val[b]=== Val[c]){
            return Val[a];
         }
      }
      return false;
   };
   
   const isWinner = checkWinner();

    return(
      isWinner? <> <div className="win">
         <h2 className="txt">{isWinner} Won</h2>
         <button onClick={()=>{setVal(Array(9).fill(null)) ;  IsXTurn(true);}}>Play Again</button>
      </div><img src="Tic.png"/> </>:  ( <>
        <h4>Player {IsXTurn ? 'X':'O'} Please Move </h4>
        <div className="board-container">
             <div className="board-row">
                <Square value={Val[0]}  onClick={()=>{handleClick(0)}} />
                <Square value={Val[1]}  onClick={()=>{handleClick(1)}} />
                <Square value={Val[2]}  onClick={()=>{handleClick(2)}} />
             </div>
             <div className="board-row">
                <Square value={Val[3]}  onClick={()=>{handleClick(3)}}/>
                <Square value={Val[4]}  onClick={()=>{handleClick(4)}}/>
                <Square value={Val[5]}  onClick={()=>{handleClick(5)}}/>
             </div>
             <div className="board-row">
                <Square value={Val[6]}  onClick={()=>{handleClick(6)}}/>
                <Square value={Val[7]}  onClick={()=>{handleClick(7)}}/>
                <Square value={Val[8]}  onClick={()=>{handleClick(8)}}/>
             </div>
        </div>
        <img src="Tic.png"/>
        </>
      )
    )
}

export default Board;