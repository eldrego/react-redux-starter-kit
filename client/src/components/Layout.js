import React from 'react';
import PropTypes from 'prop-types';

import Header from './common/Header';
import Footer from './common/Footer';


const Layout = props => ({
  render() {
    return (
      <div>
        <Header />
        <main className="container">{props.children}</main>
        <Footer />
      </div>
    );
  }
});

Layout.propTypes = {
  children: PropTypes.object.isRequired,
};

export default Layout;
