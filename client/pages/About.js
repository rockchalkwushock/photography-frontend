import React, { Component } from 'react';
import { connect } from 'react-redux/es';
import { fetchCollection } from '../modules';
import { Image, Loader, ProfilePic, TextArea } from '../commons';

@connect(
  state => ({
    photo: state.carousel.about
  }),
  { fetchCollection }
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
        await this.props.fetchCollection('about');
        this.setState({ loading: false });
    })();
  }
  render() {
    const { photo } = this.props;
    // Should I also check that photo.length === 1?
    // Just to make sure that even though the fetch occurred
    // that the array is populated with a file.
    if (this.state.loading) {
      return <Loader />;
    }
    return (
      <div className="aboutpage">
        <ProfilePic>
          <Image src={photo} />
        </ProfilePic>
        <TextArea>
          <p>This is where the about me section will be!</p>
        </TextArea>
      </div>
    );
  }
}

export default About;
