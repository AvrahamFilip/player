import React ,{useState}from "react";
import Keyboard from "./Keyboard";
import Screen from "./screen";
// import Buttons from "./button";



function App() {

  const [newLetter,setnewLetter]=useState("")
  const changeLeter=(event)=>setnewLetter(newLetter+event.target.innerHTML)
  
  
  
  // const [stateColor, setStateColor] = useState(false);
  // const changeStateColor = () => setStateColor(!stateColor);
  // const [stateFont, setStateFont] = useState(false);
  // const changeStateFont = () => setStateFont(!stateFont);

  return (<>
    <div id="screen">
      <Screen 
      letter={newLetter}
      // stateColor={stateColor}
      // stateFont={stateFont} 
      /></div>
      <div>
      <Keyboard myFunc={changeLeter}/>
     
      {/* <Buttons changeStateColor={changeStateColor}
          stateColor={stateColor}
          setNewLetter={setnewLetter}
          newLetter={newLetter}
          changeStateFont={changeStateFont}
          changeNewLetter={changeLeter} */}
          {/* // changeLanguage={changeLanguage}
          // changeStateKeyboard={changeStateKeyboard}
          // chooseLanguage={chooseLanguage}
           /> */}
    </div></>
    
  );
}

export default App;

