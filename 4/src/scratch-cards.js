function handleLine(line, index) {
    const cardName = `Card ${index + 1}: `
    const divider = ' | '
    const empty = ' '

    const scratchCard = line.replace(cardName, '').split(divider)

    const winners = scratchCard[0].split(empty).filter(value => /\S/.test(value))
    const numbers = scratchCard[1].split(empty).filter(value => /\S/.test(value))
    
    return { winners, numbers }
}

function getScratchCards(list) {
    return list.map((line, index) => handleLine(line, index))
}

module.exports = {
    getScratchCards
}