"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobChecker = void 0;
const minimatch_1 = __importDefault(require("minimatch"));
const channel_1 = require("./models/channel");
class GlobChecker {
    constructor(appState) {
        this.UpdateAppState = (keys, match) => {
            if (Object.keys(this.appState.Channels).length == 0 || !String.prototype.includes("*")) {
                match = match.replace("*", "");
                this.appState.Channels[match] = new channel_1.Channel(match);
                return this.appState;
            }
            this.CheckGlob(keys, match).forEach(m => {
                this.appState.Channels[m] = new channel_1.Channel(m);
            });
            return this.appState;
        };
        this.CheckGlob = (keys, match) => {
            return minimatch_1.default.match(keys, match, { matchBase: false });
        };
        this.appState = appState;
    }
}
exports.GlobChecker = GlobChecker;
