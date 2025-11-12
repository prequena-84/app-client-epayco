export interface ITransactions {
    id?:string;
    document?:string;
    type?:'recarga'|'pago';
    amount?:number ;
    status?:'pendiente'|'confirmada';
    tokenConfirmation?:string;
    sessionExp?:number;
}