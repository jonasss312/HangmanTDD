import WordsGateway from "../api/WordsGateway";

export class FakeWordsGW implements WordsGateway {
    loadWord(): string {
        return "TEST";
    }
}