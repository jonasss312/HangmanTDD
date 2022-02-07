import { RestGame } from "../models/RestGame";

export interface ControllerApi{
    createGame(req: any, res:any): Promise<any>;
    updateGame(game : RestGame): RestGame;
}