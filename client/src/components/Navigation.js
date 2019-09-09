/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import { Menu, Segment } from 'semantic-ui-react';
import { Link } from 'react-router-dom';

export default class Navigation extends React.Component {
  state = { activeItem: 'home' };

  handleItemClick = (e, { name }) => this.setState({ activeItem: name });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment inverted>
        <Menu inverted pointing secondary>
          <Link to='/'>
            <Menu.Item
              name='home'
              active={activeItem === 'home'}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to='/host'>
            <Menu.Item
              name='host'
              active={activeItem === 'host'}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to='/join'>
            <Menu.Item
              name='join'
              active={activeItem === 'join'}
              onClick={this.handleItemClick}
            />
          </Link>
          <Link to='/logout'>
            <Menu.Item
              name='logout'
              active={activeItem === 'logout'}
              onClick={this.handleItemClick}
            />
          </Link>
        </Menu>
      </Segment>
    );
  }
}
