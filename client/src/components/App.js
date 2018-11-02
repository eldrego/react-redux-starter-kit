import React from 'react';
import {
  BrowserRouter,
  browserHistory,
  Route,
  Switch
} from 'react-router-dom';
import Layout from './Layout';
import NotFound from './pages/NotFound';

const App = props => (
  <BrowserRouter history={browserHistory}>
    <Switch>
      <Route path="/" component={Layout} />
      <Route path="/*" component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default App;
