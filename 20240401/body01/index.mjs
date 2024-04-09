import express from "express";
import {resolve} from "path";
import bodyParser from "body-parser";
const __dirname = import.meta.dirname;

// const jsonParser = bodyParser.json();
// const urlencodedParser = bodyParser.urlencoded({ extended: false });

const jsonParser = express.json();
const urlencodedParser = express.urlencoded({extended:false});

const app = express();


app.get("/", (req, res) => {
    res.send("網站首頁")
})

app.get("/login", (req, res) => {
    res.sendFile(resolve(__dirname, "form.html")) //吃到的是靜態檔案
})

app.post("/login",urlencodedParser, (req, res) => {
    console.log(req.body);
    res.send("進入登入的流程")
})

app.listen(3000, () => {
    console.log("running at http://localhost:3000");
})