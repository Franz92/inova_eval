import express, { Application, Router } from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import { initRoutes } from './routes'
import { AppState } from './appState';

export class Server{
    public app!: Application;
    public router!: Router;
    public appState!: AppState;

    constructor(){
        this.app = express();
        this.app.use(cors());
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
