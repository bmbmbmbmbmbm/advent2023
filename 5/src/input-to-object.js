const seedsString = 'seeds: '

const mapping = (to, from, range) => ({
    to: Number.parseInt(to),
    from: Number.parseInt(from),
    range: Number.parseInt(range)   
})

function getValues(line) {
    return line.split(' ').filter(value => /\S/.test(value))
}

function getSeeds(line) {
    const valuesString = line.replace(seedsString, '')
    return getValues(valuesString).map(value => Number.parseInt(value))
}

function getKey(line) {
    const suffix = ' map:'
    return line.replace(suffix, '')
}

function convertToObject(list) {
    const lettersRegex = /[a-zA-Z]/

    const seeds = getSeeds(list[0])
    const mappings = {}

    const seedless = list.filter(line => !line.includes(seedsString))
    let key = ''

    seedless.forEach(line => {
        if (lettersRegex.test(line)) {
            key = getKey(line)
            mappings[key] = []
        } else {
            const values = getValues(line)
            mappings[key].push(mapping(
                values[0],
                values[1],
                values[2]
            ))
        }
    })
    return { seeds, mappings }
}

module.exports = {
    convertToObject
}