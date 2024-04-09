import express from "express";
import {resolve} from "path";
const __dirname = import.meta.dirname;

const app = express();
app.use(express.static(resolve(__dirname,"public"))); //靜態資源指定，比其他路由還要先使用


app.get("/", (req, res) => {
    res.send("網站首頁")
})

app.listen(3000, () => {
    console.log("running at http://localhost:3000");
})