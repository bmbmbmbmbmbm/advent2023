
function getRidOf(string) {
    if (typeof string !== 'string') throw new Error('Uh oh it is not a string')
    return string.split('').map(() => '.').join('')
}

function getValidNumber(line, index) {
    const numberRegex = /[0-9]+/
    let total = 0;
    let lineCopy = line;

    while (numberRegex.test(lineCopy)) {
        const result = numberRegex.exec(lineCopy)
        const start = result.index - 1
        const end = result.index + result[0].length
        if (index >= start && index <= end) {
            total += Number.parseInt(result[0])
        }

        lineCopy = lineCopy.replace(result[0], getRidOf(result[0]))
    }

    return total;
}

function findLineValue(line, index, list) {
    const symbolRegex = /[^0-9.]/
    let lineCopy = line;
    let total = 0;
    while (symbolRegex.test(lineCopy)) {
        const result = symbolRegex.exec(lineCopy)
        for (let i = -1; i < 2; ++i) {
            if (index + i === list.length || index + i === -1) continue
            total += getValidNumber(list[index + i], result.index)
        }
        lineCopy = lineCopy.replace(result[0], getRidOf(result[0]))
    }
    return total
}

function calculateSum(list) {
    const initial = 0
    return list.reduce((acc, line, index) => acc + findLineValue(line, index, list), initial)
}

module.exports = {
    calculateSum
}