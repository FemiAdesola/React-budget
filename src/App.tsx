import { useEffect, useState } from 'react';

import './App.css';
import Budget from './Components/Budget';
import TargetSaving from './Components/TargetSaving';
import Balance from './Components/Balance';
import { BudgetType } from './types/Budget';
import Header from './Components/Header';
import { Destination } from './types/transfer';

const  App = () =>{
  const incomeList: BudgetType[] = JSON.parse(localStorage.getItem("incomes") || "")
  const expenseList: BudgetType [] = JSON.parse(localStorage.getItem("expenses") || "")
  const [incomes, setIncomes] = useState<BudgetType[]> (incomeList)
  const [expenses, setExpenses] = useState<BudgetType[]>(expenseList)
  const [balance, setBalance] = useState(0)
  const [saving, setSaving] = useState(0)
 
  useEffect(() => {
    const totalIncomes = incomes.reduce((prev, current) => prev + current.amount, 0)
    const totalExpenses = expenses.reduce((prev, current) => prev + current.amount, 0)
      setBalance(totalIncomes - totalExpenses - saving)
  })

  useEffect(() => {
    localStorage.setItem("incomes", JSON.stringify(incomes))
  }, [incomes])

   useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses))
  }, [expenses])

  const transferMoney = (amount: number, destination: Destination) => {
    if (destination ==="Balance") {
      amount = -amount
    }
    if (balance - amount >= 0) {
      setSaving((prev) => prev + amount)
    } else {
        throw new Error("You do not have enough money to transfer")
    }
  }

  return ( 
    <div className='Main'>
      <Header/>
        <div className="App">
          <Budget option='Income' list={incomes} setList={setIncomes} balance={balance} />
          <Budget option='Expense' list={expenses} setList={setExpenses} balance={balance} />
        <TargetSaving saving={saving} transferMoney={transferMoney} />
      </div>
    <hr/>
      <div>
         <Balance balance={balance} transferMoney={transferMoney} />
      </div>
    </div>
  );
}

export default App;
