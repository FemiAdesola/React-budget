import React, { useState } from 'react';
import { IncomeSource } from '../Interface/IncomeSource';

const Income = (props:IncomeSource) => {
    const [incomeData, setIncomeData] = useState({ incomeSource: "", incomeAmount: "",  incomeDate: new Date()});


  const changeHandler = (e: { target: { name: any; value: any; }; }) => {
    const { name, value } = e.target;

    setIncomeData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

    const addHandler = (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    // dispatch(createNote(incomeData));
       console.log(incomeData)
  };
    //  console.log(incomeData)
    return (
        <div className="Income-source">
            <form onSubmit={addHandler}>
                <div className='Source'>
                    <label htmlFor="income-input"> Income Source</label>
                    <input type="text" 
                        className="income-input" 
                        id="income-input"  
                        name='incomeSource'
                        onChange={changeHandler}
                        placeholder="Type the income source"
                    ></input>
                </div>
                <div className='Source'>
                    <label htmlFor="amount-input">Amount of Income</label>
                    <input type="number" 
                        className="amount-input" 
                        id="amount-input"  
                         name='incomeAmount'
                        onChange={changeHandler}
                        placeholder="select the amount"
                    ></input>
                </div>
                <div className='Source'>
                    <label htmlFor="date-input"> Date of Income</label>
                    <input  type="date"
                        className="date-input" 
                        id="date-input"  
                        name='incomeDate'
                        onChange={changeHandler}
                    ></input>
                </div>
                <div>
                    <button type='submit'>Add Income</button>
                </div>
            
            </form>
         
        </div>
    );
};

export default Income;