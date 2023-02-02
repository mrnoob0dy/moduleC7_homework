import {multiply} from '../index.js'
import {sum} from '../index.js'

describe("test multiply", () => {
    it('multiply 1 * 0 to equal 0', () => {
        const result = multiply(1, 0)
        expect(result).toBe(0);
    }),
    it('multiply 1 * 1 to equal 1', () => {
        const result = multiply(1, 1)
        expect(result).toBe(1);
    })
});

describe('test sum',() => {
    it('sum 2 + 2 to equal 4', () => {
        const result = sum(2, 2)
        expect(result).toBe(4)
    }),
    it('sum 10 + 33 to equal 43', () => {
        const result = sum(10, 33)
        expect(result).toBe(43)
    })
})