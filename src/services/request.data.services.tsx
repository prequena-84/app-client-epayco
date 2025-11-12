import type { TUri, TMethod, THeaders, TToken, IFecth } from "./request.data.services.types";

export default async function requestData<TResponse, TRequestBody = TResponse> ( 
    uri: TUri, 
    method: TMethod = 'GET', 
    body?: TRequestBody, 
    headers: THeaders = { 
        'Content-Type':'application/json' 
    },
    token?: TToken,
):Promise<IFecth<TResponse>> {

    if ( !uri ) throw new Error('URI no encontrada');
    if (token) headers["Authorization"] = `Bearer ${token}`;
    
    const response = await fetch(uri, {
        method,
        headers,
        body: method === 'GET' ? undefined : JSON.stringify(body),
    });

    const data = await response.json();
    if ( !response.ok ) throw new Error(data.message.message || 'Error en la red, datos o la solicitud falló');

    return {
        data:data,
        message:data.message,
    };
};