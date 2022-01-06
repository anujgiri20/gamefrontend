import React from "react";
import styled from "styled-components";

import SelectionKey from "./SelectionKey/SelectionKey";

const Div = styled.div`
    background-color:#18191a;
    border:1px solid white;
    border-radius:15px;
    height:60vh;
    width :40%;
    display:flex;
    flex-direction:column;
    justify-content:space-evenly;
    align-items:center;
`;

const PlayerBox = ({ validator , resultMode }) => {
    return (
        <Div>
            YOU
            {
                resultMode.value === false ?
                    ["STONE","PAPER","SCISSOR"].map( (item) =>
                        <SelectionKey value={item} resultMode={resultMode} validator={validator} /> ) :
                    <>
                        <SelectionKey value={resultMode.user} resultMode={resultMode} />   
                        <div>{resultMode.result}</div>
                    </>
            }
        </Div>
    );
}

export default PlayerBox;