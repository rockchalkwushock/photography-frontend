import React from 'react';
import ReactGA from 'react-ga';

const Copyright = ({ event, text, url }) => (
  <ReactGA.OutboundLink
    className='icon'
    eventLabel={event}
    rel='nreferrer noopener'
    target='blank'
    to={url}
  >
  {text}
  </ReactGA.OutboundLink>
);

export default Copyright;
