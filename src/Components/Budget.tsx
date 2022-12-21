import React, { useState } from 'react';
import uuid4 from "uuid4"

import { BudgetProps,  BudgetType } from "../types/Budget";
import BudgetForm from './BudgetForm';

const Budget = ({ option, list, setList, balance }: BudgetProps) => {
    const [item, setItem] = useState  <BudgetType|undefined>(undefined)
    const deleteHandler = (id: string) => {
        setList((prev) => prev.filter(item => item.id !== id))
    }
    return (
        <div>
            <div className="Budget-source">
                <h1>{option}</h1>
                <BudgetForm option={option} setList={setList} balance={ balance} item={item} />
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
                            <button onClick={()=>setItem(list)}>Edit</button>
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