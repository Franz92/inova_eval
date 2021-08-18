import { AxiosClient } from './axiosClient';
export declare class SubscribeClient {
    client: AxiosClient;
    constructor(channel: string, url: string);
    Subscribe: () => Promise<void>;
}
