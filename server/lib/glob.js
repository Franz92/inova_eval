"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.GlobChecker = void 0;
var minimatch_1 = __importDefault(require("minimatch"));
var channel_1 = require("./models/channel");
var GlobChecker = /** @class */ (function () {
    function GlobChecker(appState) {
        var _this = this;
        this.UpdateAppState = function (keys, match) {
            if (Object.keys(_this.appState.Channels).length == 0 || !String.prototype.includes("*")) {
                match = match.replace("*", "");
                _this.appState.Channels[match] = new channel_1.Channel(match);
                return _this.appState;
            }
            _this.CheckGlob(keys, match).forEach(function (m) {
                _this.appState.Channels[m] = new channel_1.Channel(m);
            });
            return _this.appState;
        };
        this.CheckGlob = function (keys, match) {
            return minimatch_1.default.match(keys, match, { matchBase: false });
        };
        this.appState = appState;
    }
    return GlobChecker;
}());
exports.GlobChecker = GlobChecker;
