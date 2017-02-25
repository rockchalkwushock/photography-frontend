import React, { Component } from 'react';
import { Category, ImageUrl } from '../modules';

class Upload extends Component {
  render() {
    return (
      <div>
        <Category />
        <ImageUrl />
      </div>
    );
  }
}

export default Upload;
