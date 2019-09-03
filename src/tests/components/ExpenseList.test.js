import React from 'react';
import { shallow } from 'enzyme';
import ReactShallowRenderer  from "react-test-renderer/shallow";
import { ExpenseList } from '../../components/ExpenseList';
//import expenses from '../fixtures/expenses';

export const expenses = [{
    id: '1',
    description: 'Gum',
    note: '', 
    amount: 195,
    createdAt: 20
}, {
    id: '2',
    description: 'Rent',
    note: '', 
    amount: 109500,
    createdAt: 1000
}, {
    id: '3',
    description: 'Credit Card',
    note: '', 
    amount: 4500,
    createdAt: -1000
}];

test('Should refer expensesList with expenses', () => {
    // const wrapper = shallow(<ExpenseList expenses={expenses}/>);
    // expect(wrapper).toMatchSnapshot();

    const renderer = new ReactShallowRenderer();
    renderer.render(<ExpenseList expenses={expenses}/>);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('Should refer expensesList with expenses', () => {
    // const wrapper = shallow(<ExpenseList expenses={[]}/>);
    // expect(wrapper).toMatchSnapshot();

    const renderer = new ReactShallowRenderer();
    renderer.render(<ExpenseList expenses={[]}/>);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});

