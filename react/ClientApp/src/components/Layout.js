import React, { Component } from 'react';
import {NavMenu} from './NavMenu';

const isLogged = !!localStorage.getItem('token')
export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
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
