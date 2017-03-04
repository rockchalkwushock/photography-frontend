import React from 'react';
import { withTranslate } from 'react-redux-multilingual';
import styled from 'styled-components';

const UnstyledLoader = ({ translate }) => (
  <div className='loader'>
    <h1>{translate('loading')}</h1>
  </div>
);

const Loader = styled(UnstyledLoader)`
  padding: 0.5em;
  font-size: 1.5em;
  background-color: lightblue;
`;

export default withTranslate(Loader);
