import { createStore, combineReducers } from 'redux';
import uuid from 'uuid';

const addExpense = ({description = '', note = '', amount = 0, createdAt = 0} = {}) => ({
    type:'ADD_EXPENSE',
    expense:{
        id:uuid(),
        description,
        note, 
        amount, 
        createdAt
    }
});
const removeExpense = ({ id }) => ({
    type:'REMOVE_EXPENSE',
    id
});
const editExpense = ( id, updates ) => ({    
    type:'EDIT_EXPENSE',
    id,
    updates
});
const setTextFilter = (text = '') => ({
    type:"Set_Text_Filter",
    text
});
const sortByDate = () => ({
    type: 'Sort_By_Date'
});
const sortByAmount = () => ({
    type: 'Sort_By_Amount'
});
const setStartDate = (startDate) => ({
    type: 'Set_Start_Date',
    startDate
});
const setEndDate = (endDate) => ({
    type: 'Set_End_Date',
    endDate
});
const getVisibleExpenses = (expenses, {text, sortBy, startDate, endDate}) => {
    return expenses.filter((expense) => {
        const startDateMatch=typeof startDate !== "number" || expense.createdAt >= startDate;
        const endDateMatch=typeof startDate !== "number" || expense.createdAt <= endDate;
        const textMatch=expense.description.toLowerCase().includes(text.toLowerCase());
        return startDateMatch && endDateMatch && textMatch;
    }).sort((a, b) => {
        if(sortBy === 'Date'){
            return a.createdAt < b.createdAt ? 1 : -1 ;
        }
        if(sortBy === 'Amount'){
            return a.amount < b.amount ? 1 : -1 ;
        }
    })
};
const expensesReducerDefaultState = [];

const expenseReducer = (state = expensesReducerDefaultState, action) => {
    switch (action.type) {
        case 'ADD_EXPENSE' :
            return [...state,action.expense];
        case 'REMOVE_EXPENSE' :
            return state.filter(({ id }) => id !== action.id);
        case 'EDIT_EXPENSE' :
            return state.map((expense) => { 
                if(expense.id === action.id){
                    return {...expense, ...action.updates};
                } 
                else {
                    return expense;
                }});       
        default:
            return state;
    }
};

const filterReducerDefaultState ={
    text:'',
    sortBy:'amount',
    startDate: undefined,
    endDate: undefined
};

const filterReducer = (state = filterReducerDefaultState, action) => {
    switch (action.type) {   
        case 'Set_Text_Filter' :     
        return {...state, text:action.text};
        case 'Sort_By_Amount' :     
        return {...state, sortBy:'Amount'};
        case 'Sort_By_Date' :     
        return {...state, sortBy:'Date'};
        case 'Set_Start_Date' :     
        return {...state, startDate:action.startDate};
        case 'Set_End_Date' :     
        return {...state, endDate:action.endDate};
        default:
            return state;
    }
};

const store = createStore(
    combineReducers({
        expenses: expenseReducer,
        filters:  filterReducer  
    })
);

store.subscribe(() => {
    const state = store.getState();
    const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
    console.log(visibleExpenses);
});

const expenseOne = store.dispatch(addExpense({
    description : 'Rent',
    amount : 120,
    createdAt : 1000
}));
const expenseTwo = store.dispatch(addExpense({
    description : 'coffee',
    amount : 420,
    createdAt : -1000
}));

store.dispatch(editExpense(expenseTwo.expense.id,{amount: 23}));    
// store.dispatch(removeExpense({ id:expenseOne.expense.id }));
//  store.dispatch(setTextFilter('rent'));
store.dispatch(sortByDate());
store.dispatch(sortByAmount());
// store.dispatch(setStartDate(1000));
// store.dispatch(setStartDate());
// store.dispatch(setEndDate(-999));

// const demoState = {
//     expenses: [{
//         id: 'Incredible',
//         description: 'January Rent',
//         note: 'This was the final Payment for that address',
//         amount: 54500,
//         createdAt:0
//     }],
//     filters:{
//         text:'rent',
//         sortBy:'amount',
//         startDate: undefined,
//         endDate: undefined
//     }
// };
// const user = {
//     name:"jen",
//     age: 23
// }

// console.log({ age: 223,...user, Location: "varanasi"});