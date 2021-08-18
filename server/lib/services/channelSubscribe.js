"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelSubscribe = void 0;
var subscriber_1 = require("../models/subscriber");
var glob_1 = require("../glob");
var ChannelSubscribe = /** @class */ (function () {
    function ChannelSubscribe() {
    }
    ChannelSubscribe.prototype.runAction = function (appState, args) {
        this.globChecker = new glob_1.GlobChecker(appState);
        var channel = args[0];
        var subscriber = new subscriber_1.Subscriber(args[1]);
        var subscriptionChannel = appState.Channels[channel];
        appState = this.globChecker.UpdateAppState(Object.keys(appState.Channels), channel);
        if (subscriptionChannel == undefined)
            return appState;
        subscriptionChannel.Subscribers[subscriber.url] = subscriber;
        appState.Channels[channel] = subscriptionChannel;
        return appState;
    };
    return ChannelSubscribe;
}());
exports.ChannelSubscribe = ChannelSubscribe;
