"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelSubscribe = void 0;
const channel_1 = require("../models/channel");
class ChannelSubscribe {
    runAction(appState, subParam) {
        subParam.channels.forEach(c => {
            console.log(subParam.subscriber);
            let subChannel = appState.Channels[c] != undefined ? appState.Channels[c] : new channel_1.Channel(c);
            subChannel.Subscribers[subParam.subscriber.url] = subParam.subscriber;
            appState.Channels[c] = subChannel;
        });
        return appState;
    }
}
exports.ChannelSubscribe = ChannelSubscribe;
