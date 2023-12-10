const initial = 0

const CardMatchesOccurences = (scratchCard, matches, occurrences) => ({
    scratchCard,
    matches,
    occurrences
})

function getMatches(scratchCard) {
    return scratchCard.winners.reduce((acc, winner) => scratchCard.numbers.includes(winner) ? acc + 1 : acc, initial)
}

function getTotalScratchCards(scratchCards) {
    const ammendedScratchCards = scratchCards.map(scratchCard => CardMatchesOccurences(scratchCard, getMatches(scratchCard), 1))
    return ammendedScratchCards.reduce((acc, scratchCard, index) => {
        for(let i = index + 1; i < index + scratchCard.matches + 1; ++i) {
            if(i >= ammendedScratchCards.length) continue
            ammendedScratchCards[i].occurrences += 1 * scratchCard.occurrences
        }
        return acc + scratchCard.occurrences
    }, initial)
}

module.exports = {
    getTotalScratchCards
}