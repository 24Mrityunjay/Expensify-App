import selectExpenses from '../../selectors/expenses';
import moment from 'moment';

const expenses = [{
        id: '1',
        description: 'Gum',
        note: '', 
        amount: 195,
        createdAt: 0
    }, {
        id: '2',
        description: 'Rent',
        note: '', 
        amount: 109500,
        createdAt: 1000
    }, {
        id: '2',
        description: 'Rent',
        note: '', 
        amount: 109500,
        createdAt: 1000
    }]; 

test('Should filter by text value', () => {
    const filters = {
        text : 'e',
        sortBy: 'Date',
        startDate:moment(0),
        endDate:moment(0)
    };
    const result = selectExpenses(expenses, filters);
    expect(result).toEqual([ expenses[2], expenses[1]]);
});

// test('Should filter by Start Date', () => {
//     const filter = {
//         text : 'e',
//         sortBy: 'date',
//         startDate: moment(0),
//         endDate: undefined
//     }
//     const result = selectExpenses(expenses, filter);
//     expect(result).toEqual([ expenses[2], expenses[0]]);
// });