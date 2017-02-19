import React, { Component } from 'react';
import { browserHistory } from 'react-router/es';
// import { connect } from 'react-redux/es';
import { Card } from '../commons';

// TODO: @connect()
class Home extends Component {
  state = { loading: true }
  // componentDidMount() {
  //   (async () => {
  //     if () {
  //       // TODO: await fetchPhotos();
  //       // TODO: this.setState({ loading: false})
  //     } else {
  //       // TODO: this.setState({ loading: false})
  //     }
  //   })();
  // }
  _onClick(collection) {
    // this.props.selectCollection(collection);
    browserHistory.push(`/portfolio/${collection}`);
  }
  render() {
    // if (this.state.loading) {
    //   // TODO: return LoadingComponent;
    // }
    return (
      <div className="homepage">
        <div className="top">
          <Card onClick={() => this._onClick('family')} />
          <Card onClick={() => this._onClick('portrait')} />
        </div>
        <div className="bottom">
          <Card onClick={() => this._onClick('travel')} />
          <Card onClick={() => this._onClick('wedding')} />
        </div>
      </div>
    );
  }
}

export default Home;
