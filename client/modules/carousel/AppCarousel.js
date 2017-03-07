import React, { Component } from 'react';
import ImageGallery from 'react-image-gallery';
import 'react-image-gallery/styles/css/image-gallery.css';

class AppCarousel extends Component {
  render() {
    const { gallery } = this.props;
    console.log(gallery);
    return (
      <ImageGallery
        autoPlay={true}
        items={gallery}
        showThumbnails={false}
        showPlayButton={false}
        showFullscreenButton={false}
        disableArrowKeys={false}
        // onImageError:Func
        // slideDuration:Int
        // onImageLoad:Func
      />
    );
  }
}

export default AppCarousel;
