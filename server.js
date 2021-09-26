import express from "express";
import path from "path"
const __dirname = path.resolve();

const app = express();
const PORT = 3001;

app.use("/", express.static('dist', { root: __dirname }));
app.get("/*", (req,res)=>{
    res.sendFile('dist/index.html', { root: __dirname });
});

app.listen(PORT, ()=>{
    console.log(`http://127.0.0.1:${PORT}`);
})