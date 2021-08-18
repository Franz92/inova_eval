"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelUnsubscribe = void 0;
var subscriber_1 = require("../models/subscriber");
var ChannelUnsubscribe = /** @class */ (function () {
    function ChannelUnsubscribe() {
    }
    ChannelUnsubscribe.prototype.runAction = function (appState, args) {
        var channel = args[0];
        var subscriber = new subscriber_1.Subscriber(args[1]);
        if (appState.Channels[channel] == undefined)
            return appState;
        delete appState.Channels[channel].Subscribers[subscriber.url];
        return appState;
    };
    return ChannelUnsubscribe;
}());
exports.ChannelUnsubscribe = ChannelUnsubscribe;
