import { Game } from "domain/Game";
import { GamesGateway } from "gateway/api/GamesGateway";
import { map, Observable } from "rxjs";
import { ajax } from "rxjs/ajax";

export class GamesAPI implements GamesGateway {
    private readonly connectionString: string;

    constructor(connectionString : string) {
        this.connectionString = connectionString;
    }

    createGame(): Observable<Game | undefined> {
        let game: Game | undefined;
        const subscription = ajax
            .post<Game | undefined>(this.connectionString)
            .pipe(map((data) => data.response))
            .subscribe((data) => (game = data));
        subscription.unsubscribe();
        return new Observable<Game | undefined>(subscriber => {
            subscriber.next(game)});
    }
}
