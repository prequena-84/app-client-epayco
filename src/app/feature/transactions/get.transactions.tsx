'use client'

import { useState, useEffect } from "react";
import requestData from "@/services/request.data.services";
import TableTransactions from "./table.transactions";

import type { IReportingTransactions } from "./interfaces/transactions.report.interfaces";

const GetTransactions = () => {
    const [ data, setData ] = useState<IReportingTransactions[]>([]);

    useEffect(() => {
        const getData = async () => {
            const response:IReportingTransactions[] = (await requestData<IReportingTransactions[]>(process.env.NEXT_PUBLIC_API_URL_REPORTING ??'',"GET")).data;
            setData(response);
        };

        getData();
    });

    return (
        <section className="main-content">
            <TableTransactions dataTransactions={data}/>
        </section>
    )
};

export default GetTransactions;
