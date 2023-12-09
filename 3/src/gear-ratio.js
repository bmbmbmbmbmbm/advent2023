const { getRidOf } = require('./symbol-sum')
const initial = 0

function getAdjacents(line, index) {
    const numberRegex = /[0-9]+/
    const found = []
    let lineCopy = line;

    while (numberRegex.test(lineCopy)) {
        const result = numberRegex.exec(lineCopy)
        const start = result.index - 1
        const end = result.index + result[0].length

        if (index >= start && index <= end) {
            found.push(Number.parseInt(result[0]))
        }

        lineCopy = lineCopy.replace(result[0], getRidOf(result[0]))
    }
    return found
}

function findGearValues(line, index, list) {
    const gearRegex = /\*/
    let total = 0
    let lineCopy = line;
    
    while (gearRegex.test(lineCopy)) {
        const result = gearRegex.exec(lineCopy)
        let found = []

        for (let i = -1; i < 2; ++i) {
            if (index + i === list.length || index + i === -1)  {
                continue 
            }
            found = found.concat(getAdjacents(list[index + i], result.index))
        }

        total += found.length === 2 ? found[0] * found[1] : 0
        lineCopy = lineCopy.replace(result[0], getRidOf(result[0]))
    }
    
    return total
}

function calculateRatioSum(list) {
    return list.reduce((acc, line, index) => acc + findGearValues(line, index, list), initial)
}

module.exports = {
    calculateRatioSum
}