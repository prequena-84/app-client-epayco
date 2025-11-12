interface IUser {
    document?:number;
    name?:string;
    email?:string;
    phone?:string
    balance?:number;
}

interface IDataUsers extends IUser{
    dataUsers?:IUser[];
}

export type {
    IUser,
    IDataUsers,
}