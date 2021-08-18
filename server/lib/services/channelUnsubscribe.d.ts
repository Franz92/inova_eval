import { ChannelInterface } from './channelInterface';
import { AppState } from '../appState';
export declare class ChannelUnsubscribe implements ChannelInterface {
    runAction(appState: AppState, args: string[]): AppState;
}
