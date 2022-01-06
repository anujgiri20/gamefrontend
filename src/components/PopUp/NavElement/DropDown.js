import React from "react";
import styled from "styled-components";

import DropElements from "./DropElements";

const Div = styled.div`
    padding:10px;
    background-color:#aaaaaa;
    position:absolute;
    z-index:100;
    box-shadow: 10px 10px 0px 0px black;
    border:1px solid #000000;
    & > div {
        border: 2px solid black;
        padding:5px;
        width:188px;
        & > div {
            :hover{ background-color:#00a800;}
        }
    }
`;

const Dropdown = ({setTarget,setShowDropdown}) => {
    const dropValues = [ 5 , 10 , 15 , 20 ] ;
    return(
        <Div>
            <div>
                { dropValues.map( (item , index) => 
                <DropElements key={index} item={item} setTarget={setTarget} setShowDropdown={setShowDropdown} />) }
            </div>
        </Div>
    );
}

export default Dropdown;