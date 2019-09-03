
export const setTextFilter = ({text = ''}) => ({
    type:"Set_Text_Filter",
    text
});
export const sortByDate = () => ({
    type: 'Sort_By_Date'
});
export const sortByAmount = () => ({
    type: 'Sort_By_Amount'
});
export const setStartDate = (startDate) => ({
    type: 'Set_Start_Date',
    startDate
});
export const setEndDate = (endDate) => ({
    type: 'Set_End_Date',
    endDate
});