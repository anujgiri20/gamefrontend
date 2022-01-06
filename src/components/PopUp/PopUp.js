import React from "react";
import styled from "styled-components";
import "./pop.css"
import NavElement from "./NavElement/NavElement";





const PopUp = ({ target , setTarget , setShowPopUp , resultMode , setResultMode , gameOver , setGameOver }) => {
    const newGame = () => {
        setGameOver(false);
        setResultMode({ 
            value : false , 
            score : [0,0] ,
            user  : undefined ,
            computer: undefined ,
            result: undefined
          });
    }
    return(
        <div className="main_div">
            {
                gameOver ?
                <div className="target_div_1">
                    {
                        resultMode.score[0] > resultMode.score[1] ?
                           <div> "YOU WON THE GAME"</div> : <div>"COMPUTER WON THE GAME"</div>
                    }
                    <div>GAME OVER</div>
                    <div id="button" onClick={ newGame } >NEWGAME</div>   
                </div>:
                <div>
                <h2>Choose the target score</h2>
                    <NavElement className="navelement" target={target} setTarget={setTarget} setShowPopUp={setShowPopUp} />
                    <button className="btn" onClick={() => setShowPopUp(false) } >OK</button>
                   
                </div> 
            }
        </div>
    );
}

export default PopUp;