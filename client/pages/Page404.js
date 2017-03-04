import React from 'react';
import { withTranslate } from 'react-redux-multilingual';

const Page404 = ({ translate }) => (
  <h1>{translate('404')}</h1>
);

export default withTranslate(Page404);
