function inRange(value, mapping) {
    // has no range
    if(!mapping.range) {
        return value === mapping.from
    }
    return value >= mapping.from && value < mapping.from + mapping.range
}

function getNext(from, mapping) {
    if(inRange(from, mapping)) {
        const adjust = from - mapping.from
        const next = mapping.to + adjust
        return [next, true]
    }
    return [from, false]
}

function seedToLocation(seed, keys, mappings) {
    let current = seed
    keys.forEach(key => {
        mappings[key].find(mapping => {
            const [next, valid] = getNext(current, mapping)
            current = next
            return valid
        })
    })
    return current
}

function getMinLocation(input) {
    const keys = Object.keys(input.mappings)
    const values = input.seeds.map(seed => seedToLocation(seed, keys, input.mappings))
    return Math.min(...values)
}

module.exports = {
    getMinLocation
}