import { useEffect, useState } from 'react';

import './App.css';
import Budget from './Components/Budget';
import TargetSaving from './Components/TargetSaving';
import Balance from './Components/Balance';
import { BudgetType} from './types/Budget';



const  App = () =>{
  // const incomeList: BudgetType[] = JSON.parse(localStorage.getItem("incomes") || "")
  // const expenseList: BudgetType [] = JSON.parse(localStorage.getItem("expenses") || "")
  const [incomes, setIncomes] = useState<BudgetType[]> ([])
  const [expenses, setExpenses] = useState<BudgetType[]>([])
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


  return ( 
    <div className='Main'>
        <div className="App">
        <Budget option='Income' list={incomes} setList={setIncomes} balance={balance} />
        <Budget option='Expense' list={expenses} setList={setExpenses} balance={balance} />
        <TargetSaving saving={saving} />
      </div>
      <hr/>
      <Balance balance={balance} setSaving={setSaving} />
    </div>
  );
}

export default App;
