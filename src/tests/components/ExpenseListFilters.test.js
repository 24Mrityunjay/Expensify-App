import React from 'react';
import { shallow } from 'enzyme';
import { ExpenseListFilters } from '../../components/ExpenseListFilters';
import { filters , altfilters } from '../fixtures/filters';

let setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate, wrapper;

beforeEach(()=>{
    setTextFilter = jest.fn();
    sortByAmount = jest.fn();
    sortByDate = jest.fn();
    setStartDate = jest.fn();
    setEndDate = jest.fn();
    wrapper = shallow(
        <ExpenseListFilters
            filters={filters}
            setTextFilter={setTextFilter}
            sortByAmount={sortByAmount}
            sortByDate={sortByDate}
            setStartDate={setStartDate}
            setEndDate={setEndDate}
        />
    );
});

test('Should render expenseListfilter', () => {
    expect(wrapper).toMatchSnapshot();
});