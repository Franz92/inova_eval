"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelUnsubscribe = void 0;
class ChannelUnsubscribe {
    runAction(appState, subParam) {
        subParam.channels.forEach(c => {
            delete appState.Channels[c].Subscribers[subParam.subscriber.url];
        });
        return appState;
    }
}
exports.ChannelUnsubscribe = ChannelUnsubscribe;
