import express from "express";
import { resolve, extname} from "path";
import {v4 as uuidv4} from "uuid";
import multer from "multer";
const __dirname = import.meta.dirname;


const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null, resolve(__dirname, "public", "images"));
    }, //存檔的位置
    filename: function(req, file, cb){
        const newFileName = uuidv4() + extname(file.originalname);  
        cb(null, newFileName);
    }
});

const upload = multer({storage});

const app = express();

app.set("view engine", "ejs");
app.set("views", resolve(__dirname, "views"));

app.get("/", (req, res) => {
    res.send("網站首頁")
})

app.get("/form1", (req, res) => {
    res.render("form1");
});

app.post("/upload1", upload.single("myFile") ,(req, res) => {
    res.json({body: req.body, file: req.file});
});

app.listen(3000, () => {
    console.log("running at http://localhost:3000");
})