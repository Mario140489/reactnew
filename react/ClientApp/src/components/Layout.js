import React, { Component } from 'react';
import { Container} from 'reactstrap';
import { NavMenu } from './NavMenu';
import {Login} from './Login';

export class Layout extends Component {
  static displayName = Layout.name;

  render () {
    return (
      <div>
        <div className="container-fluid">
          <div className="row">
         <Login/>
         </div>
        </div>
      </div>
    );
  }
}
