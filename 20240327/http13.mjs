import http from "http";
// import {readFileSync, readFile} from "fs";
import { readFile } from "fs/promises";
import { resolve ,extname} from "path";
const __dirname = import.meta.dirname;

const mimes = {
	html: 'text/html',
	css: 'text/css',
	js: 'text/javascript',
	png: 'image/png',
	jpg: 'image/jpeg',
	gif: 'image/gif',
	mp4: 'video/mp4',
	mp3: 'audio/mpeg',
	json: 'application/json'
};
// mp4: 'video/mp4',
// 把這個媒體格式從mimes 中去除,瀏覽器將認不得媒體格式，進而會自動下載
// 正式的主機,這個要加進去 mimes 物件中


//mine.jpg
//mimes["jpg"]
//mimes[extname().slice(1)] 去掉第一個小數點




// mine.jpg 
// mine["jpg"]

const server = http.createServer(async (request, response) => {
	const { url } = request;
	let { pathname } = new URL(url, "http://localhost"); //url 是相對路徑
	if (pathname === "/") {
		pathname = "/index_.html"
	}

	let root = resolve(__dirname, "pages");
	// root = resolve(__dirname, "public");

	let filePath = resolve(root, pathname.slice(1)); //取出完整路徑
	let ext = extname(filePath).slice(1);  //去除小數點;抓取副檔名
	let type = mimes[ext]; //取出mines物件屬性值

	if(type){
		if(ext==="html"){
			response.setHeader("content-type",type+";charset=utf-8"); //如果是字串的話用""+"的方式新增""utf-8"來處理字元
		}else{
			response.setHeader("content-type",type);
		}
	}else{
	  response.setHeader("content-type","application/octet-stream") //啟動下載
	}
	const data = await readFile(filePath)
		.then(result => result)
		.catch(error => undefined);
	if (!data) {
		response.statusCode = 500;
		response.setHeader("content-type", "text/html;charset=utf-8");
		response.end("<h1>500 - 文件讀取失敗</h1>");
		return false;
	}
	response.end(data);
});

server.listen(9000, () => {
	console.log("server is running at http://localhost:9000");
})

