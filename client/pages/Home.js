import React, { Component } from 'react';
import { browserHistory } from 'react-router/es';
import { Card } from '../commons';

class Home extends Component {
  _onClick(collection) {
    this.props.selectCollection(collection);
    browserHistory.push(`/portrait/${collection}`);
  }
  render() {
    return (
      <div className="homepage">
        <div className="top">
          <Card key='family' onClick={this._onClick()} />
          <Card />
        </div>
        <div className="bottom">
          <Card />
          <Card />
        </div>
      </div>
    );
  }
}

export default Home;
