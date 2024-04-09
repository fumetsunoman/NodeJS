import express from "express";
import{resolve} from "path";
import singers from "./singers.js";

console.log(singers);

const __dirname = import.meta.dirname;
const app = express();


app.get("/",(req,res)=>{
res.send("網站首頁")
})

app.get("/res1",(req,res) =>{
	// res.status(500);
	// res.set("server","ben's server");
	// res.send("你好,規則1");
	res.status(500)
	.set("server","ben's server")
	.send("你好,規則1");
})

app.get("/netflix",(req,res) => {
	res.redirect("https://www.netflix.com/tw")
});



app.get("/download",(req,res) => {
	res.download(resolve(__dirname,"aa.txt"));
});

app.get("/test",(req,res) => {
	res.sendFile(resolve(__dirname,"test.html"));
});

app.get("/json",(req,res) =>{
	res.json(singers);
})

// app.get("/test",(req,res) => {
// 	res.sendFile(resolve(__dirname,"test.html"));

// });


app.listen(3000, () => {
	console.log("server is running at http://localhost:3000");
})