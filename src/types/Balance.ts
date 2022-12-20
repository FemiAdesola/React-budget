import { Destination } from "./transfer";
export interface BalanceProps {
    balance: number;
    // setSaving: React.Dispatch<React.SetStateAction<number>>
    // setSaving: (amount: number) => void;
    
    transferMoney: (amount: number, destination: Destination) => void
}

