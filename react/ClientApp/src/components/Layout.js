import React, { Component } from 'react';
import {NavMenu} from './NavMenu';
import Container from '@material-ui/core/Container';
const isLogged = !!localStorage.getItem('token')
export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div className="cemporcento">
        {
          !!localStorage.getItem('token') ? <NavMenu/> : null
        }
        <div className="container-fluid">
          {this.props.children}
        </div>
      </div>
    );
  }
}
