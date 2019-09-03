import { removeExpense, editExpense, addExpense } from '../../actions/expenses';
import uuid from 'uuid'; 

test('Should remove Expense test', () => {
    const result = removeExpense({ id:"123" });
    expect(result).toEqual({
        type:'REMOVE_EXPENSE',
        id:'123'
    });
});

test('Should Edit Expense test', () => {
    const result = editExpense("123", {note:"Something"} );
    expect(result).toEqual({
        type:'EDIT_EXPENSE',
        id:'123',
        updates:{
            note:'Something'
        }
    });
});

test('Should Add Expense test', () => {
    const expenseData={
        description:'',        
        note:'',
        amount:0,
        createdAt:0
    }
    const result = addExpense( expenseData );
    expect(result).toEqual({
        type:"ADD_EXPENSE",
        expense:{
        ...expenseData,
        id:expect.any(String)
        }
    });
});

test('Should Add Expense test', () => {
    
    const result = addExpense();
    expect(result).toEqual({
        type:"ADD_EXPENSE",
        expense:{
            id:expect.any(String),
            description:'',        
            note:'',
            amount:0,
            createdAt:0  
        }
    });
});