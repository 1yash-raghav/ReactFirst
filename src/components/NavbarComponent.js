import React, { Component } from "react";
import Button from "../Button";
import { Navbar, NavbarBrand, Nav, NavbarToggler, NavItem, Collapse} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faSign, faNewspaper, faInfo, faMobile} from '@fortawesome/free-solid-svg-icons';

export default class AnimatedNav extends Component {
  constructor(props) {
        super(props)

        this.state = {
            isNavOpen: false,
            isModalOpen: false
        };

        this.toggleNav = this.toggleNav.bind(this);
    }

    toggleNav() {
        this.setState({ isNavOpen: !this.state.isNavOpen });
    }

  render() {
    return (
      <Navbar dark expand="md">
                        <NavbarToggler onClick={this.toggleNav} />
                        <NavbarBrand className="mr-auto" href="/" style={{paddingRight: "100px", marginLeft: "50px"}}>
                            <h3><span style={{paddingRight: "30px", fontFamily: "sans-serif"}}>SACHDEVA</span>
                            <img className="" src="assets/images/image.png" alt="Sachdeva" width="80px" height="80px"/></h3>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar >

                            <Nav navbar>
                                <NavItem style={{paddingRight:"10px"}}>
                                    <NavLink className="nav-link" to="/home">
                                        <FontAwesomeIcon icon={faHome}/> Home
                                </NavLink>
                                </NavItem>

                                <NavItem style={{paddingRight:"10px", color: "#F9A826"}}>
                                    <NavLink className="nav-link" to="/aboutus">
                                        <FontAwesomeIcon icon={faInfo}/> About us
                                </NavLink>
                                </NavItem>

                                <NavItem style={{paddingRight:"10px"}}>
                                    <NavLink className="nav-link" to="/menu">
                                        <FontAwesomeIcon icon={faNewspaper}/> Menu
                                </NavLink>
                                </NavItem>

                                <NavItem style={{paddingRight:"10px"}}>
                                    <NavLink className="nav-link" to="/contactus">
                                        <FontAwesomeIcon icon={faMobile}/> Contact us
                                </NavLink>
                                </NavItem>
                            </Nav>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <Button outline onClick={this.toggleModal}>
                                        <FontAwesomeIcon icon={faSign}/> Login
                                    </Button>
                                </NavItem>
                            </Nav>
                        </Collapse>
                </Navbar>
    );
  }
}
