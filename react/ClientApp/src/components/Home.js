import React, { Component } from 'react';
import { NavMenu } from './NavMenu';
import DashBoard from  './DashBoard'

export class Home extends Component {
  static displayName = Home.name;

  render () {
    return (
      <div className="col">       
      <NavMenu/>
      </div>
    );
  }
}
