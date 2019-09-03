import { createStore } from 'redux';

const increaseCount = ({incrementBy = 1}) => ({
    type:'INCREMENT',
    incrementBy
});

const decreaseCount = ({decrementBy = 1})=>({
    type:'DECREMENT',
    decrementBy
});

const reset = ({reset}) => ({
    type:"RESET",
    reset
})
const store = createStore((state = {count: 0}, action) => {

    switch(action.type){
        case 'INCREMENT':
        return {
            count: state.count+action.incrementBy
        };
        case 'DECREMENT': 
        return {
            count: state.count-action.decrementBy
        }
        case "RESET" : return {
            count:action.reset
        }
        default: return state;
    }

});

const unsubscribe = store.subscribe(()=>{
   // console.log(store.getState());
})
//console.log(store.getState());
 
store.dispatch(increaseCount({incrementBy:5}));
 //unsubscribe();
//store.dispatch(increase());

store.dispatch(decreaseCount({decrementBy:23}));

store.dispatch(reset({ reset:0 }));