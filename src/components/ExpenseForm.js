import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/initialize';

export default class ExpenseForm extends React.Component{
    constructor(props){
        super(props);
        this. state = {
            description: props.expense ? props.expense.description : "",
            note: props.expense ? props.expense.note : "",
            createdAt:props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused:false,
            error:'',
            amount: props.expense ? (props.expense.amount).toString() : ""
        };
    }
      
    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(()=>({description}));
    };
    onTextAreaChange = (e) => {
        e.persist();
        this.setState(()=>({note : e.target.value}))
    };
    onAmountChange = (e) => {
        const amount = e.target.value;
        if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(()=>({amount}));
        }
    };
    onDateChange = (createdAt) => {
        this.setState(() => ({ createdAt }));
    };
    onFocusChange = ({focused}) => {
        this.setState(()=>({calendarFocused: focused}));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if(!this.state.description || !this.state.amount){
            this.setState(()=>({
                error:"Please provide description and amount"
            }));
            //alert("Please provide description and amount");
        }else{
            this.setState(()=>({
                error:""
            }));
            this.props.onSubmit({
                description:this.state.description,
                amount:parseFloat(this.state.amount, 10) ,
                note:this.state.note,
                createdAt:this.state.createdAt.valueOf()
            });
            //remove error
            console.log("Form Submitted Successfully!");
            // this.setState(()=>({
            //     description:"",
            //     note:'',
            //     createdAt:moment(),
            //     calendarFocused:false,
            //     error:'',
            //     amount:''
            // }));
        }
    };
    render(){
        return (
            <div>
                <h1>ExpenseForm</h1>
                {this.state.error && <span style={{color: "red"}}>{this.state.error}</span>}
                <form onSubmit={this.onSubmit}>
                 <div>   
                     <input 
                        type="text"
                        placeholder="AddExpense"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}                        
                        autoFocus
                     />
                     <input 
                        type="number"
                        placeholder="Enter Amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                     /><br/>
                     
                 </div>
                 <div>
                     <textarea
                        placeholder="Enter a note for your Expense(optional)"
                        value={this.state.note}
                        onChange={this.onTextAreaChange}
                     ></textarea>
                 </div>
                 <div>
                     <SingleDatePicker
                        date={this.state.createdAt}
                        onDateChange={this.onDateChange}
                        focused={this.state.calendarFocused}
                        onFocusChange={this.onFocusChange}
                        numberOfMonths= {1}
                        isOutsideRange={()=>false}
                     /><br/>   
                       
                 </div>          
                    <button>Add Expense</button>
                </form>  
            </div>
        )
    }
}