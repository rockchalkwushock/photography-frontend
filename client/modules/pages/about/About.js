import React, { PropTypes } from 'react';
import { Card, Image } from 'semantic-ui-react';

const src = 'http://funnyasduck.net/wp-content/uploads/2012/11/funny-darth-vader-drinking-tea-dark-side-star-wars-great-pics.jpg';

const About = ({ translate }) => (
  <div className="aboutpage">
    <Image src={src} size='small' shape='circular' />
    <Card centered raised>
      <Card.Content description={translate('description')} />
    </Card>
  </div>
);

About.propTypes = {
  translate: PropTypes.func
};

export default About;
