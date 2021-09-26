import path from "path"
const __dirname = path.resolve();


export default {
    mode: 'production',
    entry: path.join(__dirname, 'src', 'index.js'),
    output: {
        path: path.join(__dirname, 'dist','js'),
        filename: 'main.bundle.js'
    },
}
