import React, { useState } from 'react';
import uuid4 from "uuid4"

import { BudgetProps,  BudgetType } from '../types/Budget';


const Budget = ({ option, list, setList, balance }: BudgetProps) => {
    const [source, setSource] = useState ("")
    const [amount,setAmount] = useState (0)
    const [date, setDate] = useState("")
    const [error, setError] = useState("")

    const handleSubmit = (e: React. FormEvent <HTMLFormElement>) =>{
        e.preventDefault()
        const id = uuid4()
        const BudgetItem: BudgetType = {
            id, source, amount, date
        }
        if (option === "Expense") {
            if (balance < amount) {
                setError ("You do not have enough money")
                return
            } else {
            setError("")
            }
        }
        setList ([...list, BudgetItem])
    }

    return (
        <div className="Budget-source">
            <h1>{option}</h1>
            <form onSubmit={(e)=>handleSubmit(e)}>
                <div className='Source'>
                    <label htmlFor="source-input"> {option} Source</label>
                    <input type="text" 
                        className="source-input" 
                        id="source-input"  
                        placeholder={`Type the ${option} here`}
                        value={source}
                        onChange={(e) => setSource(e.target.value)}
                    />
                </div>
                <div className='Source'>
                    <label htmlFor="amount-input">Amount of {option}</label>
                    <input type="number" 
                        className="amount-input" 
                        id="amount-input"  
                        placeholder="select the amount"
                        value={amount}
                        onChange={(e) => setAmount(parseInt(e.target.value))}
                    />
                </div>
                <div className='Source'>
                    <label htmlFor="date-input"> Date of {option}</label>
                    <input type="date" 
                        className="date-input" 
                        id="date-input" 
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                    />
                </div>
                <div>
                    <button type='submit'>Add Expense</button>
                </div>

                {error && <p>{error}</p>}
            
            </form>
             <ul>
                    {list.map(list => (<li key={list.id}>{list.source} : {list.amount} </li>))}
                </ul>
        </div>
    );
};

export default Budget;