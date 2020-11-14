import React, { Component, Fragment } from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Container
} from 'reactstrap';
import RegisterModal from './auth/RegisterModal'
import Login from './auth/LoginModal'
import Logout from './auth/Logout'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

class AppNavbar extends Component {
    static propTypes = {
        auth: PropTypes.object.isRequired
    }
    constructor(props) {
        super();
        this.state = {
            isOpen: false
        };
    }
    toggle = () => {
        this.setState({ isOpen: !this.state.isOpen });
    }
    render() {
        const { user, isAuthenticated } = this.props.auth

        const authLinks = (
            <Fragment>
                <NavItem>
                    <span className="navbar-text mr-3">
                        <strong> {user ? `Welcome ${user.name}` : ""} </strong>
                    </span>
                </NavItem>
                <NavItem>
                    <Logout></Logout>
                </NavItem>
            </Fragment>
        );
        const guestLinks = (
            <Fragment>
                <NavItem>
                    <RegisterModal />
                </NavItem>
                <NavItem>
                    <Login />
                </NavItem>
            </Fragment>
        );
        return <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href="/">ShoppingList</NavbarBrand>
                    <NavbarToggler onClick={this.toggle}></NavbarToggler>
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            {isAuthenticated ? authLinks : guestLinks}
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
        </div>
    }
}
const mapStateToProps = (state) => ({
    auth: state.auth
});
export default connect(mapStateToProps, null)(AppNavbar);