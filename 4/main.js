const { readFile } = require('../resources/file-reader')
const { getScratchCards } = require('./src/scratch-cards')
const { getPoints } = require('./src/scratch-points')
const { getTotalScratchCards } = require('./src/more-scratch-cards')
const file = 'input.txt'

function problem1(scratchCards) {
    return getPoints(scratchCards)
}

function problem2(scratchCards) {
    return getTotalScratchCards(scratchCards)
}

function main() {
    const list = readFile(file)
    const scratchCards = getScratchCards(list)
    console.log('pt1: ', problem1(scratchCards))
    console.log('pt2: ', problem2(scratchCards))
}  

main()