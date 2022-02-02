import * as fs from "fs";
import * as path from 'path';

export class WordGenerator {
    private readonly fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName;
    }

    private readWords() : string[] {
        console.log(this.fileName)
        return fs.readFileSync(path.join(__dirname, this.fileName), 'utf8').split('\n');
    }

    getWords(): string {
        let words: string[] =this.readWords();
        return words[Math.floor(Math.random() * (words.length))]
        .replace(/\r?\n|\r/g, "")
    }
}