import React from 'react';
import './App.css';
import './Host.css';
import SearchBar from '../components/SearchBar';
import {Animated} from 'react-animated-css';

function Host() {

  return (
    <div className="page">
        <Animated
          animationIn="rotateInUpRight"  
          animationOut="zoomOutDown" 
          animationInDelay={0}
          animationInDuration={1400} 
          animationOutDuration={1400} 
          isVisible={true}> 

          <div className="host">
            <div>
              <Animated 
                  animationIn="lightSpeedIn" 
                  animationOut="zoomOutDown" 
                  aninationInDelay={50}
                  animationInDuration={1950} 
                  animationOutDuration={1400} 
                  isVisible={true}> 
                <div>      
                  <h1 className="hit-the-floor">Let the Party Begin!</h1>
                  <div>
                  <Animated
                      animationIn="slideInUp"  
                      animationOut="zoomOutDown" 
                      animationInDelay={1100}
                      animationInDuration={1400} 
                      animationOutDuration={1400} 
                      isVisible={true}> 

                            <div className="youtube">
                              <h1>Youtube stuff</h1>
                              <SearchBar />
                            </div>

                    </Animated>
                  </div>
                </div>
              </Animated>
            </div>
           </div> 
         </Animated> 
      </div>
    
  );
}

export default Host;
