import React from 'react';
import FontAwesome from 'react-fontawesome';

const MailIcon = ({ url, name }) => (
  <a
    className='icon'
    rel='noreferrer noopener'
    href={url}
    title='email'
  >
    <FontAwesome
      name={name}
      size='lg'
    />
  </a>
);

export default MailIcon;
