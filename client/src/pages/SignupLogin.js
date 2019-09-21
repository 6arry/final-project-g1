import React from 'react';
import './App.css';
import './SignupLogin.css';
import {Animated} from 'react-animated-css';
import { Button, Input } from 'reactstrap';

function SignupLogin() {
  return (
    <div className="page">
      <Animated animationIn="slideInLeft" animationOut="zoomOutDowçn" animationInDelay={0} animationInDuration={1400} animationOutDuration={1400} isVisible={true}>
        <div className="join">
          <div>
              <Animated animationIn="zoomInRight" animationOut="zoomOutDowçn" animationInDuration={1400} animationOutDuration={1400} isVisible={true}> 
                <div className="container col-4">      
                  <h1 className="hit-the-floor">Login</h1>
                    <form method="POST" action="/api/user">
                      <Input name="name" type="text" placeholder="New User" className="mb-1" />
                      <Input name="password" type="password" placeholder="Password" className="mb-1" />
                      <center><Button type="submit" color="primary">Signup</Button></center>
                    </form>
                      <br>
                      </br>
                    <form method="POST" action="/api/login">
                      <Input name="username" type="text" placeholder="Username" className="mb-1" />
                      <Input name="password" type="password" placeholder="Password" className="mb-1" />
                      <center><Button type="submit" color="success">Login</Button></center>
                    </form>
                </div>
              </Animated>
            </div>
          </div>
     </Animated> 
  </div>
  );
     
}

export default SignupLogin;
