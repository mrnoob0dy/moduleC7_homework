import { definePrime } from "../definePrime.js"


describe('test from definePrime function', () => {
    const simple = 17
    const complex = 18

    it('should operate correctly with simple', () => {
        expect(definePrime(simple)).toBe(`Число ${simple} - простое`)
    }),
    it('should operate correctly with complex', () => {
        expect(definePrime(complex)).toBe(`Число ${complex} - составное`)
    }),
    it('should operate correctly with invalid', () => {
        expect(definePrime(1001)).toBe(`Данные неверны`)
    })
})

describe('test from definePrime function', () => {
    const simple = 17
    const complex = 18

    it('should operate correctly with simple, complex and invalid number', () => {
        expect(definePrime(simple)).toBe(`Число ${simple} - простое`)
        expect(definePrime(complex)).toBe(`Число ${complex} - составное`)
        expect(definePrime(1001)).toBe(`Данные неверны`)
    })
})