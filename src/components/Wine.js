import React, { Component } from 'react';
import { Loader } from './Loader';
import { LikeButton, CommentButton, CommentList } from '.';
import { fetchWine, host } from '../services/Wines';

export class Wine extends Component {

  render() {
    // console.log(this.props.wine);

    // if (!this.props.wine) {
    //   return null;
    // }
    return (
      <div>
        {this.props.wine &&
          <div className="col s12 m12 l6 offset-l3">
            <h2 className="center-align">Wine details</h2>
            <div className="card horizontal">
              <div className="card-image">
                <img
                  className="responsive-img wine-detail-image"
                  alt="Wine bottle pic"
                  src={`${this.props.host}/api/wines/${this.props.wine.id}/image`}
                />
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <h3>{this.props.wine.name}</h3>
                  <br />
                  <p>
                    <b>Appellation:</b> {this.props.wine.appellation.name}
                  </p>
                  <p>
                    <b>Region:</b> {this.props.wine.appellation.region}
                  </p>
                  <p>
                    <b>Color:</b> {this.props.wine.type}
                  </p>
                  <p>
                    <b>Grapes:</b> {this.props.wine.grapes.join(', ')}
                  </p>
                  <CommentList wine={this.props.wine} />
                </div>
                <div className="card-action">
                  <LikeButton wine={this.props.wine} />
                  <CommentButton openCommentModal={this.props.openCommentModal} />
                </div>
              </div>
            </div>
          </div>
        }
      </div>
      
    );
  }
}

export class WinePage extends Component {
  state = {
    loading: false,
    wine: null
  }

  componentDidMount() {
    this.setState({ loading: true }, () => {
      fetchWine(this.props.params.wineId).then(wine => {
        this.setState({
          loading: false,
          wine: wine,
        });
      });
    });
  }

  render() {
    if (this.state.loading) {
      return <div className="center-align"><Loader /></div>
    }

    return (
      <Wine
        wine={this.state.wine} 
        host={host}
      />
    );
  }
}