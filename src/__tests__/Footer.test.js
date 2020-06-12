import React from 'react';
import { shallow } from '../enzyme';
import Footer from '../components/common/Footer';

describe('App', () => {
  it('renders without crashing', () => {
    shallow(<Footer />);
  });

  it('renders the app footer text correctly', () => {
    const wrapper = shallow(<Footer />);
    const footerContent = wrapper.find('.text-muted').children().text();
    expect(footerContent).toEqual('Footer items.');
  });
});
