import React, { Component } from 'react';
import clsx from 'clsx';
import { Toolbar,AppBar,Typography,Button ,IconButton, Drawer ,List,ListItem,ListItemText} from '@material-ui/core';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import MenuIcon from '@material-ui/icons/Menu';
import { Link,Route,Redirect,useHistory } from 'react-router-dom';
import {AccountCircle, ArrowBackIos} from '@material-ui/icons';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import history from '../Servicos/history';
import './NavMenu.css';
const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));
export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    
    super(props);
    this.mudarpagina = this.mudarpagina.bind(this);
    
    this.state = {
      user:false,
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
    history.push("/Home");
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
    <ListItem button component={Link} to="/Cliente">
       <ListItemText primary="Cliente" />
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
