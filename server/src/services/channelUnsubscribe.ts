import { ChannelInterface } from './channelInterface';
import { AppState } from '../appState';
import { Subscriber } from '../models/subscriber';
import { SubParam } from '../models/pubSubParam';

export class ChannelUnsubscribe implements ChannelInterface{
    runAction(appState:AppState, subParam: SubParam){
        subParam.channels.forEach(c => {
            delete appState.Channels[c].Subscribers[subParam.subscriber.url];
        });        
        
        return appState;
    }
}