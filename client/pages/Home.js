import React, { Component } from 'react';
import { browserHistory } from 'react-router/es';
import { withTranslate } from 'react-redux-multilingual';
import { connect } from 'react-redux/es';
import { Loader } from '../commons';
import { AppCarousel, fetchCategory } from '../modules';

@connect(
  state => ({
    photos: state.carousel.home
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
    const { photos, translate } = this.props;
    if (this.state.loading) {
      return <Loader />;
    } else if (photos.length === 0) {
      return <h1>{translate('no-photos')}</h1>; // TODO: Find a better handler.
    }
    return (
      <div className="homepage">
        <AppCarousel gallery={photos} />
      </div>
    );
  }
}

export default withTranslate(Home);
