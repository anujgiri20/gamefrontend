import React from "react";
import styled from "styled-components";
import SelectionKey from "../PlayerBox/SelectionKey/SelectionKey";

const Div = styled.div`
    background-color:#18191a;
    border:1px solid white;
    border-radius:15px;
    height:60vh;
    width :40%;
    display:flex;
    flex-direction:column;
    justify-content:${ ({change}) => change?"space-evenly":"center" };
    align-items:center;
    &>div{ text-align:center; }
`;
const ComputerBox = ({ resultMode }) => {
    return (
        <Div change={resultMode.value} >
            {
                resultMode.value === false ? 
                <> 
                    <div>Computer Selected one.</div> 
                    <div>It's your turn</div>
                </> :
                <>
                    <div>COMPUTER</div>
                    <SelectionKey value={resultMode.computer} resultMode={resultMode} />
                    <div>
                        {
                            resultMode.result==="PASS" ? "FAIL" :
                                resultMode.result==="FAIL" ? "PASS" : "DRAW" 
                        }
                    </div>
                </>
            }
        </Div>
    );
}

export default ComputerBox;