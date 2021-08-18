"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Channel = void 0;
var Channel = /** @class */ (function () {
    function Channel(name) {
        this.Messages = [];
        this.Subscribers = {};
        this.Name = name;
    }
    return Channel;
}());
exports.Channel = Channel;
