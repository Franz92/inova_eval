import express, { Application, Router } from 'express';
import bodyParser from 'body-parser';
import { initRoutes } from './routes'

export class Server{
    public app!: Application;
    public router!: Router;

    constructor(){
        this.app = express();
        this.app.use(bodyParser.urlencoded({ extended: true }));
        this.app.use(bodyParser.json());

        this.setRoutes();
    }

    public start = () => {
        this.app.listen(5000);
    }

    private setRoutes = () => {
        initRoutes(this.app);
    }
}
