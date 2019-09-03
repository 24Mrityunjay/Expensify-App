import React from 'react';
import { NavLink} from 'react-router-dom';

const Header = ()=>(
    <header>
       <h1> Expense App</h1> 
       <NavLink to='/' activeClassName='is-active' exact={true }>Go Home</NavLink><br/>
       <NavLink to='/create' activeClassName='is-active'>Go To Create Page</NavLink><br/>
       <NavLink to='/edit' activeClassName='is-active'>Go To Edit Page</NavLink><br/>  
    </header>
);

export default Header;