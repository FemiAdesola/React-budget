import React, { useState } from 'react'
import uuid4 from "uuid4"

import { BudgetType } from '../types/Budget'
import { BudgetFormProps } from '../types/budgetForm'
import { useEffect } from 'react';

const BudgetForm = ({ option, setList, balance, item, change, setChange}: BudgetFormProps) => {
    const [source, setSource] = useState("")
    const [amount, setAmount] = useState(0)
    const [date, setDate] = useState("")
    const [error, setError] = useState("")
    const incomeOptions = ["Salary", "Gift", "Selling", "Bonus", "Tax return", "Others"]
    const expenseOptions = ["House rent", "Water bill", "Eletricity", "School fees", "Daycare fee", "Others"]

    useEffect(() => {
        if (change === "Update" && item) {
            setSource(item.source)
            setAmount(item.amount)
            setDate(item.date)
        }
    },[item])
    
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        const id = uuid4()
        const BudgetItem: BudgetType = {
            id, source, amount, date
        }
        if (option === "Expense") {
            if (balance < amount) {
                setError("You do not have enough money")
                return
            } else {
                setError("")
            }
        }
        if (change === "Update" && item) {
            setList((prev) => {
                return prev.map((c) => {
                    if (c.id === item.id) {
                        return {
                            ...item,
                            source: source,
                            amount: amount,
                            date: date
                        }
                    }
                    return c
                })
            })
        } else {
            setList((prev) => [...prev, BudgetItem])
        }
        setChange("Create")
        setAmount(0)
        setDate("")
        setSource("Salary")
    }   
    return (
            <div>
                <form onSubmit={(e) => handleSubmit(e)}>
                    <div className='Source'>
                        <label htmlFor="source-input"> Source of {option}</label>
                        <select
                            name="source-inpui"
                            id="source-input"
                            required
                            value={source}
                            onChange={(e) => setSource(e.target.value)}
                        >
                            {option === "Expense" ?
                                expenseOptions.map(option => (<option key={option}>{option}</option>)) :
                                incomeOptions.map(option => (<option key={option}>{option}</option>))
                            }
                        </select>
                    </div>
                    <div className='Source'>
                        <label htmlFor="amount-input">Amount of {option}</label>
                        <input type="number"
                            className="amount-input"
                            id="amount-input"
                            placeholder="select the amount"
                            required
                            value={amount}
                            onChange={(e) => setAmount(parseInt(e.target.value))}
                        />
                    </div>
                    <div className='Source'>
                        <label htmlFor="date-input"> Date of {option}</label>
                        <input type="date"
                            className="date-input"
                            id="date-input"
                            required
                            value={date}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </div>
                    <div>
                    <button type='submit'>Add {option}</button>
                    </div>
                    {error && <p>{error}</p>}
                </form>
            </div>
    )
}

export default BudgetForm