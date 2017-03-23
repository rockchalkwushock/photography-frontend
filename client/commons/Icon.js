import React from 'react';
import ReactGA from 'react-ga';
import FontAwesome from 'react-fontawesome';

const Icon = ({ event, name, url }) => (
  <ReactGA.OutboundLink
    className='icon'
    eventLabel={event}
    rel='nreferrer noopener'
    target='blank'
    to={url}
  >
    <FontAwesome
      name={name}
      size='lg'
    />
  </ReactGA.OutboundLink>
);

export default Icon;
