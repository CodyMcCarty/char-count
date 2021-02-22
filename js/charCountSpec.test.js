// Can you translate this driver code to unit tests?

// var char = require("./charCount");

// console.log(char.charCount("aaabbc")['a'] === 3)
// console.log(char.charCount("aaabbc")['b'] === 2)
// console.log(char.charCount("aaabbc")['c'] === 1)

// console.log(char.charCount('rplyoacadawpettlleaodeeywapkniha')['a'] === 6)
// console.log(char.charCount('rplyoacadawpettlleaodeeywapkniha')['e'] === 4)
// console.log(char.charCount('rplyoacadawpettlleaodeeywapkniha')['l'] === 3)
// console.log(char.charCount('rplyoacadawpettlleaodeeywapkniha')['p'] === 3)
// console.log(char.charCount('rplyoacadawpettlleaodeeywapkniha')['w'] === 2)
// console.log(char.charCount('rplyoacadawpettlleaodeeywapkniha')['d'] === 2)
// console.log(char.charCount('rplyoacadawpettlleaodeeywapkniha')['o'] === 2)
// console.log(char.charCount('rplyoacadawpettlleaodeeywapkniha')['t'] === 2)
// console.log(char.charCount('rplyoacadawpettlleaodeeywapkniha')['y'] === 2)
// console.log(char.charCount('rplyoacadawpettlleaodeeywapkniha')['k'] === 1)
// console.log(char.charCount('rplyoacadawpettlleaodeeywapkniha')['h'] === 1)
// console.log(char.charCount('rplyoacadawpettlleaodeeywapkniha')['i'] === 1)
// console.log(char.charCount('rplyoacadawpettlleaodeeywapkniha')['c'] === 1)
// console.log(char.charCount('rplyoacadawpettlleaodeeywapkniha')['n'] === 1)
// console.log(char.charCount('rplyoacadawpettlleaodeeywapkniha')['r'] === 1)

// const { test, expect } = require('@jest/globals')

let charCount = require('./charCount')

test('sample for aaabbc', () => {
    expect(charCount("aaabbc")).toEqual({
        "a": 3,
        "b": 2,
        "c": 1,
      })
})

test('an apple a day will keep the doctor away', () => {
    expect(charCount("an apple a day will keep the doctor away")).toEqual({
        "a": 5,
        "e": 4,
        "p": 3,
        "l": 3,
        "y": 2,
        "w": 2,
        "t": 2,
        "d": 2,
        "h": 1,
        "n": 1,
        "c": 1,
        "o": 1,
        "i": 1,
        "k": 1,
        "r": 1,
      })
})
