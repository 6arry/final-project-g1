/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Menu, Segment, Confirm } from 'semantic-ui-react';


export default class Navigation extends Component {     //<--when you import 'Component' above, you don't need to write 'React.Component' here
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
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
            as={Link}
            to='/logout'
            name='logout'
            active={activeItem === 'logout'}
            onClick={this.handleItemClick}
          />
        </Menu>
      </Segment>
    );
  }
}


