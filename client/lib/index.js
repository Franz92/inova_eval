#!/usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var clear_1 = __importDefault(require("clear"));
var readline_1 = __importDefault(require("readline"));
var subscribeClient_1 = require("./subscribeClient");
var r1 = readline_1.default.createInterface({
    input: process.stdin,
    output: process.stdout
});
clear_1.default();
var client;
r1.question("Channel: ", function (channel) {
    r1.question("User: ", function (url) {
        client = new subscribeClient_1.SubscribeClient(channel, url);
        client.Subscribe().then(function (r) { return console.log(r); });
        r1.close();
    });
});
