import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import AppRouter from './router/AppRouter';
import {ret} from './playground/redux-101';
import configureStore from './store/configureStore';
import { addExpense, editExpense} from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/style.scss';
import '../node_modules/normalize.css/normalize.css';
import 'react-dates/lib/css/_datepicker.css';

const store = configureStore();

// const expenseTwo = store.dispatch(addExpense({ description : 'Water Bill', amount:34, createdAt:4, note:"sdfjhfds"}));
// store.dispatch(addExpense({ description : 'Gas Bill'}));
// store.dispatch(addExpense({ description : 'Rent', amount:343}));
//store.dispatch(editExpense(expenseTwo.expense.id,{amount: 23}));   
// store.dispatch(setTextFilter({ text:'Gas' }));

// setTimeout(() => {
//     store.dispatch(setTextFilter({ text:'Water' }));
// }, 1000);

const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
// /console.log(visibleExpenses);

const jsx = (
    <Provider store = {store}>
        <AppRouter/>
    </Provider>
);

ReactDOM.render(jsx, document.getElementById('app'));
 