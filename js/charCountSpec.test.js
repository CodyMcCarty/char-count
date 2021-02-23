
// begin test of charCount()

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
        "a": 6,
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
        "o": 2,
        "i": 1,
        "k": 1,
        "r": 1,
      })
})

test('rplyoacadawpettlleaodeeywapkniha', () => {
    expect(charCount('rplyoacadawpettlleaodeeywapkniha')).toEqual({
        "a": 6,
        "e": 4,
        "l": 3,
        "p": 3,
        "w": 2,
        "d": 2,
        "o": 2,
        "t": 2,
        "y": 2,
        "k": 1,
        "h": 1,
        "i": 1,
        "c": 1,
        "n": 1,
        "r": 1, 
    })
})

//end test of charCount()
