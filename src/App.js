import React from 'react';
import {
  BrowserRouter,
  Route,
  Switch,
  withRouter,
  Redirect,
} from 'react-router-dom';
import PropTypes from 'prop-types';
import PrivateRoute from './routes/PrivateRoute';
import PublicRoute from './routes/PublicRoute';

const Scroll = (props) => {
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [props.location]);

  return props.children;
};

Scroll.propTypes = {
  location: PropTypes.object,
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]),
};

const ScrollToTop = withRouter(Scroll);

const App = () => {
  return (
    <BrowserRouter>
      <ScrollToTop>
        <Switch>
          <Redirect exact from="/" to="/login" />
          <Route path="/app" component={PrivateRoute} />
          <Route path="/" component={PublicRoute} />
        </Switch>
      </ScrollToTop>
    </BrowserRouter>
  );
};

export default App;
