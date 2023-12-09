const { readFile } = require('../resources/file-reader')
const { gameAsObject } = require('./src/game-list')
const { validGame } = require('./src/valid-game')
const { calculatePower } = require('./src/cubes-needed')

const file = 'input.txt'

const red = 12, green = 13, blue = 14
const initial = 0;
const offset = 1;

function problem1(games) {
    return games.reduce((acc, game, index) =>
        validGame(red, green, blue, game) ?
            acc + index + offset : acc,
        initial
    )
}

function problem2(games) {
    return games.reduce((acc, game) => acc + calculatePower(game), initial)
}

function main() {
    const list = readFile(file)
    const games = gameAsObject(list)
    console.log('pt1: ', problem1(games))
    console.log('pt2: ', problem2(games))
}

main()