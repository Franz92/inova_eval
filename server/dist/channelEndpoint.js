"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.publishChannel = exports.postUnsubscribeChannel = exports.postSubscribeChannel = void 0;
const channelPublish_1 = require("./services/channelPublish");
const channelSubscribe_1 = require("./services/channelSubscribe");
const channelUnsubscribe_1 = require("./services/channelUnsubscribe");
const appState_1 = require("./appState");
const pubSubParam_1 = require("./models/pubSubParam");
let action;
let appState = new appState_1.AppState;
const postSubscribeChannel = (req, res) => {
    try {
        let sub = new pubSubParam_1.SubParam(req, appState);
        action = new channelSubscribe_1.ChannelSubscribe;
        appState = action.runAction(appState, sub);
        return res.end(JSON.stringify(appState));
    }
    catch (error) {
        res.send(error.message);
    }
};
exports.postSubscribeChannel = postSubscribeChannel;
const postUnsubscribeChannel = (req, res) => {
    try {
        let unSub = new pubSubParam_1.SubParam(req, appState);
        action = new channelUnsubscribe_1.ChannelUnsubscribe;
        appState = action.runAction(appState, unSub);
        res.end(JSON.stringify(appState));
    }
    catch (error) {
        res.send(error.message);
    }
};
exports.postUnsubscribeChannel = postUnsubscribeChannel;
const publishChannel = (req, res) => {
    try {
        let pubParam = new pubSubParam_1.PubParam(req, appState);
        action = new channelPublish_1.ChannelPublish;
        appState = action.runAction(appState, pubParam);
        res.end(JSON.stringify(appState));
    }
    catch (error) {
        res.send(error.message);
    }
};
exports.publishChannel = publishChannel;
