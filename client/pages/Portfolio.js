import React, { Component } from 'react';
import { connect } from 'react-redux/es';
import { Loader } from '../commons';
import { AppCarousel } from '../modules';

@connect(
  state => ({
    photos: state.carousel
  })
)
class Portfolio extends Component {
  state = { loading: true };

  async componentDidMount() {
    const { params, photos } = this.props;
    const { collection } = params;
    const images = photos[collection];
    await images;
    this.setState({ loading: false });
  }

  /**
   * _createGallery(arg)
   * @param {Array} images
   * @returns {Array} gallery
   */
  _createGallery(images) {
    const gallery = images.reduce((array, image) => {
      array.push({
        original: image,
        sizes: '(max-width: 20em) 17.5em, (max-width: 30em) 27.5em, 50em'
      });
      return array;
    }, []);
    return gallery;
  }

  render() {
    const { params, photos } = this.props;
    const { collection } = params;
    const images = photos[collection];
    if (this.state.loading) return <Loader />;
    if (images.length < 1) return <h1>No Photos Found</h1>;
    const gallery = this._createGallery(images);
    return (
      <div className="portfoliopage">
        <AppCarousel gallery={gallery} />
      </div>
    );
  }
}

export default Portfolio;
