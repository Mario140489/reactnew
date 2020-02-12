import React, { Component } from 'react';
import { Toolbar,AppBar,Typography,Button, Avatar, IconButton, Drawer } from '@material-ui/core';
import purple from '@material-ui/core/colors/purple';
import MenuIcon from '@material-ui/icons/Menu';
import {ArrowBackIosIcon, AccountCircleIcon} from '@material-ui/icons';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);
    
    
    this.state = {
      user:"",
      collapsed: false
    };
   this.setState({user:localStorage.getItem('user')}); 
   this.toggleNavbar = this.toggleNavbar.bind(this);
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
        <div className="col col-sm-6">
          <div className='row'>
            
          <IconButton onClick={this.toggleNavbar}> <MenuIcon className="btnmenu"/> </IconButton>
        <Typography  className="brand" variant="h6" >
          Home
        </Typography>
        </div>
        </div>
       <div className="col col-sm-6 alnD"> 
       <Button variant="outlined" className="btnuser">
         <AccountCircleIcon/>
        {localStorage.getItem('user')}
       </Button>
        </div>
      </Toolbar>
    </AppBar>
    <Drawer open = {this.state.collapsed}>
     <div role="presentation" className='sidelist'>
     <AppBar className="corcinza" position="static">
      <Toolbar>
      <Typography   variant="h6" >
          Home
        </Typography>
          <IconButton className="btndireita" onClick={this.toggleNavbar}> <ArrowBackIosIcon className="btnmenu"/> </IconButton>

      </Toolbar>
    </AppBar>
     </div>
    </Drawer>
    </header>
    );
  }
}
