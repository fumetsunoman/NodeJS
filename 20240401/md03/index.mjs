import express from "express";
import {resolve} from "path";
const __dirname = import.meta.dirname;


const app = express();
app.use(express.static(resolve(__dirname,"public")));
app.use('/bootstrap', express.static(resolve(__dirname, 'node_modules/bootstrap/dist')));
app.use('/fontawesome', express.static(resolve(__dirname, 'node_modules/@fortawesome/fontawesome-free')));
app.use('/jquery', express.static(resolve(__dirname, 'node_modules/jquery/dist')));

app.get("/",(req,res)=>{
res.send("網站首頁")
})


app.listen(3000, () => {
	console.log("server is running at http://localhost:3000");
})


