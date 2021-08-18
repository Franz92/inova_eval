import { Request, Response } from 'express';
import { ChannelInterface } from './channelInterface';
import { ChannelPublish } from './channelPublish';
import { ChannelSubscribe } from './channelSubscribe';
import { ChannelUnsubscribe } from './channelUnsubscribe';
import { AppState } from '../appState';
import { PubParam, SubParam } from '../models/pubSubParam';

let action:ChannelInterface;
let appState:AppState = new AppState;

export const postSubscribeChannel = (req: Request, res: Response) => {
    try {                       
        let sub:SubParam = new SubParam(req, appState);
        
        action = new ChannelSubscribe;
        appState = action.runAction(appState, sub);

        return res.end(JSON.stringify(appState));

    } catch (error) {
        res.send(error.message)
    }    
}

export const postUnsubscribeChannel = (req: Request, res: Response) => {
    try {
        let unSub:SubParam = new SubParam(req, appState);

        action = new ChannelUnsubscribe;
        appState = action.runAction(appState, unSub);

        res.end(JSON.stringify(appState));
        
    } catch (error) {
        res.send(error.message)
    }    
}

export const publishChannel = (req: Request, res: Response) => {
    try {
        let pubParam:PubParam = new PubParam(req, appState);
        
        action = new ChannelPublish;
        appState = action.runAction(appState, pubParam);

        res.end(JSON.stringify(appState.Channels));
    } catch (error) {
        res.send(error.message)
    }    
}


