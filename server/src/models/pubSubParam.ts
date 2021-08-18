import { Subscriber } from "../../lib/models/subscriber";
import { Request, Response } from 'express';
import minimatch from "minimatch";
import { Message } from "./message";
import { AppState } from "../appState";

export abstract class PubSubParam{
    public channels:string[];
    protected request:Request;
    constructor(request:Request, appState:AppState){
        this.request = request;

        let concatParams = request.params.channel + request.params["0"];
        if(!concatParams.includes("*")){
            this.channels = [ concatParams ];            
            return;
        }

        this.channels = minimatch.match(Object.keys(appState.Channels), concatParams, {matchBase: true});

    }

    abstract Init() : void;
}

export class SubParam extends PubSubParam{

    public subscriber!:Subscriber;

    constructor(request:Request, appState:AppState){
        super(request, appState);
        this.Init();
    }

    Init(): void {
        this.subscriber = new Subscriber(this.request.body.subscriberUrl);
    }
}

export class PubParam extends PubSubParam{

    public messages!:Message[];

    constructor(request:Request, appState:AppState){
        super(request, appState);
        this.Init()
    }

    Init(): void {
        console.log(this.request.body);
        this.messages = this.request.body;
        console.log(this.messages);
    }
}