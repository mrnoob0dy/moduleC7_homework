import { revertString } from "../string.js";
import { anagram } from "../string.js";

describe("tests for revertString function", () => {
  it("should reverse string", () => expect(revertString("abc")).toBe("cba"));
});

describe('является ли строка анаграмом', () => {
  const str = 'anna'
  const str2 = 'food'
  it('', () => {
    expect(anagram(str)).toBe(`Строка ${str} является анаграмом`)
    expect(anagram(str2)).toBe(`Строка ${str2} не является анаграмом`)
  })
})