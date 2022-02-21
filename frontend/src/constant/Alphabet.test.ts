import { ALPHABET } from "./Alphabet";

describe("Alphabet", () => {
  it("Can generate UPPERCASE alphabet", () => {
    const upperCaseAlphabet = [
      "A",
      "B",
      "C",
      "D",
      "E",
      "F",
      "G",
      "H",
      "I",
      "J",
      "K",
      "L",
      "M",
      "N",
      "O",
      "P",
      "Q",
      "R",
      "S",
      "T",
      "U",
      "V",
      "W",
      "X",
      "Y",
      "Z",
    ];
    expect(ALPHABET).toEqual(upperCaseAlphabet);
  });
});
