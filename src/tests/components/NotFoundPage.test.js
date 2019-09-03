import React from 'react';
import ReactShallowRenderer from 'react-test-renderer/shallow';
import NotFoundPage from '../../components/NotFoundPage';

const expenses = [{
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

test("Should test Expense Dashboard Page", () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<NotFoundPage />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});