import http from "http";

const server = http.createServer((request,response)=>{
	// response.write();
	// response.write();
	// response.write();
	response.setHeader("content-type","text/html;charset=utf-8");
	response.end("你好伺服器!!");
});

server.listen(9000,() => {
	console.log("伺服器已啟動於 http://localhost:9000")
})

