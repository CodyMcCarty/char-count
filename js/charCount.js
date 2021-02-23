
//charCount For each unique character that appears in the input string, report the number of occurrences of that character in the input. Report each character on its own line, in descending order based on the number of occurrences. Each line should be formatted as follows:

// <character>: <number of occurrences>
// There is no defined order for reporting characters that have the same number of occurrences. Such entries can appear in any order of your choosing in the output. Please also omit spaces when counting the characters.

// Examples:

// analyze("aaabbc")

// {
//   "a": 3,
//   "b": 2,
//   "c": 1,
// }

let charCount = (inputString) => {
    let result = {}
    for (let i = 0; i < inputString.length; i++) {
        if (inputString[i] === " ") {
            i++
        }
        if (!result.hasOwnProperty(inputString[i])) {
            result[inputString[i]] = 1
        } else {
            result[inputString[i]] += 1
        }
    }
    return result
}

module.exports = charCount
