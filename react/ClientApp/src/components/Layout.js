import React, { Component } from 'react';
import {Login} from './Login';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
          {this.props.children}
         </div>
        </div>
      </div>
    );
  }
}
