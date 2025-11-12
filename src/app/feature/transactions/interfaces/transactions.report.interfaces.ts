import type { IUser } from "../../users/interfaces/users.interfaces";
import type { ITransactions } from "./transactions.interfaces";

interface IReportingTransactions extends ITransactions {
    users?:IUser;
}

interface IDataTransactions {
    dataTransactions?:IReportingTransactions[];
}

export type {
    IReportingTransactions,
    IDataTransactions,
}