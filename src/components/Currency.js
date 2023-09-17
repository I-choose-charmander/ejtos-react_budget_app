import React, { useContext, useState } from 'react';
import { AppContext } from '../context/AppContext';
  
const Currency = () => {
    const { currency, dispatch } = useContext(AppContext);


    const setCurrency = (value) => {
        dispatch({
            type: 'CHG_CURRENCY',
            payload: value.charAt(0),
        });
    }
    const handleCurrencyChange = (event) => {
        setCurrency(event.target.value);
    }

    return(
        <div>
            <div className='row'  >
                <div className="input-group mb-3" style={{color: "red"}}>
                        <div className="input-group-prepend" style={{ width: 'fit-context' }}>
                                <label className="input-group-text" htmlFor="inputGroupSelect02">Currency: </label>
                        </div>
                    <select className="custom-select" id="inputGroupSelect02" style={{background: 'red'}} onChange={handleCurrencyChange}>
                        <option defaultValue value="£ Pound" name="Pound">£ Pound</option>
                        <option value="$ Dollar" name="Dollar">$ Dollar</option>
                        <option value="€ Euro" name="Euro">€ Euro</option>
                        <option value="₹ Ruppee" name="Ruppee">₹ Ruppee</option>
                    </select>
                </div>
            </div>
        </div>
    );
};

export default Currency;