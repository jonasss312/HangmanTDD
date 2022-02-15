import { Observable } from "rxjs";
import { BoundaryGame } from "usecase/model/BoundaryGame";

export interface GetNewGameUseCase {
  getGame(): Observable<BoundaryGame>;
}
