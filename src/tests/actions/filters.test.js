import { setStartDate, setEndDate, setTextFilter, sortByAmount, sortByDate } from '../../actions/filters';
import moment from 'moment';

test('Should generate setStart Action Object', () =>{
    const action = setStartDate(moment(0));
    expect(action).toEqual({
        type:'Set_Start_Date',
        startDate:moment(0)
    });
});

test('Should generate End Date Action Object', () => {
    const action = setEndDate(moment(0));
    expect(action).toEqual({
        type:'Set_End_Date',
        endDate:moment(0)
    });
});

test('Should set text filter', () => {
    const action = setTextFilter({ type:'' });
    expect(action).toEqual({
        type:'Set_Text_Filter',
        text:''
    });
});

test('Should Sort by Amount filter', () => {
    const action = sortByAmount();
    expect(action).toEqual({
        type:'Sort_By_Amount'
    });
});

test('Should Sort by Date filter', () => {
    const action = sortByDate();
    expect(action).toEqual({
        type:'Sort_By_Date'
    });
});