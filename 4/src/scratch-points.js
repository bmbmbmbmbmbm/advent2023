function calculateCard(scratchCard) {
    const number = 2
    const initial = -1
    const power = scratchCard.winners.reduce((acc, winner) => scratchCard.numbers.includes(winner) ? acc + 1 : acc, initial)
    if(power === initial) {
        return 0
    }
    return number ** power
}

function getPoints(scratchCards) {
    const initial = 0
    return scratchCards.reduce((acc, scratchCard) => acc + calculateCard(scratchCard), initial)
}

module.exports = {
    getPoints
}