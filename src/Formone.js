import React, { Component } from 'react';
import './Formone.scss';
import './css/flexboxgrid.min.css';

class Formone extends Component {
  render() {
    return (
      <div className="App">
      <div className="row">
          <div className="col-xs-12 col-sm-8 col-md-6 col-lg-4">
              <div className="box">12</div>
          </div>
          <div className="col-xs-12 col-sm-4 col-md-6 col-lg-6">
              <div className="box">8</div>
          </div>
      </div>
      </div>
    );
  }
}

export default Formone;
