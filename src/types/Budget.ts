export interface BudgetProps {
    option: "Income" | "Expense",
    list: BudgetType[],
    setList: React.Dispatch<React.SetStateAction<BudgetType[]>>,
    balance: number
   
}

export interface BudgetType{
    id: string,
    source: string,
    amount: number,
    date:string,
}


export interface MoneyFormProps {
    option: "Income" | "Expense"
    balance: number,
    setList: React.Dispatch<React.SetStateAction<BudgetType[]>>,
    item?: BudgetType
}