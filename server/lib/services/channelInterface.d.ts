import { AppState } from '../appState';
export interface ChannelInterface {
    runAction(state: AppState, params: string[]): AppState;
}
export declare abstract class ChannelBase implements ChannelInterface {
    appState: AppState;
    constructor(appState: AppState);
    abstract runAction(state: AppState, params: string[]): AppState;
}
