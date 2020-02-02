import React, { Component } from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Toolbar,AppBar,Typography,Button } from '@material-ui/core';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);

    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      collapsed: true
    };
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
      <header>
        <AppBar position="static">
      <Toolbar>
        <Typography  variant="h6" class="col col-sm-10" >
          Home
        </Typography>
        <Button color="inherit">Login</Button>
      </Toolbar>
    </AppBar>
      </header>
    );
  }
}
