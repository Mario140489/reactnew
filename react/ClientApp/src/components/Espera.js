import React, { Component } from 'react';
import { Backdrop,CircularProgress,Typography,Button } from '@material-ui/core';

export class Espera extends Component {
  static displayName = Espera.name;

  constructor (props) {
    debugger;
    super(props);
  }


  render () {
    debugger;
    return (
      <div>
      <Backdrop className="espera" open>
      <CircularProgress color="inherit" />
      </Backdrop>
      </div>
    );
  }
}