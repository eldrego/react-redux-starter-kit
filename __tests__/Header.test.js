import React from 'react';
import { shallow } from '../enzyme';
import Header from '../src/components/common/Header';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });

  it('renders the app header correctly', () => {
    const wrapper = shallow(<Header />);
    const homePageTopHeader = wrapper
      .find('.navbar-brand')
      .children()
      .first()
      .text();
    expect(homePageTopHeader).toEqual('AppName');
  });

  it('renders two menu items', () => {
    const wrapper = shallow(<Header />);
    const menuItems = wrapper.find('.navbar-nav').children();
    expect(menuItems.length).toEqual(2);
  });
});
