import React , {useEffect, useState} from "react";
import styled from "styled-components";

import Head from "./components/Head/Head";
import PopUp from "./components/PopUp/PopUp";
import PlayerBox from "./components/PlayerBox/PlayerBox";
import ComputerBox from "./components/ComputerBox/ComputerBox";
import "./login.css"
const Div = styled.div`
  height:90vh;
  width:100vw;
  display:flex;
  justify-content:space-evenly;
  align-items:center;
  color:white;
`;

const Stonegame = () => {
  const [ target    , setTarget    ] = useState(5);
  const [ showPopUp , setShowPopUp ] = useState(true);
  const [ gameOver  , setGameOver  ] = useState(false);
  const [resultMode , setResultMode] = useState({ 
    value : false , 
    score : [0,0] ,
    user  : undefined ,
    computer: undefined ,
    result: undefined
  });

  const validator = ( selectedKey ) => {
    var computerKey = ["STONE","PAPER","SCISSOR"][Math.floor((Math.random() * 3))];
    
    computerKey === selectedKey &&  setResultMode({ value:true , result:"DRAW" , user:selectedKey , computer:computerKey , score:resultMode.score });
    if(computerKey === "STONE"){
      selectedKey === "PAPER" ?     setResultMode({ value:true , result:"PASS" , user:selectedKey , computer:computerKey , score:[ resultMode.score[0]+1 , resultMode.score[1] ] }) :
        selectedKey === "SCISSOR" ? setResultMode({ value:true , result:"FAIL" , user:selectedKey , computer:computerKey , score:[ resultMode.score[0] , resultMode.score[1]+1 ] }) :
          console.log("") ;
    } else if(computerKey === "PAPER"){
      selectedKey === "SCISSOR" ?   setResultMode({ value:true , result:"PASS" , user:selectedKey , computer:computerKey , score:[ resultMode.score[0]+1 , resultMode.score[1] ] }) :
        selectedKey === "STONE" ?   setResultMode({ value:true , result:"FAIL" , user:selectedKey , computer:computerKey , score:[ resultMode.score[0] , resultMode.score[1]+1 ] }) :
          console.log("");
    } else {
      selectedKey === "STONE" ?     setResultMode({ value:true , result:"PASS" , user:selectedKey , computer:computerKey , score:[ resultMode.score[0]+1 , resultMode.score[1] ] }) :
        selectedKey === "PAPER" ?   setResultMode({ value:true , result:"FAIL" , user:selectedKey , computer:computerKey , score:[ resultMode.score[0] , resultMode.score[1]+1 ] }) :
          console.log("");
    }
  }  
  
  useEffect( () => {
    if (resultMode.score[0] === target || resultMode.score[1] === target ){
      setGameOver(true);
      setShowPopUp(true) ;
    }
  } , [resultMode,target] );

  return ( 
    <div
   className="logindiv"
   style={{
     paddingBottom:"300px"
   }}
    onClick={ () => resultMode.value === true && 
        setResultMode({ value:false , result:resultMode.result , user:resultMode.user , computer:resultMode.computer , score:resultMode.score} )}> 
      <Head score={resultMode.score} />
      {
        showPopUp ?
          <PopUp target={target} setTarget={setTarget} 
            setShowPopUp={setShowPopUp} 
            resultMode={resultMode} setResultMode={setResultMode}
            gameOver={gameOver} setGameOver={setGameOver} /> :
          <Div> 
            <PlayerBox   resultMode={resultMode} validator={validator} />
            <ComputerBox resultMode={resultMode} />
          </Div>
      }
    </div>
  )
}

export default Stonegame;