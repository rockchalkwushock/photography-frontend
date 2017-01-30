import React, { PropTypes } from 'react';
import { withTranslate } from 'react-redux-multilingual';

const Page404 = ({ translate }) => (
  <div className="page404">
    {translate('page404')}
  </div>
);

Page404.propTypes = {
  translate: PropTypes.func
};

export default withTranslate(Page404);
