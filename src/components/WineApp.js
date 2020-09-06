import React, { Component } from 'react';
import { Regions, WineList, Wine, CommentModal } from '.';
import { RegionsPage } from './Regions';

import * as WinesService from '../services/Wines';

const host = 'https://wines-api.herokuapp.com';

export class WineApp extends Component {
  render() {
    return(
      <div className="container">
        <h1 className="center-align">Open Wine Database</h1>
        <div className="row">
          {this.props.children}
        </div>
      </div>
    );
  }
}
