import React from 'react';
import {
  Route,
  Switch
} from 'react-router-dom';
import PropTypes from 'prop-types';

import Header from './common/Header';
import Footer from './common/Footer';
import Home from './pages/Home';
import About from './pages/About';


const Layout = props => ({
  render() {
    return (
      <div>
        <Header />
        <main className="container">
          <Switch>
            <Route path={`${props.match.path}/`} exact component={Home} />
            <Route path={`${props.match.path}/about`} component={About} />
          </Switch>
        </main>
        <Footer />
      </div>
    );
  }
});

Layout.propTypes = {
  match: PropTypes.object,
};

export default Layout;
