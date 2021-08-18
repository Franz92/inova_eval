import { Channel } from './models/channel';

export class AppState{
    public Channels:{ [url: string]: Channel; } = {}
}