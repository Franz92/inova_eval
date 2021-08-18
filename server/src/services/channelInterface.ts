import { AppState } from '../appState';
import { PubSubParam } from '../models/pubSubParam';

export interface ChannelInterface {
    runAction (state: AppState, pubSubParam: PubSubParam) : AppState
}

export abstract class ChannelBase implements ChannelInterface{
    appState:AppState;
    constructor(appState:AppState){
        this.appState = appState;
    }

    abstract runAction (state: AppState, params: PubSubParam) : AppState
}
