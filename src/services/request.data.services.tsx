import type { TUri, TMethod, THeaders, TToken, IFecth } from "./request.data.services.types";

export default async function requestData<TResponse, TRequestBody = TResponse> ( 
    uri: TUri, 
    method: TMethod = 'GET', 
    body?: TRequestBody, 
    token?: TToken,
):Promise<IFecth<TResponse> | {data:null, message:string}> {
    try {

        if ( !uri ) throw new Error('URI no encontrada');
        const headers: THeaders = { 'Content-Type':'application/json' };
        if (token) headers["Authorization"] = `Bearer ${token}`;
        
        const response = await fetch(uri, {
            method,
            headers,
            body: method === 'GET' ? undefined : JSON.stringify(body),
        });

        const data = await response.json();
        if ( !response.ok ) throw new Error(data.message.message || 'Error en la red, datos o la solicitud falló');

        return {
            data,
            message:data.message,
        };

    } catch(err) {
        console.error('error en peticion', err);
        return {
            data:null,
            message:`error en petición: ${err}`,
        };
    };
};