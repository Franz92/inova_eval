"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChannelPublish = void 0;
var glob_1 = require("../glob");
var ChannelPublish = /** @class */ (function () {
    function ChannelPublish() {
    }
    ChannelPublish.prototype.runAction = function (appState, args) {
        this.globChecker = new glob_1.GlobChecker(appState);
        var messages = JSON.parse(args[1]);
        var channel = args[0];
        appState = this.globChecker.UpdateAppState(Object.keys(appState.Channels), channel);
        // subscriptionChannel.Messages.push(...messages);    
        return appState;
    };
    return ChannelPublish;
}());
exports.ChannelPublish = ChannelPublish;
