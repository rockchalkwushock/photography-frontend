import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { IntlActions, IntlProvider } from 'react-redux-multilingual';
import { AppContainer } from 'react-hot-loader';
import 'font-awesome/css/font-awesome.css';
import Root from './Root';
import { store } from './redux';
import { translations } from './modules';
import './styles/styles.css';

if (process.env.NODE_ENV === 'production') {
  (() => {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.register('/service-worker.js');
    }
  })();
  require('offline-plugin/runtime').install();
}

const DEFAULT_LANGUAGE = 'ru';
store.dispatch(IntlActions.setLocale(DEFAULT_LANGUAGE));

const renderApp = Component => {
  render(
    <AppContainer>
      <Provider store={store}>
        <IntlProvider translations={translations}>
          <Component />
        </IntlProvider>
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  );
};

renderApp(Root);

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./Root', () => {
    const NewApp = require('./Root').default;

    renderApp(NewApp);
  });
}
