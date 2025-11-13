import type { TUri, TMethod, TToken, THeaders, IFetch } from "./request.data.services.types";

export default async function requestData<TResponse, TRequestBody = TResponse> ( 
    uri: TUri, 
    method: TMethod = 'GET', 
    body?: TRequestBody, 
    token?: TToken,
):Promise<IFetch<TResponse | []> | {data:null, message:string}> {
    try {

        if ( !uri ) throw new Error('URI no encontrada');
        const headers: THeaders = { 'Content-Type':'application/json' };
        if (token) headers["Authorization"] = `Bearer ${token}`;
     
        const response = await fetch(uri, {
            method,
            headers,
            body: method === 'GET' ? undefined : JSON.stringify(body),
        });


        if ( !response.ok ) console.error('Error en la red, datos o la solicitud falló');
        const data = await response.json();

        return {
            data: data.data,
            message:data.message,
        };

    } catch(err) {
        return {
            data:[],
            message:`error en petición: ${err}`,
        };
    };
};