import React from "react";
import { useState } from "react";


function Button(props) {
  
    const [ buttonColour, setButtonColour ] = useState('#390810');

    const buttonStyles = {
        borderRadius: '20px',
        border: '1px solid black',
        backgroundColor: buttonColour,
        color: '#fff',
        fontSize: '1.5rem',
        padding: '1rem 1.5rem',
    

    }
const changeColour = () => {
    setButtonColour('#EF5350');
}
return (
    <button className="btn" style={buttonStyles} onClick={changeColour}>{props.text}</button>
    )
}

export default Button;