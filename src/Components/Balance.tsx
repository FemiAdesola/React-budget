import React from 'react';

import { BalanceProps } from '../types/Balance';
import Transfer from './Transfer';

const Balance = ({ balance, transferMoney }: BalanceProps) => {
    return (
        <div className="account-balance">
            <h3>Current balance: {balance}</h3>
            <Transfer transferMoney={transferMoney} destination="Saving"/>
        </div>
    );
};

export default Balance;