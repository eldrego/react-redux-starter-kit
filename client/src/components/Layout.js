import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Header from './common/Header';
import Footer from './common/Footer';

class Layout extends Component {
  render() {
    return (
      <div>
        <Header />
        <main className="container">{this.props.children}</main>
        <Footer />
      </div>
    );
  }
}

Layout.propTypes = {
  match: PropTypes.object,
};

export default Layout;
