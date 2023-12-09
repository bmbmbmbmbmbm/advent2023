const fs = require('fs')

function readFile(path) {
    const result = fs.readFileSync(path, 'utf-8')
    return result.split('\n').filter(value => /\S/.test(value));
}

module.exports = {
    readFile
}