import { Destination } from "./transfer";
export interface BalanceProps {
    balance: number;
    transferMoney: (amount: number, destination: Destination) => void
}
