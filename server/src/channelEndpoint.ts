import { Request, Response } from 'express';
import { ChannelRequest } from './services/channelReqeust'

export const postSubscribeChannel = (req: Request, res: Response) => {
    try {
        console.log(req.body);
        res.end(`subsc ${req.body}`);
    } catch (error) {
        res.send(error.message)
    }    
}

export const postUnsubscribeChannel = (req: Request, res: Response) => {
    res.send(`unsubsc ${req.body}`);
}

export const publishChannel = (req: Request, res: Response) => {
    res.send(`publish ${req.params.channel}`);
}
