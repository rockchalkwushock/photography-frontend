import React from 'react';
import { browserHistory } from 'react-router/es';
import { Card } from 'semantic-ui-react';

const src = 'http://funnyasduck.net/wp-content/uploads/2012/11/funny-darth-vader-drinking-tea-dark-side-star-wars-great-pics.jpg';

const HomePage = () => (
  <div className='homepage'>
    <Card.Group itemsPerRow={2}>
      <Card image={src} onClick={() => browserHistory.push('/portfolio/travel')} />
      <Card image={src} onClick={() => browserHistory.push('/portfolio/portrait')} />
      <Card image={src} onClick={() => browserHistory.push('/portfolio/family')} />
      <Card image={src} onClick={() => browserHistory.push('/portfolio/wedding')} />
    </Card.Group>
  </div>
);

export default HomePage;
