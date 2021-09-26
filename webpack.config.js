import path from "path"

// babel 은 아직 적용 안함 

export default {
    mode: 'production',
    entry: path.resolve('src', 'index.js'),
    output: {
        path: path.resolve('dist','js'),
        filename: 'main.bundle.js'
    },
}
