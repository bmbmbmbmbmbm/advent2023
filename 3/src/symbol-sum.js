const symbolRegex = /[^1-9.]/

function calculateLine(line, index) {

    if(symbolRegex.test(line)) {
        return 0;
    }

    const symbolIndex = symbolRegex.exec(line).index
    const numberRegex = /\d+/
    let value = 0;
    for(let i = index - 1; i < index + 2; ++i) {
        if(!list[i]) continue
        if(numberRegex.test(list[i])) {
            const value = numberRegex.exec(list[i])[0]
            
        }
    }
    return value
}

function findSymbolLines(list) {
    const symbolLines = [];
    list.forEach((line, index) => { 
        if(symbolRegex.test(line)) {
            symbolLines.push({line, index})
        } 
    })
    return symbolLines;
}

function calculateSum(list) {
    const symbolLines = findSymbolLines(list)
    symbolLines.forEach(line => {
        
    })  
}

module.exports = {
    calculateSum
}