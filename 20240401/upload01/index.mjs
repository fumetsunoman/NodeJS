import express from "express";
import {resolve} from "path";
import multer from "multer";
const __dirname = import.meta.dirname;

const urlencoded = express.urlencoded({extended: false}); //解析不了enctype="multipart/form-data"，上傳的檔案會變成空物件，會由multer模組去解析，另外由於"multer"本身就是去處理表單的，所以可以改用這個去解析表單"body"內的資料
const upload = multer({dest: resolve(__dirname, "public")}); //

const app = express();

app.set("view engine", "ejs");
app.set("views", resolve(__dirname, "views"));

app.get("/", (req, res) => {
    res.send("網站首頁")
})

app.get("/form1", (req, res) => {
    res.render("form1")
})

app.post("/upload1", upload.single("myFile"), (req, res) => { //upload.single=>上傳一個檔案，檔案名稱(自訂義=>"myFile")
    res.json({body: req.body, file: req.file});

    // console.log(req.body);
    // res.send("進入上傳流程")
});

app.listen(3000, () => {
    console.log("running at http://localhost:3000");
})