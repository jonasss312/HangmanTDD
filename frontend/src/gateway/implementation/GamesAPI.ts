import { Game } from "domain/Game";
import { GamesGateway } from "gateway/api/GamesGateway";
import { map, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";

export class GamesAPI implements GamesGateway {
    private readonly connectionString: string;

    constructor(connectionString : string) {
        this.connectionString = connectionString;
    }

    createGame(): Observable<Game> {
        return ajax
            .post<Game>(this.connectionString)
            .pipe(map((data) => data.response))
    }
}
