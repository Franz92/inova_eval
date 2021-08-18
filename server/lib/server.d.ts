import { Application, Router } from 'express';
import { AppState } from './appState';
export declare class Server {
    app: Application;
    router: Router;
    appState: AppState;
    constructor();
    start: () => void;
    private setRoutes;
}
