const { expect } = require('@jest/globals')
const { getNumbers, perfectNumbers } = require('./index')

describe("GetNumbers func", () => {
    test("getNumbers should return one value", () => {
        expect(getNumbers(423)).toBe(3)
        expect(getNumbers(4383)).toEqual(4)
    })
})

describe("PerfectNumbers func", () => {
    // let fn
    // beforeEach(() => {
    //     fn = jest.fn(x => x)
    // })

    test("perfectNumbers should return array perfect numbers", () => {
        // expect(perfectNumbers(8)).toBe([6])
        expect(perfectNumbers(483)).toEqual([6, 28])
        // expect(fn.mock)
    })
})