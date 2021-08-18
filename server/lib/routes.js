"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.initRoutes = void 0;
var channelEndpoint_1 = require("./channelEndpoint");
var initRoutes = function (app) {
    app.post("/subscribe/:channel*", channelEndpoint_1.postSubscribeChannel);
    app.post("/unsubscribe/:channel*", channelEndpoint_1.postUnsubscribeChannel);
    app.post("/publish/:channel*", channelEndpoint_1.publishChannel);
};
exports.initRoutes = initRoutes;
