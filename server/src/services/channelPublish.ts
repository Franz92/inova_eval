import { ChannelInterface } from './channelInterface';
import { AppState } from '../appState';
import { Message } from '../models/message';
import { PubParam } from '../models/pubSubParam';
import { Channel } from '../models/channel';

export class ChannelPublish implements ChannelInterface{
    
    runAction(appState: AppState, pubParam: PubParam){        
        pubParam.channels.forEach(c => {
            let pubChannel = appState.Channels[c] != undefined ? appState.Channels[c] : new Channel(c);
            pubChannel.Messages.push(...pubParam.messages);

            appState.Channels[c] = pubChannel;
        });
        
        return appState;
    }
}