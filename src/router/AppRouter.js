import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Header from '../components/Header';
import NotFoundPage from '../components/NotFoundPage';
import EditPage from '../components/EditPage';
import ExpenseRouter from '../components/ExpenseRouter';
import AddExpensePage from '../components/Create';

const AppRouter = () => (
    <BrowserRouter>
    <div>
        <Header/>  
        <Switch>            
            <Route path="/" component={ExpenseRouter} exact={true}/>
            <Route path="/create" component={AddExpensePage}/>      
            <Route path="/edit/:id" component={EditPage}/>
            <Route component={NotFoundPage}/>    
        </Switch>
    </div>
    </BrowserRouter>
);

export default AppRouter;
 