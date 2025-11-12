type TUri = string;
type TMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";
type THeaders = Record<string, string>;
type TToken = string;

interface IFecth<T> {
    data: T,
    message: string,
}

export type {
    TUri,
    TMethod,
    THeaders,
    TToken,
    IFecth,
};