import React from 'react';
import { Component } from 'react';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem } from 'react-bootstrap';

class NavBar extends Component {
  render() {
    return (
      <Navbar inverse>
        <Navbar.Header>
          <Navbar.Brand>
            <a href="#">
              <img src='./src/assets/mblogoa.png'></img>
            </a>
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
        <Nav>
          <NavDropdown eventKey={3} title="Projects" id="basic-nav-dropdown">
            <MenuItem href='http://gilson.herokuapp.com'>
            <i className="fa fa-area-chart"></i> Team Rubicon Mobilizer
            </MenuItem>
            <MenuItem href='http://chutte.com'>
            <i className="fa fa-umbrella"></i> Chutte
            </MenuItem>
            <MenuItem href='http://socialflix.herokuapp.com'>
            <i className="fa fa-film"></i> Socialflix
            </MenuItem>
            <MenuItem href='http://tinnrplusplus.herokuapp.com'>
              <i className="fa fa-plus-circle"></i> Tinnr
            </MenuItem>
            <MenuItem href='http://github.com/mickberber/mcTesting'>
              <i className='fa fa-flask'></i> McTesting
            </MenuItem>
          </NavDropdown>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="https://www.linkedin.com/in/michaelberber">
            <i className='fa fa-linkedin-square fa-3x' style={{color:'white'}} aria-hidden='true'></i>  LinkedIn</NavItem>
          <NavItem eventKey={2} href="https://www.github.com/mickberber">
            <i className='fa fa-github-square fa-3x' style={{color:'white'}} aria-hidden='true'></i>  Github</NavItem>
          <NavItem eventKey={3} href='https://docs.google.com/document/d/1Upptm3WFDf4_vZV9MR7rHL2JXOYD__GF-2tncoEVUj4/edit?usp=sharing'>
            <i className='fa fa-file-text fa-3x' style={{color:'white'}} aria-hidden='true'></i>  My Resume</NavItem>
        </Nav>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

export default NavBar;
