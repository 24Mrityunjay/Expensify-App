import expenseReducer  from '../../reducers/expenses';

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

test('Should Remove Expense by id', () => {
    const action={
        type:"REMOVE_EXPENSE",
        id:expenses[1].id
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([expenses[0], expenses[2]]);
});

test('Should Remove Expense IF ID IS not valid', () => {
    const action={
        type:"REMOVE_EXPENSE",
        id:'-1'
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual(expenses);
});

test('Should test Add Expense', () => {
    const expense = {
        id:"",
        description:"Coffee",
        note:"", 
        amount:21323, 
        createdAt:1000
    }
    const action={
        type:"ADD_EXPENSE",
        expense
    }
    const state = expenseReducer(expenses, action);
    expect(state).toEqual([...expenses, expense]);
});

test('Should Edit Expense test', () => {
    const amount = 1250;
    const action = {
        type:'EDIT_EXPENSE',
        id:expenses[1].id,
        updates:{
            amount
        }
    }
    const result = expenseReducer(expenses, action );
    expect(result[1].amount).toBe(amount);
});

test('Should not Edit Expense if id is not found', () => {
    const amount = 1250;
    const action = {
        type:'EDIT_EXPENSE',
        id:'-1',
        updates:{
            amount
        }
    }
    const result = expenseReducer(expenses, action );
    expect(result).toEqual(expenses);
});