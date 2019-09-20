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
                  animationOut="zoomOutDown" 
                  animationInDuration={1400} 
                  animationOutDuration={1400} 
                  isVisible={true}> 
                <div>      
                  <h1 className="hit-the-floor">Sign up Bitch!</h1>
                  <Form onSubmit={this.onSubmit}>
                    <FormGroup>
                      <Label for="user">Username</Label>
                      <Input 
                        type="name"
                        name="name"
                        id="name"
                        placeholder="Username"
                        className="mb-3"
                        onChange={this.onChange}
                      />

                      <Label for="password">Password</Label>
                      <Input 
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Password"
                        className="mb-3"
                        onChange={this.onChange}
                      />
                      <Button
                        color="success"
                        style={{marginTop: '2rem'}}
                        block
                      >Login</Button>
                    </FormGroup>
                  </Form>
                    <form method="POST" action="/api/user">
                      <Input name="name" type="text" placeholder="New User" />
                      <Input name="password" type="text" placeholder="Password" />
                      {/* <input type="submit" /> */}
                      <Button type="submit" color="success">Signup</Button>
                    </form>
                    <br>
                    </br>
                    <form method="POST" action="/api/login">
                      <input name="username" type="text" placeholder="Login" />
                      <input name="password" type="password" placeholder="Password" />
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


<Form onSubmit={this.onSubmit}>
                            <FormGroup>

                                <Label for="email">Email</Label>
                                <Input 
                                    type="email"
                                    name="email"
                                    id="email"
                                    placeholder="Email"
                                    className="mb-3"
                                    onChange={this.onChange}
                                />

                                <Label for="password">Password</Label>
                                <Input 
                                    type="password"
                                    name="password"
                                    id="password"
                                    placeholder="Password"
                                    className="mb-3"
                                    onChange={this.onChange}
                                />
                                <Button
                                    color="dark"
                                    style={{marginTop: '2rem'}}
                                    block
                                >Login</Button>
                            </FormGroup>
                        </Form>