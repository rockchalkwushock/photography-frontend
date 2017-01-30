import React from 'react';
import { render } from 'react-dom';
import { IntlActions } from 'react-redux-multilingual';
import Root from './Root';
import { store } from './redux/store';
import '../public/styles.css';

require('offline-plugin/runtime').install();

const DEFAULT_LANGUAGE = 'ru';
store.dispatch(IntlActions.setLocale(DEFAULT_LANGUAGE));

render(<Root />, document.getElementById('root'));
