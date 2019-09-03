import React from 'react';
import { shallow } from 'enzyme';
import ReactShallowRenderer  from "react-test-renderer/shallow";
//import toJSON from 'enzyme-to-json';
import Header from '../../components/Header';

test('Should render header correctly', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<Header/>);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});

// test('Should render header correctly', () => {
//    const wrapper = shallow(<Header/>);
//    expect(wrapper.find('h1').length).toBe(1);
// });
// test('Should render header correctly', () => {
//    const wrapper = shallow(<Header />);
//    expect(wrapper).toMatchSnapshot();
// });