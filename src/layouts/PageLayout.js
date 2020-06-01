import React from 'react';
import PropTypes from 'prop-types';
import classnames from 'classnames';
import { Header, Footer } from 'components';

const PageLayout = ({ children, pageClass }) => {
  return (
    <>
      <Header />
      <main className={classnames('page-body', pageClass)}>{children}</main>
      <Footer />
    </>
  );
};

PageLayout.propTypes = {
  children: PropTypes.array.isRequired,
};

export default PageLayout;
