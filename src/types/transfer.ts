import Balance from '../Components/Balance';
export interface TransferProps {
    transferMoney: (amount: number, destination:Destination) => void
    destination:"Saving" | "Balance"
}
export type Destination = "Balance"| "Saving"