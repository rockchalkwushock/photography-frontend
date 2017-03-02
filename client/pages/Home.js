import React, { Component } from 'react';
import { browserHistory } from 'react-router/es';
import { connect } from 'react-redux/es';
import { Card, Image, Loader } from '../commons';
import { fetchCategory } from '../modules';

@connect(
  state => ({
    photos: state.carousel
  }),
  { fetchCategory }
)
class Home extends Component {
  state = { loading: true }
  /**
   * componentDidMount
   * - calls for fetching of images for Home.
   * - populates state.carousel.home
   * - changes state of loading to false.
   */
  componentDidMount() {
    (async () => {
        await this.props.fetchCategory('home');
        this.setState({ loading: false });
    })();
  }
   /**
   * _onClick(arg)
   * - @param {String} category
   * - @return {Promise}
   * - fetches collection of images by category name.
   * - updates state.carousel[category].
   * - redirects to /portfolio/${category}.
   */
  async _onClick(category) {
    await this.props.fetchCategory(category);
    browserHistory.push(`/portfolio/${category}`);
  }
  render() {
    const { photos } = this.props;
    const { home } = photos; // the exact array of images needed.
    if (this.state.loading) {
      return <Loader />;
    } else if (home.length === 0) {
      return <h1>No Photos Found</h1>; // TODO: Find a better handler.
    }
    return (
      <div className="homepage">
        <div className="top">
          <Card onClick={() => this._onClick('family')}>
            <Image src={home[0]} />
          </Card>
          <Card onClick={() => this._onClick('portrait')}>
            <Image src={home[1]} />
          </Card>
        </div>
        <div className="bottom">
          <Card onClick={() => this._onClick('travel')}>
            <Image src={home[2]} />
          </Card>
          <Card onClick={() => this._onClick('wedding')}>
            <Image src={home[3]} />
          </Card>
        </div>
      </div>
    );
  }
}

export default Home;
