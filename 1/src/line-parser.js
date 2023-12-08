const { calculate } = require('./line-calculator')

const mappings = Object.freeze({
    one: "1", 
    two: "2", 
    three: "3", 
    four: "4", 
    five: "5", 
    six: "6", 
    seven: "7", 
    eight: "8", 
    nine: "9"
})

function findFirst(line) {
    const keys = Object.keys(mappings);
    const first = {
        key: undefined,
        index: undefined
    }
    keys.forEach(key => {
        const index = line.indexOf(key)
        if(index > -1 && index < (first.index ?? Number.MAX_SAFE_INTEGER)) {
            first.key = key
            first.index = index
        }
    })
    return first.key ? line.replace(first.key, mappings[first.key] + first.key) : line
}

function findLast(line) {
    const keys = Object.keys(mappings);
    const last = {
        key: undefined,
        index: undefined
    }
    keys.forEach(key => {
        const index = line.indexOf(key)
        if(index > -1 && index > (last.index ?? Number.MIN_SAFE_INTEGER)) {
            last.key = key
            last.index = index
        }
    })
    return last.key ? line.replaceAll(last.key, mappings[last.key]) : line
}

/**
 * Parses a string, replacing the first and last number as a word with its value 
 * and returns the concatenated value of the first digit and last digit in the string
 * @param {String} line 
 * @returns {Number} 
 */
function parseLine(line) {
    const first = findFirst(line)
    const last = findLast(first)
    console.log({line, first, last})
    return calculate(last)
}

module.exports = {
    parseLine
}