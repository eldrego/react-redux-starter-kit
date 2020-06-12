import React from 'react';
import { shallow } from '../enzyme';
import About from '../components/pages/About';
import NotFound from '../components/pages/NotFound';

describe('App', () => {
  it('renders the about page without crashing when mounted', () => {
    shallow(<About />);
  });

  it('renders the 404 page without crashing when mounted', () => {
    shallow(<NotFound />);
  });
});
