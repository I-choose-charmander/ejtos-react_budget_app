import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';

const Budget = () => {
    const { budget,expenses,currency } = useContext(AppContext);
    const [newBudget, setNewBudget] = useState(budget);
    const maxBudget= 20010

    const totalExpenses = expenses.reduce((total, item) => {
        return (total += item.cost);
    }, 0);

    if( newBudget >= maxBudget) {
        alert("The budget cannot exceed 20000");
        setNewBudget(newBudget - 10);
    } 
    if( newBudget < totalExpenses) {
        alert("Your budget can not go less than " +totalExpenses);
        setNewBudget(budget)
    }
    
    const handleBudgetChange = (event) => {
        setNewBudget(event.target.value);
    }
    return (
<div className='alert alert-secondary'>
<span>Budget: {currency}</span>
<input type="number" step="10" value={newBudget} onChange={handleBudgetChange}></input>
</div>
    );
};
export default Budget;
