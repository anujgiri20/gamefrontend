import React , { useState } from "react";
import styled from "styled-components";

import DropDown from "./DropDown";

const Div = styled.div`
margin-top:50px;

    font-size:16px;    
    font-style:" font-family: "Cormorant Garamond",serif;"
    cursor:pointer;
    #default {    
        padding:5px 15px;
        color:black;
        background-color:yellow;
        border:1px solid white;
    }
   
`;

const NavElement = ({ target , setTarget }) => {
    const [ showDropdown , setShowDropdown ] = useState(false);
    return(
        <Div onMouseEnter={ () => setShowDropdown(true) } 
            onMouseLeave={ () => setShowDropdown(false) } onClick={ () => setShowDropdown(!showDropdown) }>

            <span id="default" >{ target }</span>
            { showDropdown && 
                <DropDown setTarget={setTarget} setShowDropdown={setShowDropdown} /> }
        </Div>
    );
}

export default NavElement;