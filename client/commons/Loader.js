import React from 'react';
import { withTranslate } from 'react-redux-multilingual';

const Loader = ({ translate }) => (
  <div className='loader'>
    <h1>{translate('loading')}</h1>
  </div>
);

export default withTranslate(Loader);
