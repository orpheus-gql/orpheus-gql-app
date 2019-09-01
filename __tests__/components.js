import React from 'react';
import {configure, shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import Header from '../client/components/Header';

configure({adapter: new Adapter()});

describe('React unit tests', () => {
  describe('Header', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = shallow(<Header />);
    });

    it('renders a div with an id of header', () => {
      expect(wrapper.type()).toEqual('div');
      expect(wrapper.prop('id')).toEqual('header');
    });
  });
});
