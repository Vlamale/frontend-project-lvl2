const path = require('path');
const fs = require('fs');

const readFile = (filePath) => {
    return JSON.parse(fs.readFileSync(path.resolve(filePath)))
}

module.exports = {
    readFile
}