const { readFile } = require('./src/file-reader')
const { calculate } = require('./src/line-calculator')
const { parseLine } = require('./src/line-parser')

const file = 'input.txt'
const initial = 0;

function problem1(list) {
    const total = list.reduce((acc, line) => acc + calculate(line), initial)
    console.log('pt1: ', total)
}

function problem2(list) {
    const total = list.reduce((acc, line) => acc + parseLine(line), initial)
    console.log('pt2: ', total)
}

function main() {
    const list = readFile(file)
    problem1(list)
    problem2(list)
}

main()