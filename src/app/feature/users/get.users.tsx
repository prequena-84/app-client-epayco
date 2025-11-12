import { useState, useEffect } from "react";
import requestData from "@/services/request.data.services";
import TableUsers from "./table.users";

import type { IUser } from "./interfaces/users.interfaces";

const GetUsers = () => {
    const [ dataUsers, setDataUsers ] = useState<IUser[]>([]);

    useEffect(() => {
        const getData = async () => {
            const data:IUser[] = (await requestData<IUser[]>(process.env.NEXT_PUBLIC_API_URL_USERS ?? '', "GET")).data;
            setDataUsers(data);
        };

        getData();
    }, []);  

    return (
        <section className="">
            <h1>Registro de Usuarios</h1>
            <TableUsers dataUsers={dataUsers}/>
        </section>
    )
};

export default GetUsers;