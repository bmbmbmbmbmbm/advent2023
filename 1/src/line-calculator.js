function firstDigit(line) {
    if(typeof line !== "string") throw new Error('Not a string')
    const regex = /\d/
    const result = regex.exec(line)
    return result ? result[0] : '0'
}

function lastDigit(line) {
    if(typeof line !== "string") throw new Error('Not a string')
    const reversed = line.split('').reverse().join('')
    return firstDigit(reversed)
}

/**
 * Calculates the concatenated value of the first digit and last digit in the string
 * @param {String} line 
 * @returns {Number}
 */
function calculate(line) {
    return Number.parseInt(firstDigit(line) + lastDigit(line))
}

module.exports = {
    calculate
}