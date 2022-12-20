import React, { useState } from 'react';

import { BalanceProps } from '../types/Balance';

const Balance = ({ balance, setSaving }: BalanceProps) => {
    const [amount, setAmount] = useState(0)
    const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault ()
        if (balance < amount) {
            throw new Error("You do not have anough money")
        }
        setSaving((prev) => prev + amount)
    }

    return (
        <div className="account-balance">
            <h3>Current balance: {balance}</h3>
            <form onSubmit={(e)=>submitHandler(e)}>
                <div className='balance-source'>
                    <label htmlFor="saving-input"> Transfer to saving account</label>
                    <input type="number" 
                        className="saving-input" 
                        id="target-input"  
                        placeholder="Type your saving amount to transfer"
                        value={amount}
                        onChange={(e) => setAmount(parseInt(e.target.value))}
                    ></input>
                     <button type='submit'>Transfer</button>
                </div>
            </form>
        </div>
    );
};

export default Balance;