import React, { Component } from 'react';
import { Regions, WineList, Wine, CommentModal } from '.';
import { RegionsPage } from './Regions';

import * as WinesService from '../services/Wines';

const host = 'https://wines-api.herokuapp.com';

export class WineApp extends Component {

  goBack = (e) => {
    e.preventDefault();
    this.props.router.goBack();
  };

  goHome = (e) => {
    e.preventDefault();
    this.props.router.push({
      pathname: "/"
    });
  };

  render() {
    // Create a flag to hide buttons on the home page
    const displayButton = window.location.pathname !== '/';

    return(
      <div className="container">
        <h1 className="center-align">Open Wine Database</h1>
        <div className="center-align">
          You can read the Wines API documentation at <a href="https://bit.ly/rbw-api" target="_blank">https://wines-api.herokuapp.com</a> and try it <a href="https://bit.ly/rbw-api-swag" target="_blank">here</a>
        </div>
        {displayButton && (<div className="center-align" style={{ marginTop: 20 }}>
          <button className="btn waves-effect waves-light" onClick={this.goBack} type="button">
            <i className="material-icons left">fast_rewind</i>
            Back
          </button>
          <button className="btn waves-effect waves-light" style={{ marginLeft: 10 }} onClick={this.goHome} type="button">
            <i className="material-icons left">home</i>
            Home
          </button>
        </div>)}
        <div className="row">
          {this.props.children}
        </div>
      </div>
    );
  }
}
