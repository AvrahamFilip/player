import React, { useState } from "react";

function Screen(props) {


console.log(props.letter);
  return (
    <div >
      <p>{props.letter}</p>
    </div>
  );
}

export default Screen;
