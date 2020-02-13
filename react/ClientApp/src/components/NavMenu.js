import React, { Component } from 'react';
import { Toolbar,AppBar,Typography,Button ,IconButton, Drawer ,List,ListItem,ListItemText} from '@material-ui/core';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import purple from '@material-ui/core/colors/purple';
import MenuIcon from '@material-ui/icons/Menu';
import { Redirect } from 'react-router';
import { Link,useHistory,BrowserRouter as Router,Route,Redirect } from 'react-router-dom';
import {AccountCircle, ArrowBackIos} from '@material-ui/icons';
//import history from '../Servicos/history';
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
  mudarpagina(pagina){
    alert("teste");
    {<Redirect to="/Home"/>}
  }
  render () {
    return (
        <header>
        <AppBar position="static">
      <Toolbar>
        <div className="col col-sm-6">
          <div className='row'>
          <IconButton onClick={this.toggleNavbar}> <MenuIcon className="btnmenu"/> </IconButton>
        <Typography  className="brand" variant="h6" >
          SyS
        </Typography>
        </div>
        </div>
       <div className="col col-sm-6 alnD"> 
       <Button variant="outlined" className="btnuser">
        <AccountCircle/> &nbsp;
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
          <IconButton className="btndireita" onClick={this.toggleNavbar}> <ArrowBackIos className="btnmenu"/> </IconButton>
      </Toolbar>
    </AppBar>
    <List >
    <ListItem button component={Link} to="/counter"  >
          <ListItemText  primary="Counter"  />
    </ListItem>
    <ListItem button component={Link} to="/fetch-data">
          <ListItemText  primary="teste"  />
    </ListItem>
    <ListItem button onClick={() => this.mudarpagina("/Home")}>
          <ListItemText  primary="teste"  />
    </ListItem>
   </List>

     </div>
    </Drawer>
    </header>
    );
  }
}
