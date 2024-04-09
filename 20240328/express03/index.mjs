import express from "express";
const app = express();

app.get("/",(req,res)=>{
	res.send("網站首頁");
	// console.log(req.method);
	// console.log(req.url);
	// console.log(req.httpVersion);
	// console.log(req.headers);
	const {method ,url ,httpVersion ,headers} = req;
	console.log(headers);
	//以上是http 模組本來就有的，以下是express新的屬性和方法
	const {path , query , ip} = req;
	console.log(path);  //  /
	console.log(query);  // { name: 'Ben', 'pwd ': ' 12345' } url 上面參數 http://localhost:3000/?name=Ben&pwd%20=%2012345
	console.log(req.get("user-agent")); //可以知道使用的瀏覽器
	console.log(req.get("cookie"));
})

app.listen(3000,()=>{
	console.log("server is at http://localhost:3000")
})
