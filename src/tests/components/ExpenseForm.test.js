import React from 'react';
import { shallow, mount } from 'enzyme';
import moment from 'moment';
import ReactShallowRenderer  from "react-test-renderer/shallow";
import ExpenseForm from '../../components/ExpenseForm';



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

test('Should refer expensesList without expenses', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<ExpenseForm />);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test('Should refer expensesList with expenses', () => {
    const renderer = new ReactShallowRenderer();
    renderer.render(<ExpenseForm expense = {expenses[0]}/>);
    expect(renderer.getRenderOutput()).toMatchSnapshot();
});

test(' error for invalid form submission', () => {
    // const renderer = new ReactShallowRenderer();
    // renderer.render(<ExpenseForm expense = {expenses[0]}/>);
    // expect(renderer.getRenderOutput()).toMatchSnapshot();

    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('form').simulate('submit', {preventDefault:()=>{}});
    expect(wrapper.state('error').length).toBeGreaterThan(0);
    expect(wrapper.debug()).toMatchSnapshot();
});

test(' Should set description on input change', () => {
    const value = 'New Description';
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(0).simulate('change',{
        target: {value}
    });
    expect(wrapper.state('description')).toBe(value);
    expect(wrapper.debug()).toMatchSnapshot();
});

test(' Should set valid amount on input change', () => {
    const value = '23.23';
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change',{target:{value}});
    expect(wrapper.state('amount')).toBe(value);
    expect(wrapper.debug()).toMatchSnapshot();
});

test('should not display if amount is invalid on input change', () => {
    const value = '23.223';
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('input').at(1).simulate('change',{target:{value}});
    //expect(wrapper.state('amount')).toBe('');
    expect(wrapper.debug()).toMatchSnapshot();
});

test(' Should set note on textarea change', () => {
    const value = 'note';
    const wrapper = shallow(<ExpenseForm/>);
    wrapper.find('textarea').simulate('change',{target:{value},persist:()=>{}});
    expect(wrapper.state('note')).toBe(value);
    expect(wrapper.debug()).toMatchSnapshot();
});

//SPIES 

test("Should test submit with error and with complete info", () => {
    const onSubmitSpy = jest.fn();
    const wrapper = shallow(<ExpenseForm expense={expenses[0]} onSubmit={onSubmitSpy}/>);
    wrapper.find('form').simulate('submit', {
        preventDefault: () => {}
    });
    expect(wrapper.state('error')).toBe('');
    expect(onSubmitSpy).toHaveBeenLastCalledWith({
        description:expenses[0].description,
        amount:expenses[0].amount,
        note:expenses[0].note,
        createdAt:expenses[0].createdAt
    });
    expect(wrapper.debug()).toMatchSnapshot();
});

// test('Should render date change ondatechange', () => {
//     const now = moment();
//     const wrapper = shallow(<ExpenseForm />);
//     wrapper.find('SingleDatePicker').props('onDateChange')({now});
//     expect(wrapper.state('createdAt').debug()).toEqual(now);
//     expect(wrapper.debug()).toMatchSnapshot();
// });

test('Should render calendar change onCalendarfocused', () => {
    const focused = true;
    const wrapper = shallow(<ExpenseForm />);
    wrapper.find('SingleDatePicker').props('onFocusChange')({focused});
    expect(wrapper.state('calendarFocused').debug()).toEqual(focused);
    expect(wrapper.debug()).toMatchSnapshot();
});


// test('Should render calendar change onCalendarfocused', () => {
//     const focused = true;
//     const wrapper = shallow(<ExpenseForm />);
//     wrapper.find('SingleDatePicker').prop('onFocusChange')({focused});
//     expect(wrapper.state('calendarFocused').debug()).toEqual(focused);
//     expect(wrapper.debug()).toMatchSnapshot();
// });