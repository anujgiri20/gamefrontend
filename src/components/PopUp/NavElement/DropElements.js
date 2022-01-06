import React from "react";

const DropElements = ({ item , setTarget , setShowDropdown }) => {
    return(
        <div onClick={ () => { setTarget(item); setShowDropdown(false); } } >
            <span>{ item }</span>
        </div>
    );
}

export default DropElements;