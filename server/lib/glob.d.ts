import { AppState } from "./appState";
export declare class GlobChecker {
    appState: AppState;
    constructor(appState: AppState);
    UpdateAppState: (keys: string[], match: string) => AppState;
    private CheckGlob;
}
