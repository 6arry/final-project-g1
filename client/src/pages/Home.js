import React from 'react';
import './App.css';
import './Home.css';
import {Animated} from 'react-animated-css';


function Home() {
  // var element = document.getElementById("body");
  // element.className="home";
  return (
    <div>
      <Animated
        animationIn="rotateInUpLeft" 
        animationOut="zoomOutDown" 
        animationInDelay={0}
        animationInDuration={1400} 
        animationOutDuration={1400} 
        isVisible={true}> 

        <div className="home">
          <div>
            <Animated 
                    animationIn="lightSpeedIn" 
                    animationOut="zoomOutDown" 
                    animationInDelay={50}
                    animationInDuration={2200} 
                    animationOutDuration={1400} 
                    isVisible={true}> 
                  <div>  
                    <h1 className="hit-the-floor">DJcollective</h1>
                  </div>
      
              </Animated>
            </div>
          </div>
      </Animated>
    </div>

  
  );
}

export default Home;
  
    
