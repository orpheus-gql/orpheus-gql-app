import React from 'react';
import { configure, shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import { exportNamedDeclaration } from '@babel/types';
import toJson from 'enzyme-to-json';
import Header from '../client/components/Header.jsx';
import QueryWrapper from '../client/components/QueryWrapper.jsx'
import RunButton from '../client/components/RunButton.jsx'
import AceEditor from 'react-ace';
import ReactSVG from 'react-svg';

configure({ adapter: new Adapter() });

describe('React unit tests', () => {
  describe('Header', () => {
    let wrapper;
    beforeAll(() => {
      wrapper = shallow(<Header />);
    });

    it('Renders a <div> tag with the id header and <h1>Orpheus GQL', () => {
      expect(wrapper.type()).toEqual('div');
      expect(wrapper.prop('id')).toEqual('header');
      expect(wrapper.childAt(0).text()).toEqual('<ReactSVG />');
      expect(wrapper.childAt(0).prop('className')).toEqual('logo-wrapper');
      expect(wrapper.childAt(0).prop('svgClassName')).toEqual('logo');
      expect(wrapper.find('div').children().find('h1').text()).toEqual('Orpheus GQL');
    });
  });
  describe('QueryWrapper', () => {
    let wrapper;
    const props = {
      setDataPoints: 'dataPoints_test',
      codeInput: 'codeInput_test',
      buildTreeVis: 'buildTreeVis_test',
      storeResponseData: 'responseData_test',
      storeDatabaseRequests: 'databaseRequests_test',
      setDataPoiints: 'dataPoints_test',
      setNestingDepth: 'nestingDepth_test',
      setEffectiveRuntime: 'effectiveRuntime_test',
      setNetworkLatency: 'networkLatency_test',
      setResolverNum: 'resolverNum_test',
      setResolverNames: 'resolverNames_test'
    };
    beforeAll(() => {
      wrapper = shallow(<QueryWrapper {...props} />);
    })

    it('Renders a <div> tag with the className ace-wrapper and has Ace Editor and Run Button components', () => {
      expect(wrapper.type()).toEqual('div');
      expect(wrapper.prop('className')).toEqual('ace-wrapper');
      // expect(wrapper.childAt(0).prop('name')).toEqual('ace-editor');
      // expect(wrapper.containsMatchingElement(<AceEditor />)).toBe(true);
      expect(wrapper.containsMatchingElement(<RunButton/>)).toBe(true);
   
    it('QueryWrapper should display all of its text props inside a <RunButton> component', () => {
      expect(wrapper.containsMatchingElement(<RunButton />)).toBe(true);
    });
  })

}) 