export interface ITransactions {
    id?:string;
    userDocument?:number;
    type?:'recarga'|'pago';
    amount?:number ;
    status?:'pendiente'|'confirmada';
    tokenConfirmation?: string;
    sessionExp?:number;
}