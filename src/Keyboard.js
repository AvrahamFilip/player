
import React, { useState } from "react";

function Keyboard(props) {
  const hebrew = ["א", "ב", "ג", "ד", "ה", "ו", "ז", "ח", "ט", "י","כ","ל","מ","נ","ס","ע","פ","צ","ק","ר","ש","ת","ך","ם","ן","ף","ץ","   "];
  const english = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"," "];
  const [keys, setKeys] = useState(hebrew);
  const [isCaps, setIsCaps] = useState(false);

 

  function changeLanguage() {
    setIsCaps(!isCaps);
    setKeys(isCaps ? english.map((key) => key.toUpperCase()) : hebrew);
  }

  return ( 
    <div id="Keyboard">
      {keys.map((key) => (
        <div
          key={key}
          className="key"
          onClick={props.myFunc}
        >
          {key}
        </div>
      ))}
      <button onClick={changeLanguage}>שנה שפה</button>
    </div>
  );
}
export default Keyboard;
