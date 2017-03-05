import React from 'react';
import { withTranslate } from 'react-redux-multilingual';

const Page404 = ({ translate }) => (
  <div className="page404">
    <h1>{translate('404')}</h1>
  </div>
);

export default withTranslate(Page404);
