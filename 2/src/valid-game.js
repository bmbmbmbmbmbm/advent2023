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

function validGame(red, green, blue, game) {
    validInputs(red, green, blue, game)
    return !game.some(round => validRound(red, green, blue, round))
}

module.exports = {
    validGame
}