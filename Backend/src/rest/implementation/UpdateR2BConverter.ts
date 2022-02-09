import { BoundaryUpdate } from "../../usecase/model/BoundaryUpdate";

export class UpdateR2BConverter {
    convert(request: any): BoundaryUpdate {
        return new BoundaryUpdate(request.body.id, request.body.guessingLetter)
    }
}