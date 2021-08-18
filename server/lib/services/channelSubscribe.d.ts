import { ChannelInterface } from './channelInterface';
import { AppState } from '../appState';
import { GlobChecker } from '../glob';
export declare class ChannelSubscribe implements ChannelInterface {
    globChecker: GlobChecker;
    runAction(appState: AppState, args: string[]): AppState;
}
