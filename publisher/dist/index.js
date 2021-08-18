"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const node_cron_1 = __importDefault(require("node-cron"));
const rss_parser_1 = __importDefault(require("rss-parser"));
const axiosClient_1 = require("./axiosClient");
process.stdin.resume();
let client;
const parser = new rss_parser_1.default();
parser.parseURL("http://meteo.arso.gov.si/uploads/probase/www/observ/surface/text/en/observation_si_latest.rss")
    .then(r => r.items.forEach((i) => __awaiter(void 0, void 0, void 0, function* () { return yield publishRequest(i); })));
const publishRequest = (item) => __awaiter(void 0, void 0, void 0, function* () {
    let data = JSON.stringify([{ "text": item.link }]);
    let url = `http://localhost:5000/publish/${item.guid}`;
    client = new axiosClient_1.AxiosClient(data, url, "POST");
    yield client.Call();
});
node_cron_1.default.schedule('5 * * * * *', () => {
});
