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
exports.AxiosClient = void 0;
const axios_1 = __importDefault(require("axios"));
class AxiosClient {
    constructor(json, url, methodType) {
        this.Call = () => __awaiter(this, void 0, void 0, function* () {
            yield axios_1.default(this.config)
                .catch(function (error) {
                console.log(error);
            });
        });
        var data = json;
        this.config = {
            method: methodType,
            url: url,
            headers: {
                'Content-Type': 'application/json'
            },
            data: data
        };
    }
}
exports.AxiosClient = AxiosClient;
