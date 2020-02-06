import React, {Component} from 'react'

export class NotFound extends Component {
    static displayName = NotFound.name;
  
    render () {
      return (
        <div>
          <div className="container-fluid">
            <div className="row">
            <h1>Not Found</h1>
           </div>
          </div>
        </div>
      );
    }
  }