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

  _createGallery(images) {
    const gallery = images.reduce((array, image) => {
      array.push({
        original: image,
        sizes: '(max-width: 320px) 280px, (max-width: 480px) 440px, 800px'
      });
      return array;
    }, []);
    console.log(gallery); // [object]
    return gallery;
  }

  render() {
    const { params, photos } = this.props;
    const { collection } = params;
    const images = photos[collection];
    if (this.state.loading) return <Loader />;
    if (images.length < 1) return <h1>No Photos Found</h1>;
    const gallery = this._createGallery(images);
    console.log(gallery); // promise resolved, promise value undefined.
    return (
      <div className="portfoliopage">
        <AppCarousel gallery={gallery} />
      </div>
    );
  }
}

export default Portfolio;
