import React from 'react';
import FontAwesome from 'react-fontawesome';
import styled from 'styled-components';

const UnstyledMailIcon = ({ url, name }) => (
  <a
    className='icon'
    rel='noreferrer noopener'
    href={url}
    title='email'
  >
    <FontAwesome
      name={name}
      size='2x'
    />
  </a>
);

const MailIcon = styled(UnstyledMailIcon)`

`;

export default MailIcon;
