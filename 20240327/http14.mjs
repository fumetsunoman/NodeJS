import http from "http";
// import {readFileSync, readFile} from "fs";
import { readFile } from "fs/promises";
import { resolve ,extname} from "path";
const __dirname = import.meta.dirname;

const mines = {
	html: 'text/html',
	css: 'text/css',
	js: 'text/javascript',
	png: 'image/png',
	jpg: 'image/jpeg',
	gif: 'image/gif',
	mp3: 'audio/mpeg',
	json: 'application/json'
};
// mp4: 'video/mp4',
// 把這個媒體格式從mines 中去除,瀏覽器將認不得媒體格式，進而會自動下載
// 正式的主機,這個要加進去 mines 物件中


//mine.jpg
//mines["jpg"]
//mines[extname().slice(1)]




// mine.jpg 
// mine["jpg"]

const server = http.createServer(async (request, response) => {
	const { url } = request;
	// console.log(url);
	let { pathname } = new URL(url, "http://localhost");
	if (pathname === "/") {
		pathname = "/index_.html"
	}

	let root = resolve(__dirname, "pages");
	// root = resolve(__dirname, "public");

	let filePath = resolve(root, pathname.slice(1));
	let ext = extname(filePath).slice(1);
	let type = mines[ext];

	if(type){
		if(ext==="html"){
			response.setHeader("content-type",type+";charset=utf-8");
		}else{
			response.setHeader("content-type",type);
		}
	}else{
	  response.setHeader("content-type","application/octet-stream")
	}
	let errorCode;
	const data = await readFile(filePath)
		.then(result => result)
		.catch(error => {
			console.log(error);
			errorCode = "ENOENT";
			return undefined;
		});
	if (!data) {
		if(errorCode ==="ENOENT"){  //捕獲錯誤避免伺服器整個當掉
			response.statusCode = 404; 
			response.setHeader("content-type","text/html;charset=utf-8")
			response.end("<h1>404 - 檔案找不到</h1>")
		}else{
			response.statusCode = 500;
			response.setHeader("content-type", "text/html;charset=utf-8");
			response.end("<h1>500 - 文件讀取失敗</h1>");
		}
		return false;
	}
	response.end(data);
});

server.listen(9000, () => {
	console.log("server is running at http://localhost:9000");
})
