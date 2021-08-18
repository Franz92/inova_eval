"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const express_1 = __importDefault(require("express"));
const body_parser_1 = __importDefault(require("body-parser"));
const cors_1 = __importDefault(require("cors"));
const routes_1 = require("./routes");
class Server {
    constructor() {
        this.start = () => {
            this.app.listen(5000);
        };
        this.setRoutes = () => {
            routes_1.initRoutes(this.app);
        };
        this.app = express_1.default();
        this.app.use(cors_1.default());
        this.app.use(body_parser_1.default.urlencoded({ extended: true }));
        this.app.use(body_parser_1.default.json());
        this.setRoutes();
    }
}
exports.Server = Server;
