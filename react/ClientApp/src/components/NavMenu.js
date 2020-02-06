import React, { Component } from 'react';
import { Toolbar,AppBar,Typography,Button, Avatar } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);
    
    this.toggleNavbar = this.toggleNavbar.bind(this);
    this.state = {
      user:"",
      collapsed: true
    };
   this.setState({user:localStorage.getItem('user')}); 
  }

  toggleNavbar () {
    this.setState({
      collapsed: !this.state.collapsed
    });
  }

  render () {
    return (
        <header className="row">
        <AppBar position="static">
      <Toolbar>
        <div className="col col-sm-10">
        <Typography  variant="h6" >
          Home
        </Typography>
        </div>
       <div className="col col-sm-2 alnD"> 
       <Button variant="outlined" className="btnuser">
        {localStorage.getItem('user')}
       </Button>
        </div>
      </Toolbar>
    </AppBar>
    </header>
    );
  }
}
