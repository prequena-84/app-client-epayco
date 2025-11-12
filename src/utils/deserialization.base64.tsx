import { Buffer } from "buffer";

export default function deserializationBase64(data:string): string {
    const decode64 = Buffer.from(data,'base64').toString('utf-8');
    return decode64;
};