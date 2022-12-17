import React from 'react';

const Expenses = () => {
    return (
        <div className="Expenses-source">
            <form action="#">
                <div className='Source'>
                    <label htmlFor="expenses-input"> Expense Source</label>
                    <input type="text" 
                        className="expenses-input" 
                        id="expenses-input"  
                        placeholder="Type the expenses here"
                    ></input>
                </div>
                <div className='Source'>
                    <label htmlFor="amount-input">Amount of Expense</label>
                    <input type="number" 
                        className="amount-input" 
                        id="amount-input"  
                        placeholder="select the amount"
                    ></input>
                </div>
                <div className='Source'>
                    <label htmlFor="date-input"> Date of Expense</label>
                    <input type="date" 
                        className="date-input" 
                        id="date-input"  
                    ></input>
                </div>
                <div>
                    <button type='submit'>Add Expense</button>
                </div>
            
            </form>
        </div>
    );
};

export default Expenses;