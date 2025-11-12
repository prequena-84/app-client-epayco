export interface ITransactions {
    id?:string;
    document?:number;
    type?:'recarga'|'pago';
    amount?:number ;
    status?:'pendiente'|'confirmada';
    tokenConfirmation?: string;
    sessionExp?:number;
}