type TUri = string;
type TMethod = "GET" | "POST" | "PUT" | "DELETE" | "PATCH" | "OPTIONS" | "HEAD";
type THeaders = Record<string, string>;
type TToken = string;

interface IFetch<T> {
    data: T,
    message: string,
}

export type {
    TUri,
    TMethod,
    THeaders,
    TToken,
    IFetch,
};