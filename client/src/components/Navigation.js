/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment, Confirm } from 'semantic-ui-react';
import { LogoutConfirmation } from './logout/LogoutConfirmation';


export default class Navigation extends Component {     //<--when you import 'Component' above, you don't need to write 'React.Component' here
  constructor() {
    this.state = {
      activeItem: 'home',
      logoutModalIsOpen: false
    };
  }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  toggleLogoutModal = () => {
    this.setState({ logoutModalIsOpen: !this.state.logoutModalIsOpen });
  }

  confirmLoggingOut = () => {
    this.state({ logoutModalIsOpen: false, activeItem: 'logout' });
  }

  render() {
    const { activeItem } = this.state;

    return (
      <Fragment>
        <Segment inverted>
          <Menu inverted pointing secondary>
            <Menu.Item
              as={Link}
              to='/'
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Link}
              to='/host'
              name='host'
              active={activeItem === 'host'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Link}
              to='/join'
              name='join'
              active={activeItem === 'join'}
              onClick={this.handleItemClick}
            />
            <Menu.Item
              as={Button}
              to='/logout'
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.toggleLogoutModal}
            />
          </Menu>
        </Segment>
        <LogoutConfirmation 
          isOpen={this.state.logoutModalIsOpen}
          cancel={this.toggleLogoutModal}
          close={this.confirmLoggingOut}
        />
      </Fragment>
    );
  }
}

export default Navigation;