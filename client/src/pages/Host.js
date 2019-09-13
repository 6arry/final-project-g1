import React from 'react';
import './App.css';
import './Host.css';
import SearchBar from '../components/SearchBar';
import {Animated} from 'react-animated-css';

function Host() {
  return (

    <div>
        <Animated 
            animationIn="zoomInRight" 
            animationOut="zoomOutDowçn" 
            animationInDuration={1400} 
            animationOutDuration={1400} 
            isVisible={true}> 
      <div>      
      <h1 className="things">This is the Host page!</h1>
      <SearchBar />
      </div>
      </Animated>
    </div>
    
  );
}

export default Host;
