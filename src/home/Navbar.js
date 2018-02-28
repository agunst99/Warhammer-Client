import React from 'react';
import {
    Collapse,
    Navbar,
    NavbarToggler,
    NavbarBrand,
    Nav,
    NavItem,
    NavLink,
    Button
} from 'reactstrap';
import { Link } from 'react-router-dom'

class SiteBar extends React.Component {
    constructor(props) {
        super(props);

        this.toggle = this.toggle.bind(this);
        this.state = {
            isOpen: false
        };
    }

    toggle() {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    render() {
        return (
            <div>
                <Navbar color="faded" light expand="md">
                    <NavbarBrand href="/">Build Your Own Army</NavbarBrand>
                    <NavbarToggler onClick={this.props.logout} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <Button><Link to={this.props.loggedIn ? "/Home" : "/"}>Home</Link></Button>
                            </NavItem>

                            <NavItem>
                                <Button><Link to={this.props.loggedIn ? "/army" : "/"}>Army</Link></Button>
                            </NavItem>
                            <NavItem>
                                <Button><Link to={this.props.loggedIn ? "/messages" : "/"}>Messages</Link></Button>
                            </NavItem>
                            <NavItem>
                                <Button onClick={() => this.props.clickLogout()}>{this.props.loggedIn ? "logout" : "Login"}</Button>
                            </NavItem>
                            <NavItem>
                                <NavLink href="https://github.com/">Github</NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }

}

export default SiteBar;