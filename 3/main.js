const { readFile } = require('../resources/file-reader')
const { calculateSum } = require('./src/symbol-sum')

const file = 'input.txt'

function problem1(list) {
    return calculateSum(list)
}

function main() {
    const list = readFile(file)
    console.log('pt1: ', problem1(list))
}

main()