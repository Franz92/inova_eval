import { Subscriber } from "./subscriber";
import { Message } from "./message";
export declare class Channel {
    Name: string;
    Messages: Message[];
    Subscribers: {
        [url: string]: Subscriber;
    };
    constructor(name: string);
}
