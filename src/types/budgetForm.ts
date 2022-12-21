import { BudgetType } from "./Budget"

export interface BudgetFormProps {
    option: "Income" | "Expense"
    balance: number,
    setList: React.Dispatch<React.SetStateAction<BudgetType[]>>,
    item?: BudgetType,
    change: "Create" | "Update",
    setChange: React.Dispatch<React.SetStateAction<"Create" | "Update">>
}