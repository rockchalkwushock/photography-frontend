import React from 'react';
import { Card, Image } from 'semantic-ui-react';

const src = 'http://funnyasduck.net/wp-content/uploads/2012/11/funny-darth-vader-drinking-tea-dark-side-star-wars-great-pics.jpg';
const description = [
  'Hello World!',
  'Doing it BIG!',
  'All day every day!'
].join(' ');

const About = () => (
  <div className="aboutpage">
    <Image src={src} size='small' shape='circular' />
    <Card centered raised>
      <Card.Content description={description} />
    </Card>
  </div>
);

export default About;
