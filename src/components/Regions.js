import React, { Component } from 'react';
import { Loader } from './Loader';
import { fetchRegions } from '../services/Wines';
export class Regions extends Component {

  onSelectRegion = (e, region) => {
    e.preventDefault();
    this.props.onSelectRegion(region);
  };

  render() {
    return (
      <div className="col s12 m6 l3">
        <h2 className="center-align">Regions</h2>
        <div className="collection">
          {this.props.regions.map(region => (
            <a
              key={region}
              href="#!"
              onClick={e => this.onSelectRegion(e, region)}
              className={['collection-item', region === this.props.region ? 'active' : ''].join(
                ' '
              )}>
              {region}
            </a>
          ))}
        </div>
      </div>
    );
  }
}

export class RegionsPage extends Component {
  state = {
    loading: false,
    regions: [],
  };

  componentDidMount() {
    this.setState({ loading: true }, () => {
      fetchRegions().then(regions => {
        this.setState({
          loading: false,
          regions,
        });
      });
    });
  }

  onSelectRegion = (region) => {
    this.props.router.push({
      pathname: `/regions/${region}`
    });
  }
  
  render() {
    if (this.state.loading) {
      return <div className="center-align"><Loader /></div>
    }

    return(
      <Regions 
        onSelectRegion={this.onSelectRegion}
        regions={this.state.regions}
        region={{}}
      />
    );
  }
}