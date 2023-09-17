import React, { useContext } from 'react';
import { TiDelete } from 'react-icons/ti';
import { AppContext } from '../context/AppContext';

const ExpenseItem = (props) => {
    const { dispatch,currency } = useContext(AppContext);

    const handleDeleteExpense = () => {
        dispatch({
            type: 'DELETE_EXPENSE',
            payload: props.id,
        });
    };

    const increaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: 10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }
    const decreaseAllocation = (name) => {
        const expense = {
            name: name,
            cost: -10,
        };

        dispatch({
            type: 'ADD_EXPENSE',
            payload: expense
        });

    }

    return (
        <tr>
        <td>{props.name}</td>
        <td>{currency}{props.cost}</td>
        <td><button size='4em' style={{display:'flex',border: 'none',height:'1em', width:'1em', fontSize: '2em',fontWeight:'bold', background: 'green',borderRadius: '3em',color: 'white',alignItems:'center',textAlign:'justify',paddingRight:'5px',paddingBottom:'9px'}} onClick={event=> increaseAllocation(props.name)}>+</button></td>
        <td><button size='4em' style={{display:'flex',border: 'none',height:'1em', width:'1em', fontSize: '2em',fontWeight:'bold', background: 'red',borderRadius: '3em',color: 'white',alignItems:'center',paddingLeft:'10px',paddingBotton:'15px'}} onClick={event=> decreaseAllocation(props.name)}> - </button></td>
        <td><TiDelete size='1.5em' onClick={handleDeleteExpense}></TiDelete></td>
        </tr>
    );
};

export default ExpenseItem;
