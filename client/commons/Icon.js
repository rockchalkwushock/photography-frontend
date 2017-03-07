import React from 'react';
import ReactGA from 'react-ga';
import FontAwesome from 'react-fontawesome';

const Icon = ({ url, event, name }) => (
  <ReactGA.OutboundLink
    className='icon'
    rel='nreferrer noopener'
    eventLabel={event}
    to={url}
    target='blank'
  >
    <FontAwesome
      name={name}
      size='lg'
    />
  </ReactGA.OutboundLink>
);

export default Icon;
