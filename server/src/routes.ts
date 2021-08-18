import { Application } from 'express';
import {postSubscribeChannel, postUnsubscribeChannel, publishChannel } from './services/channelEndpoint';


export const initRoutes = (app: Application) => {
    app.post("/subscribe/:channel*", postSubscribeChannel);
    app.post("/unsubscribe/:channel*", postUnsubscribeChannel);
    app.post("/publish/:channel*", publishChannel);
} 