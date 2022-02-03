import * as fs from "fs";
import * as path from 'path';
import WordsInterface from "../api/WordsGateway";

export class WordsFromFile implements WordsInterface {
    private readonly fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName;
    }

    private readWords(): string[] {
        return fs.readFileSync(path.join(__dirname, this.fileName), 'utf8').split('\n');
    }

    loadWord(): string {
        let words: string[] = this.readWords();
        return words[Math.floor(Math.random() * (words.length))]
            .replace(/\r?\n|\r/g, "")
    }
    // gitflow
}