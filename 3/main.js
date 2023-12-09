const { readFile } = require('../resources/file-reader')
const { calculateSum } = require('./src/symbol-sum')
const { calculateRatioSum } = require('./src/gear-ratio')

const file = 'input.txt'

function problem1(list) {
    return calculateSum(list)
}

function problem2(list) {
    return calculateRatioSum(list)
}

function main() {
    const list = readFile(file)
    console.log('pt1: ', problem1(list))
    console.log('pt2: ', problem2(list))
}

main()