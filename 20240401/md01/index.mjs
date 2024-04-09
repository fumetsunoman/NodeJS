import express from "express";
import moment from "moment"; //引入時間格式
import {appendFile} from "fs/promises"; //用promise方式寫，避免用sync的方式造成卡頓
import {resolve} from "path";
const __dirname = import.meta.dirname;

const app = express();

const writeToLog = (req,res,next) => {
    const {ip, path} = req; //ip:知道哪個網頁訪問  ; path不像req.url 後面不帶參數
    let time = moment().format("YYYY-MM-DDTHH:mm:ss") //取得當下時間  ,中間加上T是不希望時間有空格
    // console.log(time);
    console.log(`${time} ${ip} ${path}`);
    appendFile(resolve(__dirname, "access.log"), `${time} ${ip} ${path}\r\n`);
    req.ben = "你好";
    next(); //執行完後跳出去
}

const checkLogin = (req,res,next)=>{
    if(req.query.code==="464"){
        next();
    }else{
        res.send("請先登入")
    }
}

app.use(writeToLog);

app.get("/", (req, res,next) => {
    res.send("網站首頁"+req.ben)
})

app.get("/login", (req, res,next) => {
    // res.send("網站首頁" + req.ben)
    res.send("登入頁")
});

app.get("/reg", (req, res) => {
    res.send("註冊頁")
});

app.get("/admin", checkLogin,(req, res) => {
    res.send("後台")
});

app.get("/setting",checkLogin, (req, res) => {

    res.send("設定頁面")
});

app.all("*", (req, res) => {
    res.status(404).send("<h1>404 Not Found</h1>")
});

app.listen(3000, () => {
    console.log("running at http://localhost:3000");
})