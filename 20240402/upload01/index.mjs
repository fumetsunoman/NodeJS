import express from "express";
import { resolve, extname } from "path"; //extname 取得副檔名
import multer from "multer";
import { rename } from "fs/promises"; //搬移檔名
import { v4 as uuidv4 } from "uuid";
const __dirname = import.meta.dirname;

const urlencoded = express.urlencoded({ extended: false }); //body-parser 也是路由的中介點
const upload = multer({ dest: resolve(__dirname, "public") }); //路由的中介點(Middleware)

//upload => none:處理一般表單 array:上傳多個檔案  single:一個檔案  fields: 拿一個欄位
// file會放在 req.file裡面 一般檔案名稱則是 req.body裡面

const app = express();

app.set("view engine", "ejs");
app.set("views", resolve(__dirname, "views"));

app.get("/", (req, res) => {
    res.send("網站首頁");
});

app.get("/form1", (req, res) => {
    res.render("form1"); 
});

app.get("/form2", (req, res) => {
    res.render("form2");  //因為這行程式行的關係 => app.set("views", resolve(__dirname, "views"));
});

app.get("/form3", (req, res) => {
    res.render("form3");
});

app.post("/upload3", upload.array("myFile[]", 3), async (req, res) => {
    req.body.files = [];
    for (let file of req.files) {
        const ext = extname(file.originalname); //取得副檔名
        const newFileName = file.filename + ext;  //uuid 加上副檔名
        await rename(file.path, resolve(__dirname, "public", "images", newFileName));
        req.body.files.push(newFileName);
    }
    res.json({ body: req.body });
})

app.post("/upload2", upload.array("myFile", 3),  async (req, res) => { //upload.array 多檔上傳
    req.body.files = []; //將多個檔案放在一個陣列裡 面;並且將檔案放在req.body而不是放在.files裡面用意是比較方便查看
    // req.files.forEach((file) => {
    // forEach 不會等待非同步執行的結果回傳, 所以改成 for...of
    // });
    for (let file of req.files) {
        const ext = extname(file.originalname);
        const newFileName = file.filename + ext;
        await rename(file.path, resolve(__dirname, "public", "images", newFileName)); //搬移檔案的位置
        req.body.files.push(newFileName);
    }
    res.json({ body: req.body });
});

app.post("/upload1", upload.single("myFile"), async (req, res) => {
    const ext = extname(req.file.originalname);
    // 1. 使用multer的暫存檔名當做新檔名
    // const newFileName = req.file.filename + ext;
    // 2. 使用 timestamp 當做新檔名
    // const timestamp = Date.now(); =>nodeJs的時間戳記 ; 
    // const newFileName = timestamp + ext;
    // 3. 使用uuidv4當做新檔名
    // javascript的時間戳記是 new Date().getTime()
    const newFileName = uuidv4() + ext; //(主檔名+副檔名)
    await rename(
        req.file.path, // 原檔案的位置
        resolve(__dirname, "public", "images", newFileName) //搬移到新的位置(且由於newFileName的關係每個檔案的名稱都不同)
    );
    req.body.fileName = newFileName;
    res.json({ body: req.body });
    // console.log(req.body);
    // res.send("進入上傳流程")
});

app.listen(3000, () => {
    console.log("running at http://localhost:3000");
});


