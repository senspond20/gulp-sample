// import express from "express";
// import path from "path"

const express = require("express");
const fs = require("fs");
const path = require("path")
const hbs = require('express-handlebars');
// const __dirname = path.resolve();

const app = express();
const PORT = 3001;
app.engine('hbs', hbs({
    extname: 'hbs',
    defaultLayout: 'main',
    layoutsDir: 'src/template/layout',
}));
app.set('view engine', 'hbs');

app.use("/", express.static('dist', { root: __dirname }));
const viewPath = path.resolve('src','template','pages');
app.get("/settings", (req,res)=>{
    res.send("ggg")
    res.end();
})
app.get("/users", (req,res)=>{
    res.render(path.join(viewPath,'users.hbs'),{
        users: [
            { name: "홍길동1", id: "aaa1", email: "aaa1@gmail.com" },
            { name: "홍길동2", id: "aaa2", email: "aaa2@gmail.com" },
            { name: "홍길동3", id: "aaa3", email: "aaa3@gmail.com" },
            { name: "홍길동4", id: "aaa4", email: "aaa4@gmail.com" },
            { name: "홍길동5", id: "aaa5", email: "aaa5@gmail.com" }
        ]
    })
})

app.get("/", (req,res)=>{
    res.sendFile('dist/index.html', { root: __dirname });
});

app.listen(PORT, ()=>{
    console.log(`http://127.0.0.1:${PORT}`);
})