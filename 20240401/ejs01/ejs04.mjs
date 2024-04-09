import express from "express";
import ejs from "ejs";
import {readFile} from "fs/promises";
import {resolve} from "path";
const __dirname = import.meta.dirname;

let user;

const bp = express.urlencoded({extended: false}); //解析表單"post" body request資料


const app = express(); //啟動"express模組" 替代 "http模組"

app.use("/bs", express.static(resolve(__dirname, "node_modules/bootstrap/dist")))  

app.set("view engine", "ejs"); //設定"ejs" 樣板引擎
app.set("views", resolve(__dirname, "views")); //執行樣板引擎的位置，並渲染到畫面上

app.get("/", (req, res) => {
    res.send("網站首頁")
})

app.get("/test1", (req, res) => { //當吃到 資料夾 views 底下test1.ejs檔案時，將test1.ejs檔案渲染到畫面上
    const name = "Ken";
    const str = "Hello !";
    res.render("test1", {name,str}); 
})

app.get("/test2", (req, res) => {
    const blackpink = ["Jennie", "Jisoo", "Lisa", "Rosé"];
    res.render("test2", {blackpink});
})


app.get("/test3", (req, res) => {
    // user = {
    //     name: "Annette Richardson",
    //     img: "https://randomuser.me/api/portraits/women/60.jpg"
    // };
    res.render("test3", {user});
})

app.post("/login", bp, (req, res) => {
    const {account, password} = req.body;
    if(account === "ben" && password === "a12345"){
        user = {
            name: "Annette Richardson",
            img: "https://randomuser.me/api/portraits/women/60.jpg"
        };
        res.redirect("/test3");
    }else{
        res.redirect("/test3");
    }
});

app.get("/logout", (req, res) => {
    user = undefined;
    res.redirect("/test3");
});

app.listen(3000, () => {
    console.log("running at http://localhost:3000");
})