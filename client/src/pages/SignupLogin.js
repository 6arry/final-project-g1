import React from 'react';
import './App.css';
import './SignupLogin.css';
import {Animated} from 'react-animated-css';
import { Button, Input } from 'reactstrap';



function Join() {
  
  return (
    <div className="page">
      <Animated
        animationIn="slideInLeft" 
        animationOut="zoomOutDowçn" 
        animationInDelay={0}
        animationInDuration={1400} 
        animationOutDuration={1400} 
        isVisible={true}> 

        <div className="join">
          <div>
              <Animated 
                  animationIn="zoomInRight" 
                  animationOut="zoomOutDowçn" 
                  animationInDuration={1400} 
                  animationOutDuration={1400} 
                  isVisible={true}> 
                <div>      
                  <h1 className="hit-the-floor">Sign up Bitch!</h1>
                        <form method="POST" action="/api/user">
                          <Input name="name" type="text" placeholder="new user" />
                          <Input name="password" type="text" placeholder="password" />
                              {/* <input type="submit" /> */}
                              <Button type="submit" color="primary">Signup</Button>
                        </form>
                          <br>
                          </br>
                          <form method="POST" action="/api/login">
                            <input name="username" type="text" placeholder="login" />
                            <input name="password" type="password" placeholder="password" />
                            {/* <input type="submit" /> */}
                            <Button type="submit">Login</Button>

                          </form>
                </div>
              </Animated>
            </div>
          </div>
     </Animated> 
  </div>
  );
     
}

export default Join;
