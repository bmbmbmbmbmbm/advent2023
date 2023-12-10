const { readFile } = require('../resources/file-reader')
const { convertToObject } = require('./src/input-to-object')
const { getMinLocation } = require('./src/seed-to-location')
const file = 'input.txt'

function problem1(input) {
    return getMinLocation(input)
}

function main() {
    const list = readFile(file)
    const input = convertToObject(list)
    console.log('pt1: ', problem1(input))
}

main()