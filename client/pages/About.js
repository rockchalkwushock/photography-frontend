import React, { Component } from 'react';
import { connect } from 'react-redux/es';
import { withTranslate } from 'react-redux-multilingual';
import { fetchCategory } from '../modules';
import { Image, Loader, ProfilePic, TextArea } from '../commons';

@connect(
  state => ({
    photo: state.carousel.about
  }),
  { fetchCategory }
)
class About extends Component {
  state = { loading: true }
  /**
   * componentDidMount
   * - calls for fetching of initial photos for About.
   * - updates state.carousel.about
   * - changes state of loading to false.
   */
  componentDidMount() {
    (async () => {
        await this.props.fetchCategory('about');
        this.setState({ loading: false });
    })();
  }
  render() {
    const { photo, translate } = this.props;
    // Should I also check that photo.length === 1?
    // Just to make sure that even though the fetch occurred
    // that the array is populated with a file.
    if (this.state.loading) {
      return <Loader />;
    } else if (photo.length === 0) {
      return <h1>{translate('no-photo')}</h1>; // TODO: Find a better handler.
    }
    return (
      <div className="aboutpage">
        <ProfilePic>
          <Image src={photo} />
        </ProfilePic>
        <TextArea>
          <p>{translate('description')}</p>
        </TextArea>
      </div>
    );
  }
}

export default withTranslate(About);
