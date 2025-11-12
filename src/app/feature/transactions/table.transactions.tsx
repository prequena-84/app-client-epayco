'use client'

import React from "react";

import type { IDataTransactions } from "./interfaces/transactions.report.interfaces";

const TableTransactions:React.FC<IDataTransactions> = ({ dataTransactions }) => {
    const data = dataTransactions?.map(transations => {
        return {
            "Documento": transations.userDocument,
            "Usuario": transations.users?.name,
            "Id Transaccion": transations.id,
            "Tipo Transaccion": transations.type,
            "Monto": transations.amount,
            "Estado": transations.status,
        };
    }) || [];

    const title = data?.map(transactions => Object.keys(transactions))[0] || [];

    return (
        <>
            {data.length > 0 ? ( 
                <table className="table">
                    <thead>
                        <tr>
                            {title.map( (title,index) => (<th key={`title-${index}`} scope="col">{title}</th>))}
                        </tr>
                    </thead>
                    <tbody>
                        {data.map( (item,index) => (
                            <tr key={`row-${index}`}>
                                <th key={`document-${index}`} scope="row">
                                    {item.Documento}
                                </th >
                                <td key={`users-${index}`}>
                                    {item.Usuario}
                                </td>
                                <td key={`idTransaction-${index}`}>
                                    {item["Id Transaccion"]}
                                </td>
                                <td key={`typeTransaction-${index}`}>
                                    {item["Tipo Transaccion"]}
                                </td>
                                <td key={`amount-${index}`}>
                                    {item.Monto?.toFixed(2) ?? 0}
                                </td>
                                <td key={`state-${index}`}>
                                    {item.Estado}
                                </td>
                            </tr>
                        ))}       
                    </tbody>
                </table>
            ) : (
                <h1>No Hay Transacciones Registradas</h1>
            )}
        </>
    );
};

export default TableTransactions;