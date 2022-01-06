import React from "react";
import styled from "styled-components";

const Div = styled.div`
    height:10vh;
    width :50%;
    border:1px solid white;
    display:flex;
    justify-content:center;
    align-items:center;
    color:yellow;
    background-color:black;
    border-radius:10px;
    &:hover{
        border:1px solid yellow;
        color:black;
        background-color:yellow;
    }
`;

const SelectionKey = ({ value , resultMode , validator }) => {
    return (
        <Div onClick={ () => !resultMode.value && validator(value) } >
            <div>{value}</div>
        </Div>
    );
}

export default SelectionKey;