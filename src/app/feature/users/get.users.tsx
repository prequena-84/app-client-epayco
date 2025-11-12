'use client'

import { useState, useEffect } from "react";
import requestData from "@/services/request.data.services";
import TableUsers from "./table.users";

import type { IUser } from "./interfaces/users.interfaces";

const GetUsers = () => {
    const [ data, setData ] = useState<IUser[] | null>(null);

    useEffect(() => {
        const getData = async () => {
            const users = (await requestData<IUser[] | null>(process.env.NEXT_PUBLIC_API_URL_USERS ?? '')).data;
            console.log(users)
            setData(users);
        };

        getData();
    }, []);  

    return (
        <section className="">
            <h1>Registro de Usuarios</h1>
            <TableUsers dataUsers={data}/>
        </section>
    )
};

export default GetUsers;