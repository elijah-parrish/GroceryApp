import React, { Component } from 'react';

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

// This is how you declare a React component
class AppNavbar extends Component {
    // this.toggle = this.toggle.bind(this); Not necessary
    state = {
        isOpen: false
    }   
    
    // Using the arrow function here makes the binding the 
    // function to 'this' unnecessary
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }

    render () {
        return (
            <div>
            <Navbar color="dark" dark expand="sm" className="mb-5">
                <Container>
                    <NavbarBrand href= "/">Grocery List</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className = "ml-auto" navbar>
                            <NavItem>
                                <NavLink href="https://github.com/elijah-parrish">
                                    Github
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Collapse>
                </Container>
            </Navbar>
            </div>
        ); 
    }
}

export default AppNavbar;