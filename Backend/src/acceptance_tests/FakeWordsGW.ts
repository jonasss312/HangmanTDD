import WordsGateway from "../gateway/api/WordsGateway";

export class FakeWordsGW implements WordsGateway {
    loadWord(): string {
        return "TEST";
    }
}