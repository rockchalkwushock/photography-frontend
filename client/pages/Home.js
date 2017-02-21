import React, { Component } from 'react';
import { browserHistory } from 'react-router/es';
import { connect } from 'react-redux/es';
import { Card, Image, Loader } from '../commons';
import { fetchCollection } from '../modules';

@connect(
  state => ({
    photos: state.carousel.home
  }),
  { fetchCollection }
)
class Home extends Component {
  state = { loading: true }
  /**
   * componentDidMount
   * - calls for fetching of initial photos for Home.
   * - updates state.carousel.home
   * - changes state of loading to false.
   */
  componentDidMount() {
    (async () => {
        await this.props.fetchCollection('home');
        this.setState({ loading: false });
    })();
  }
  /**
   * _onClick(arg)
   * - @param {String} collection
   * - @return ??? {Object} || {Funciton}
   * - calls for fetch of collection of photos by ${collection} to /api/v1.
   * - updates state.carousel.
   * - redirects to /portfolio/${collection}.
   */
  _onClick(collection) {
    this.props.fetchCollection(collection);
    browserHistory.push(`/portfolio/${collection}`);
  }
  render() {
    const { photos } = this.props;
    if (this.state.loading) {
      return <Loader />;
    }
    return (
      <div className="homepage">
        <div className="top">
          <Card
            photos={photos.family} // pass to AppCarousel the exact array of images needed.
            onClick={() => this._onClick('family')}
          >
            <Image src={photos[0]} />
          </Card>
          <Card
            photos={photos.portrait}
            onClick={() => this._onClick('portrait')}
          >
            <Image src={photos[1]} />
          </Card>
        </div>
        <div className="bottom">
          <Card
            photos={photos.travel}
            onClick={() => this._onClick('travel')}
          >
            <Image src={photos[2]} />
          </Card>
          <Card
            photos={photos.wedding}
            onClick={() => this._onClick('wedding')}
          >
            <Image src={photos[3]} />
          </Card>
        </div>
      </div>
    );
  }
}

export default Home;
