// import path from "path"
const path = require("path")
// babel 은 아직 적용 안함 

module.exports = {
    mode: 'production',
    entry: path.resolve('src', 'index.js'),
    output: {
        path: path.resolve('dist','js'),
        filename: 'main.bundle.js'
    },
}
