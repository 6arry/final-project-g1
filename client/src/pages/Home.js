import React from 'react';
import SearchBar from '../components/SearchBar';
import './App.css';
import './Home.css';
import {Animated} from 'react-animated-css';

function Home() {
  // var element = document.getElementById("body");
  // element.className="home";
  return (
    <div>
      <Animated
        animationIn="slideInLeft" 
        animationOut="zoomOutDowçn" 
        animationInDelay={0}
        animationInDuration={1400} 
        animationOutDuration={1400} 
        isVisible={true}> 

        <div className="home">
          <div>
            <Animated 
                    animationIn="lightSpeedIn" 
                    animationOut="zoomOutDowçn" 
                    animationInDelay={1000}
                    animationInDuration={1400} 
                    animationOutDuration={1400} 
                    isVisible={true}> 
                  <div>    
                    <h1 className="hit-the-floor">This is the Home page!</h1>
                    <SearchBar />
                  </div>
  
    
      
              </Animated>
            </div>
          </div>
      </Animated>
    </div>

  
  );
}

export default Home;
