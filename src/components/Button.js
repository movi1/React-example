import React from "react";
import { useState } from "react";


function Button(props) {
  
    const [ buttonColour, setButtonColour ] = useState('white');

    const buttonStyles = {
        borderRadius: '20px',
        border: '1px solid black',
        backgroundColor: buttonColour,
        color: 'black',
        fontSize: '2rem',
        padding: '1.3rem 3rem',
    

    }
const changeColour = () => {
    setButtonColour('green');
}
return (
    <button className="btn" style={buttonStyles} onClick={changeColour}>{props.text}</button>
    )
}

export default Button;