"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channel = void 0;
class Channel {
    constructor(name) {
        this.Messages = [];
        this.Subscribers = {};
        this.Name = name;
    }
}
exports.Channel = Channel;
