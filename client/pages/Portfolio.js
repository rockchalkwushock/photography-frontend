import React, { Component } from 'react';
import { connect } from 'react-redux/es';
import { AppCarousel } from '../modules';

@connect(
  state => ({
    photos: state.carousel
  })
)
class Portfolio extends Component {
  render() {
    const { params, photos } = this.props;
    const { collection } = params;
    const images = photos[collection];
    return (
      <div className="portfoliopage">
        <AppCarousel collection={images} />
      </div>
    );
  }
}

export default Portfolio;
