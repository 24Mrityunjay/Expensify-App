import React from 'React';
import { shallow } from 'enzyme';
import { AddExpensePage } from '../../components/Create';

let props;

const expenses = [{    
    id: '2',
    description: 'Coffee',
    note: '', 
    amount: 9500,
    createdAt: 400
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

// test("Should Expense Add Expense Page Corectly", () => {
//     const onSubmit = jest.fn();
//     const history = { push: jest.fn() };
//     const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history}/>);
//     expect(wrapper).toMatchSnapshot();
// });

// test("Should CHECK ONsUBMIT", () => {
//     const onSubmit = jest.fn();
//     const history = { push: jest.fn() };
//     const wrapper = shallow(<AddExpensePage onSubmit={onSubmit} history={history}/>);
//     wrapper.find('ExpenseForm').prop('onSubmit', props)();
//     expect(history.push).toHaveBeenLastCalledWith('/');
//     expect(onSubmit).toHaveBeenLastCalledWith(expenses[1]);
// });