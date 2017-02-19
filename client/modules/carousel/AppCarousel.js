import React, { Component } from 'react';
// import { connect } from 'react-redux/es';
import Carousel from 'nuka-carousel';

// TODO: @connect()
class AppCarousel extends Component {
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
  render() {
    // if (this.state.loading) {
    //   // TODO: return LoadingComponent;
    // }
    return (
      <Carousel>
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide1" alt='poop' />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide2" alt='poop' />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide3" alt='poop' />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide4" alt='poop' />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide5" alt='poop' />
        <img src="http://placehold.it/1000x400/ffffff/c0392b/&text=slide6" alt='poop' />
      </Carousel>
    );
  }
}

export default AppCarousel;
