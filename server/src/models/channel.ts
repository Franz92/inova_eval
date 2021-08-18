import { Subscriber } from "./subscriber";
import { Message } from "./message";

export class Channel{    
    public Name:string
    public Messages:Message[] = [];
    public Subscribers: { [url:string] : Subscriber } = {};

    constructor(name:string){
        this.Name = name;
    }
}