function validInputs(red, green, blue, game) {
    if(typeof red !== 'number' || typeof green !== 'number' || typeof blue !== 'number') {
        throw new Error('RGB need to be numbers')
    } 
    if(typeof game !== 'object' && !('length' in game)) { 
        throw new Error('Game needs to be a list')
    }
}

function validRound(red, green, blue, round) {
    return round.red > red || round.green > green || round.blue > blue
}

/**
 * Checks against provided rgb values whether a game was valid
 * @param {number} red 
 * @param {number} green 
 * @param {number} blue 
 * @param {Object[]} game 
 * @returns {boolean}
 */
function validGame(red, green, blue, game) {
    validInputs(red, green, blue, game)
    return !game.some(round => validRound(red, green, blue, round))
}

module.exports = {
    validGame
}