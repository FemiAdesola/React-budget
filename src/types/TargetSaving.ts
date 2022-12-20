import { Destination } from "./transfer"
export interface TargetSavingProps{
    saving: number
    transferMoney: (amount:number, destination:Destination) =>void
}
