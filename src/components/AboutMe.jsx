import React from 'react';
import './styles.css';
import './typewriter.css';

const Box = () => {
  return (
    <>
    <div class="splitscreen left">
      <div class="center">
        <button><h2 class="titelaboutme">Development</h2></button>
      </div>
    </div>
    <div class="splitscreen right">
      <div class="center">
        <button><h2 class="titelaboutme">Bodybuilding</h2></button>
        <img class="centerimg" src="dumbellclean.png" height= "150" width="150"></img>
      </div>
    </div>
    {/* <div class="outer">
      <div class="links column flexx">
        <h2 class="columnspan">Development</h2>
      </div>
      <div class="rechts column">
        <h2 class="columnspan flexx">Bodybuilding</h2></div>
    </div> */}
    </>
  );
}

export default Box;