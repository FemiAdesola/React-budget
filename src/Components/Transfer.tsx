import React, { useState } from 'react'

import { TransferProps } from "../types/transfer"

const Transfer = ({ transferMoney, destination }: TransferProps) => {
    const [amount, setAmount] = useState(0)
    const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        transferMoney(amount, destination)
    }

    return (
        <form onSubmit={(e) => onSubmit(e)}>
            <label htmlFor="amount">Transfer to {destination} account</label>
            <input
                type="number"
                name="amount"
                id="amount"
                value={amount}
                onChange={(e) => setAmount(parseInt(e.target.value))}
            />
            <button type="submit">Transfer</button>
        </form>
    )
}
export default Transfer