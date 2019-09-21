import React from 'react';
import './App.css';
import './Dashboard.css';
import { Animated } from 'react-animated-css';
import Sidebar from '../components/Sidebar';
import Searchlist from '../components/Searchlist';
import Ytplayer from '../components/Ytplayer';
import SearchBar from '../components/SearchBar'

function Home() {
  return (
    <div className="home">
      <Animated animationIn="rotateInUpLeft" animationOut="zoomOutDown" animationInDelay={0} animationInDuration={1400} animationOutDuration={1400} isVisible={true}>
          
        <Animated animationIn="lightSpeedIn" animationOut="zoomOutDown" animationInDelay={50} animationInDuration={2200} animationOutDuration={1400} isVisible={true}> 
          <div>
            <h1 className="hit-the-floor">Dashboard</h1>
          </div>
        </Animated>

        <Animated animationIn="rotateInUpLeft" animationOut="zoomOutDown" animationInDelay={1100} animationInDuration={1400} animationOutDuration={1400} isVisible={true}> 
          <div className="sidebar">
            <Sidebar />
          </div>
        </Animated>
                  
        <Animated animationIn="slideInRight" animationOut="zoomOutDown" animationInDelay={1100} animationInDuration={1400} animationOutDuration={1400} isVisible={true}> 
          <div className="searchlist">
              <Searchlist />
          </div>
        </Animated>
        
        <Animated animationIn="slideInUp" animationOut="zoomOutDown" animationInDelay={1100} animationInDuration={1400} animationOutDuration={1400} isVisible={true}>
          <div className="youtube">
              <SearchBar />
              <Ytplayer />
          </div>
        </Animated>
        
      </Animated>
    </div>
    
  );
  
}

export default Home;
      
                  
      
                        
  
    
