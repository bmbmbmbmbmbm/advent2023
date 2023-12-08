const roundObject = (red, green, blue) => Object.freeze({
    red: red ?? 0,
    green: green ?? 0,
    blue: blue ?? 0
})

function getColourValue(colour, round) {
    if(!round.includes(colour)) return 0
    const regexColourValue = new RegExp(`\\d+ ${colour}`)
    const colourValue = regexColourValue.exec(round)[0]
    const regexValue = new RegExp(`\\d+`)
    const value = regexValue.exec(colourValue)[0]
    return Number.parseInt(value)
}

function getRoundObject(round) {
    const colours = Object.keys(roundObject())
    const values = colours.map(colour => getColourValue(colour, round))
    return roundObject.apply(this, values)
}

/**
 * Takes a string series of games and puts them into a list of games, each game 
 * is a lit of rounds, and a round is an object with red, green, blue number values
 * @param {String[]} list 
 * @returns {Object[]}
 */
function gameAsObject(list) {
    const games = list.map((game, index) => {
        const rounds = game.replace(`Game ${index + 1}: `, '').split('; ')
        return rounds.map(round => getRoundObject(round))
    })
    return games
}

module.exports = {
    gameAsObject
}