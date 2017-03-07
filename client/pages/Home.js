import React, { Component } from 'react';
import { browserHistory } from 'react-router/es';
import { withTranslate } from 'react-redux-multilingual';
import { connect } from 'react-redux/es';
import { Loader } from '../commons';
import { AppCarousel, fetchCategory } from '../modules';

@connect(
  state => ({
    photos: state.carousel
  }),
  { fetchCategory }
)
class Home extends Component {
  state = { loading: true }
  componentDidMount() {
    (async () => {
      await this.props.fetchCategory('home');
      this.setState({ loading: false });
    })();
  }
  async _onClick(category) {
    await this.props.fetchCategory(category);
    browserHistory.push(`/portfolio/${category}`);
  }
  render() {
    const { params, photos, translate } = this.props;
    if (this.state.loading) return <Loader />;
    const { collection } = params;
    const category = collection === undefined ? 'home' : collection;
    const images = photos[category];
    return (
      <div className='homepage'>
        <AppCarousel gallery={images} />
        <nav className="nav-portfolio">
          <div className="menu-container">
            <ul>
              <li onClick={() => this._onClick('family')}>
                {translate('family')}
              </li>
              <li onClick={() => this._onClick('portrait')}>
                {translate('portrait')}
              </li>
              <li onClick={() => this._onClick('travel')}>
                {translate('travel')}
              </li>
              <li onClick={() => this._onClick('wedding')}>
                {translate('wedding')}
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default withTranslate(Home);
