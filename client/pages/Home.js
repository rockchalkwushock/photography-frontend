import React, { Component } from 'react';
import { browserHistory } from 'react-router/es';
import { withTranslate } from 'react-redux-multilingual';
import { connect } from 'react-redux/es';
import { Loader } from '../commons';
import { AppCarousel, fetchCategory } from '../modules';

@connect(
  state => ({
    home: state.carousel.home,
    photos: state.carousel
  }),
  { fetchCategory }
)
class Home extends Component {
  state = { loading: true }
  componentWillMount() {
    // have access to state & props but not DOM.
    // can intercept the state before the render occurs.
    console.log('ComponentWillMount');
  }
  componentDidMount() {
    console.log('ComponentDidMount');
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
    console.log('render');
    const { home, translate } = this.props;
    if (this.state.loading) return <Loader />;
    return (
      <div className='homepage'>
        <AppCarousel gallery={home} />
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
