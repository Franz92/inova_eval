"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelPublish = void 0;
const channel_1 = require("../models/channel");
class ChannelPublish {
    runAction(appState, pubParam) {
        pubParam.channels.forEach(c => {
            let pubChannel = appState.Channels[c] != undefined ? appState.Channels[c] : new channel_1.Channel(c);
            pubChannel.Messages.push(...pubParam.messages);
            appState.Channels[c] = pubChannel;
        });
        return appState;
    }
}
exports.ChannelPublish = ChannelPublish;
