import moment from 'moment';
import filterReducer from '../../reducers/filters';

test(' Should setup default filter values', () => {
    const state = filterReducer(undefined, { type: '@@INIT' });
    expect(state).toEqual({
        text:'',
        sortBy:'',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    })
});

test(' Should set Sort By Amount', () => {
    const state = filterReducer(undefined, { type: 'Sort_By_Amount' });
    expect(state.sortBy).toBe('Amount');
});

test(' Should set Sort By Date', () => {
    const currentState = {
        text:'',
        sortBy:'',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const state = filterReducer(currentState, { type: 'Sort_By_Date' });
    expect(state.sortBy).toBe('Date');
});

test(' Should set tEXT fILTER', () => {
    const currentState = {
        text:'Set_Text_Filter',
        sortBy:'',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const state = filterReducer(currentState, "");
    expect(state.text).toBe('Set_Text_Filter');
});

test(' Should set Set_Start_Date', () => {
    const currentState = {
        text:'',
        sortBy:'',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const state = filterReducer(currentState, {startDate : ""});
    expect(state.startDate).toEqual(
         moment().startOf('month')
    );
});

test(' Should set Set_End_Date', () => {
    const currentState = {
        text:'',
        sortBy:'',
        startDate: moment().startOf('month'),
        endDate: moment().endOf('month')
    }
    const state = filterReducer(currentState, {endDate : ""});
    expect(state.endDate).toEqual(
        moment().endOf('month')
   );
});