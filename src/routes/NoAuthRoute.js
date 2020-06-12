import React, { Suspense } from 'react';
import { Route, Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Loader } from '../components';

const NoAuthRoute = ({
  component: Component,
  isAuthenticated,
  layout: Layout,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) => {
        if (isAuthenticated) {
          return (
            <Redirect
              to={
                props.location.state ? props.location.state.from : '/app/home'
              }
            />
          );
        }

        return (
          <Suspense fallback={<Loader show />}>
            <Layout>
              <Component {...props} />
            </Layout>
          </Suspense>
        );
      }}
    />
  );
};

NoAuthRoute.propTypes = {
  component: PropTypes.object.isRequired,
  isAuthenticated: PropTypes.bool.isRequired,
  layout: PropTypes.func.isRequired,
  location: PropTypes.object,
};

export default NoAuthRoute;
