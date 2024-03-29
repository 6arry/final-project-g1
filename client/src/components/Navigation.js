/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment } from 'semantic-ui-react';


export default class Navigation extends React.Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Menu.Item as={Link} to='/' name='login' active={activeItem === 'login'} onClick={this.handleItemClick} />
          {/* <Menu.Item as={Link} o='/host' name='host' active={activeItem === 'host'} onClick={this.handleItemClick} /> */}
          <Menu.Item as={Link} to='/dashboard' name='dashboard' active={activeItem === 'dashboard'} onClick={this.handleItemClick} />
          {/* <Menu.Item as={Link} to='/logout' name='logout' active={activeItem === 'logout'} onClick={this.handleItemClick} /> */}
        </Menu>
      </Segment>
    );
  }
}


