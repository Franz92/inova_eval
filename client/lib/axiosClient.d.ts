import { AxiosRequestConfig, Method } from 'axios';
export declare class AxiosClient {
    config: AxiosRequestConfig;
    constructor(json: string, url: string, methodType: Method);
    Call: () => Promise<void>;
}
