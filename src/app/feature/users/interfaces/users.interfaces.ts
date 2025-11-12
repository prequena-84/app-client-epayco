interface IUser {
    document?:number;
    name?:string;
    email?:string;
    phone?:string
    balance?:number;
}

interface IDataUsers extends IUser{
    dataUsers?:IUser[] | null;
}

export type {
    IUser,
    IDataUsers,
}