import React from 'react';
import ReactGA from 'react-ga';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';

const UnstyledIcon = ({ url, event, name }) => (
  <ReactGA.OutboundLink
    className='icon'
    rel='nreferrer noopener'
    eventLabel={event}
    to={url}
    target='blank'
  >
    <FontAwesome
      name={name}
      size='2x'
    />
  </ReactGA.OutboundLink>
);

const Icon = styled(UnstyledIcon)`

`;

export default Icon;
