/**
 * Calculates the power of a game
 * @param {object[]} game 
 * @returns {number}
 */
function calculatePower(game) {
    let red = 1, green = 1, blue = 1
    game.forEach(round => {
        red = round.red > red ? round.red : red
        green = round.green > green ? round.green : green
        blue = round.blue > blue ? round.blue : blue
    })
    return red * green * blue
}

module.exports = {
    calculatePower
}