import React, { Component } from 'react';
import Carousel from 'nuka-carousel';

class AppCarousel extends Component {
  render() {
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
