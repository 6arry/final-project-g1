import React from 'react';
import SearchBar from '../components/SearchBar';
import './Home.css';
import './App.css';
import {Animated} from 'react-animated-css';

function Home() {
  return (
   
    <div>
  <Animated 
            animationIn="lightSpeedIn" 
            animationOut="zoomOutDown" 
            animationInDuration={1400} 
            animationOutDuration={1400} 
            isVisible={true}> 
      <div>    
      <h1 className="things">This is the Home page!</h1>
      <SearchBar />
      </div>
    
  </Animated>
    </div>
  

  
  );
}

export default Home;
