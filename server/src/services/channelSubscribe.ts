import { ChannelInterface } from './channelInterface';
import { AppState } from '../appState';
import { SubParam } from '../models/pubSubParam';
import { Channel } from '../models/channel';

export class ChannelSubscribe implements ChannelInterface{
    runAction(appState:AppState, subParam: SubParam){
        subParam.channels.forEach(c =>{   
            console.log(subParam.subscriber);
            let subChannel = appState.Channels[c] != undefined ? appState.Channels[c] : new Channel(c);
            subChannel.Subscribers[subParam.subscriber.url] = subParam.subscriber;

            appState.Channels[c] = subChannel;
        })

        return appState;
    }
}