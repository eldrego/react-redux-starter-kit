import React from 'react';
import ReactDOM from 'react-dom';
import { mount } from 'enzyme'; /*eslint-disable-line*/
import * as Enzyme from 'enzyme'; /*eslint-disable-line*/
import Adapter from 'enzyme-adapter-react-15';

import App from '../client/src/components/App';

Enzyme.configure({ adapter: new Adapter() });

// import renderer from 'react-test-renderer';

describe('App', () => {
  it('renders without crashing', () => {
    const div = document.createElement('div');
    ReactDOM.render(<App/>, div);
  });

  it('renders without crashing when mounted', () => {
    mount(<App/>);
  });
});
