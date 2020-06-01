import React, { lazy } from 'react';
import { useSelector } from 'react-redux';
import { Switch } from 'react-router-dom';
import PropTypes from 'prop-types';
import PageLayout from '../layouts/PageLayout';
import AuthRoute from './AuthRoute';

const Home = lazy(() => import('pages/Home'));
const About = lazy(() => import('pages/About'));

const PrivateRoute = ({ match }) => {
  const { loggedIn } = useSelector((state) => state.auth);

  return (
    <>
      <Switch>
        <AuthRoute
          exact
          path={`${match.path}/home`}
          isAuthenticated={loggedIn}
          layout={PageLayout}
          component={Home}
        />
        <AuthRoute
          exact
          path={`${match.path}/about`}
          isAuthenticated={loggedIn}
          layout={PageLayout}
          component={About}
        />
      </Switch>
    </>
  );
};

PrivateRoute.propTypes = {
  match: PropTypes.object,
};

export default PrivateRoute;
