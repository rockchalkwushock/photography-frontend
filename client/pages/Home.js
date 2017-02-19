import React from 'react';
import { browserHistory } from 'react-router/es';
import { Card } from '../commons';

const Home = () => (
  <div className="homepage">
    <div className="top">
      <Card onClick={() => browserHistory.push('/portrait/family')} />
      <Card />
    </div>
    <div className="bottom">
      <Card />
      <Card />
    </div>
  </div>
);

export default Home;
