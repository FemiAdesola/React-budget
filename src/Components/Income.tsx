import React from 'react';

const Income = () => {
    return (
        <div className="Income-source">
            <form action="#">
                <div className='Source'>
                    <label htmlFor="income-input"> Income Source</label>
                    <input type="text" 
                        className="income-input" 
                        id="income-input"  
                        placeholder="Type the income source"
                    ></input>
                </div>
                <div className='Source'>
                    <label htmlFor="amount-input">Amount of Income</label>
                    <input type="number" 
                        className="amount-input" 
                        id="amount-input"  
                        placeholder="select the amount"
                    ></input>
                </div>
                <div className='Source'>
                    <label htmlFor="date-input"> Date of Income</label>
                    <input type="date" 
                        className="date-input" 
                        id="date-input"  
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