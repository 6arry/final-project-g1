import React from 'react';
// import './App.css';
// import {Animated} from "react-animated-css";


import SearchBar from '../components/SearchBar'
import {Animated} from 'react-animated-css';
;

function Join() {
  var element = document.getElementById("body");
  element.className="join";
  return (
    <div>
    <Animated 
        animationIn="zoomInLeft" 
        animationOut="zoomOutDowçn" 
        animationInDuration={1400} 
        animationOutDuration={1400} 
        isVisible={true}> 
    <div>
      <h1 className="things">This is the Join page!</h1>
      <SearchBar />
    </div>
    </Animated>
    </div>
  );
     
}

export default Join;
