import React from "react";

function Buttons(props) {
    return (
        <div className="buttons">
            <input type="button" onClick={props.changeStateColor}
                value={props.stateColor ? "red" : "blue"}></input>
            <input type="button"
                onClick={() => { props.setNewLetter(props.newLetter.slice(0, props.newLetter.length - 1)) }}
                value={"delete"}></input>
          
            <input type="button" onClick={props.changeStateFont}
                value={"font"}></input>
            <input
                type="button"
                onClick={props.changeLanguage}
                value={!props.chooseLanguage ? "English" : "Hebrew"}></input>
        </div>
    )
}
export default Buttons;
