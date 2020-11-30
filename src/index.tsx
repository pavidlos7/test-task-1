// eslint-disable-next-line import/no-extraneous-dependencies
import 'regenerator-runtime/runtime';

import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render } from 'react-dom';
import GlobalStyle from './GlobalStyle';
import routes from './routes';
import store from './store';
import { Layout } from './components/page';

function App() {
  return (
    <Provider store={store}>
      <GlobalStyle />
      <Router>
        <Layout>
          {routes}
        </Layout>
      </Router>
    </Provider>
  );
}

render(<App />, document.getElementById('root'));
