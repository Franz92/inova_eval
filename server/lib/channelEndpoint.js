"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publishChannel = exports.postUnsubscribeChannel = exports.postSubscribeChannel = void 0;
var channelPublish_1 = require("./services/channelPublish");
var channelSubscribe_1 = require("./services/channelSubscribe");
var channelUnsubscribe_1 = require("./services/channelUnsubscribe");
var appState_1 = require("./appState");
var action;
var appState = new appState_1.AppState;
var postSubscribeChannel = function (req, res) {
    try {
        var subscribeArgs = [req.params.channel + req.params["0"], req.body.subscriberUrl];
        action = new channelSubscribe_1.ChannelSubscribe;
        appState = action.runAction(appState, subscribeArgs);
        return res.end(JSON.stringify(appState));
    }
    catch (error) {
        res.send(error.message);
    }
};
exports.postSubscribeChannel = postSubscribeChannel;
var postUnsubscribeChannel = function (req, res) {
    try {
        var unsubscribeArgs = [req.params.channel + req.params["0"], req.body.subscriberUrl];
        action = new channelUnsubscribe_1.ChannelUnsubscribe;
        appState = action.runAction(appState, unsubscribeArgs);
        res.end(JSON.stringify(appState));
    }
    catch (error) {
        res.send(error.message);
    }
};
exports.postUnsubscribeChannel = postUnsubscribeChannel;
var publishChannel = function (req, res) {
    try {
        var publishArgs = [req.params.channel + req.params["0"], JSON.stringify(req.body)];
        action = new channelPublish_1.ChannelPublish;
        appState = action.runAction(appState, publishArgs);
        res.end(JSON.stringify(appState));
    }
    catch (error) {
        res.send(error.message);
    }
};
exports.publishChannel = publishChannel;
