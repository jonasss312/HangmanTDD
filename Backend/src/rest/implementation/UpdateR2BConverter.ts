import { BoundaryUpdate } from "../../usecase/model/BoundaryUpdate";

export class UpdateR2BConverter {
    convert(request: any): BoundaryUpdate {
        return new BoundaryUpdate(Number(request.params.id), request.body.guessingLetter)
    }
}