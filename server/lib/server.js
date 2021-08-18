"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
var express_1 = __importDefault(require("express"));
var body_parser_1 = __importDefault(require("body-parser"));
var cors_1 = __importDefault(require("cors"));
var routes_1 = require("./routes");
var Server = /** @class */ (function () {
    function Server() {
        var _this = this;
        this.start = function () {
            _this.app.listen(5000);
        };
        this.setRoutes = function () {
            routes_1.initRoutes(_this.app);
        };
        this.app = express_1.default();
        this.app.use(cors_1.default());
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use(body_parser_1.default.json());
        this.setRoutes();
    }
    return Server;
}());
exports.Server = Server;
