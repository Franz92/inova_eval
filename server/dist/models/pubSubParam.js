"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PubParam = exports.SubParam = exports.PubSubParam = void 0;
const subscriber_1 = require("../../lib/models/subscriber");
const minimatch_1 = __importDefault(require("minimatch"));
class PubSubParam {
    constructor(request, appState) {
        this.request = request;
        let concatParams = request.params.channel + request.params["0"];
        if (!concatParams.includes("*")) {
            this.channels = [concatParams];
            return;
        }
        this.channels = minimatch_1.default.match(Object.keys(appState.Channels), concatParams, { matchBase: true });
    }
}
exports.PubSubParam = PubSubParam;
class SubParam extends PubSubParam {
    constructor(request, appState) {
        super(request, appState);
        this.Init();
    }
    Init() {
        this.subscriber = new subscriber_1.Subscriber(this.request.body.subscriberUrl);
    }
}
exports.SubParam = SubParam;
class PubParam extends PubSubParam {
    constructor(request, appState) {
        super(request, appState);
        this.Init();
    }
    Init() {
        console.log(this.request.body);
        this.messages = this.request.body;
        console.log(this.messages);
    }
}
exports.PubParam = PubParam;
