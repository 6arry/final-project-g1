import React, { Component, Fragment } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    Container
} from 'reactstrap';
import { connect } from 'react-redux'; // "connect" and "PropTypes" also ADDED FOR LOGIN
import PropTypes from 'prop-types';
import RegisterModal from './auth/RegisterModal'; // "Register Modal", "LoginModal", and "Logout" ADDED HERE FOR LOGIN
import LoginModal from './auth/LoginModal';
import Logout from './auth/Logout';

class AppNavbar extends Component {
    state = {
        isOpen: false
    };

    static propTypes = {
        auth: PropTypes.object.isRequired
    };

    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    };

    render() {
        const { isAuthenticated, user } = this.props.auth;                       // "isAuthenticated" ALSO ADDED FOR LOGIN

        const authLinks = (                                                     // "authLinks" and "guestLinks" ADDED FOR LOGIN
            <Fragment>
                <NavItem>
                    <span className="navbar-text mr-3" >
                        <strong>{ user ? `Welcome ${user.name}` : ''}</strong>
                    </span>
                </NavItem>
                <NavItem>
                    <Logout />
                </NavItem>
            </Fragment>
        );

        const guestLinks = (
            <Fragment>
                <NavItem>
                    <RegisterModal />
                </NavItem>
                <NavItem>
                    <LoginModal />
                </NavItem>
            </Fragment>
        );

        return (
            <div>
                <Navbar color="dark" dark expand="sm" className="mb-5">
                    <Container>
                        <NavbarBrand href="/">Shopping List</NavbarBrand>
                        <NavbarToggler onClick={this.toggle} />
                        <Collapse isOpen={this.state.isOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                { isAuthenticated ? authLinks : guestLinks }
                            </Nav>
                        </Collapse>
                    </Container>
                </Navbar>
            </div>
        );
    };
}

const mapStateToProps = state => ({
    auth: state.auth
});

export default connect(
    mapStateToProps, 
    null
)(AppNavbar);