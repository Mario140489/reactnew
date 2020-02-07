import React, { Component } from 'react';
import { Toolbar,AppBar,Typography,Button, Avatar, IconButton } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';
import MenuIcon from '@material-ui/icons/Menu';
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
          <div className='row'>
            
          <IconButton> <MenuIcon/> </IconButton>
        <Typography  className="brand" variant="h6" >
          Home
        </Typography>
        </div>
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
