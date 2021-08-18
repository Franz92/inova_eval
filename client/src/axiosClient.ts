import axios, { AxiosRequestConfig, Method } from 'axios';

export class AxiosClient{
    config!:AxiosRequestConfig;

    constructor(json:string, url:string, methodType:Method){
        var data = json;

        this.config = {
        method: methodType,
        url: url,
        headers: { 
            'Content-Type': 'application/json'
        },
        data : data
        };
    }
    public Call = async() => {
        await axios(this.config)
        .catch(function (error) {
            console.log(error);
        });
    }
}