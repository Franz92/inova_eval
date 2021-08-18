import { Message } from './models/message';
import { AxiosClient } from './axiosClient';

export class SubscribeClient{
    client:AxiosClient;
    constructor(channel:string, url:string){
        let data:string = JSON.stringify({ "subscriberUrl" : url });
        let methodUrl = `http://localhost:5000/subscribe/${channel}`;
        this.client = new AxiosClient(data, methodUrl, "post");
    }

    Subscribe = async() => {
        await this.client.Call();
    }
}