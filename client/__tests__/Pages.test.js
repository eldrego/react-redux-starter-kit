import React from 'react';
import { mount } from 'enzyme'; /*eslint-disable-line*/
import * as Enzyme from 'enzyme'; /*eslint-disable-line*/
import Adapter from 'enzyme-adapter-react-15';

import Home from '../src/components/pages/Home';
import About from '../src/components/pages/About';
import NotFound from '../src/components/pages/NotFound';

Enzyme.configure({ adapter: new Adapter() });

// import renderer from 'react-test-renderer';

describe('App', () => {
  it('renders the home page without crashing when mounted', () => {
    mount(<Home/>);
  });

  it('renders the about page without crashing when mounted', () => {
    mount(<About/>);
  });

  it('renders the 404 page without crashing when mounted', () => {
    mount(<NotFound/>);
  });
});
