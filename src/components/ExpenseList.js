import React from 'react';
import { connect } from 'react-redux';  
import ExpenseListItem  from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';
import ExpenseListFilters from './ExpenseListFilters';

export const ExpenseList = (props) =>(
    <div>
        <h1>Expense List</h1>
        {
            props.expenses.length === 0 ? <h1>No expenses</h1> : (
                props.expenses.map((expense)=>{
                    return <ExpenseListItem key={expense.id} {...expense}/>;
                })
            )
        }

        <ExpenseListFilters/>
    
    </div>
);

const mapsToFunc = ((state)=> {
    return {
        expenses: selectExpenses(state.expenses, state.filters)
    };
});

export default connect(mapsToFunc)(ExpenseList);
