import React, { useState } from 'react';
import uuid4 from "uuid4"

import { BudgetProps,  BudgetType } from '../types/Budget';

const Budget = ({ option, list, setList, balance }: BudgetProps) => {
    const [source, setSource] = useState ("")
    const [amount,setAmount] = useState (0)
    const [date, setDate] = useState("")
    const [error, setError] = useState("")
    const incomeOptions = ["Salary", "Gift", "Selling", "Bonus","Tax return", "Others"]
     const expenseOptions = ["House rent","Water bill", "Eletricity", "School fees", "Daycare fee", "Others"]
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

    const deleteHandler = (id: string) => {
        setList((prev) => prev.filter(item => item.id !== id))
    }
    return (
        <div>
            <div className="Budget-source">
                <h1>{option}</h1>
                <form onSubmit={(e)=>handleSubmit(e)}>
                    <div className='Source'>
                        <label htmlFor="source-input"> {option} Source</label>
                        <select
                            name="source-inpui"
                            id="source-inpu"
                            value={source}
                            onChange={(e) => setSource(e.target.value)}
                        >
                            {option === "Expense" ?
                                expenseOptions.map(option => (<option>{option}</option>) ) :
                                incomeOptions.map(option => (<option>{option}</option>))
                            }
                        </select>
                        {/* <input type="text" 
                            className="source-input" 
                            id="source-input"  
                            placeholder={`Type the ${option} here`}
                            value={source}
                            onChange={(e) => setSource(e.target.value)}
                        /> */}
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
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Date</th>
                        <th>Source of {option}</th>
                        <th>{option} €</th>
                         <th></th>
                    </tr>
                </thead>
                <tbody>
                {list.map((list)=> (
                    <tr key={list.id}>
                        <td>{list.date}</td>
                        <td>{list.source}</td>
                        <td>{list.amount}</td>
                        <td>
                            <button>Edit</button>
                            <button
                                onClick={() => deleteHandler(list.id)}
                                disabled={option === "Income" && balance - list.amount < 0}>
                                Delete
                            </button>
                        </td>
                    </tr>
                ))}    
                </tbody>
            </table>
        </div>
    );
};

export default Budget;