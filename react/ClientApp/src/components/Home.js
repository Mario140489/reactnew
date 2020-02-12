import React, { Component } from 'react';


export class Home extends Component {
  static displayName = Home.name;
 name() {
   alert('teste');
 }
  render () {
    return (
      <div>  
        HOme    
      </div>
    );
  }
}
