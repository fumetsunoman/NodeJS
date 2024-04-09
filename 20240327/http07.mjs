//沒跟上

import http from 'http';

const server  = http.createServer((request,response)=>{
	  const {method ,url} = request;
		const {pathname} = new URL(url,"http://localhost");
		response.setHeader("content-type" , "text/html;charset=utf-8")
		if(method === "GET" & pathname === "/login"){
			response.end("你好,登入頁");
		}else if(method ==="GET" && pathname === "/reg"){
			response.end("你好,註冊頁");
		}else if (method === "GET" && pathname === "/"){
			response.end("你好,主頁")
		}else{
			response.statusCode=404;
			// response.statusMessage = "no page";
			response.setHeader("server","Ben's Server")
			response.write("<h1>404</h1>")
			response.end("找不到");
		}
});

server.listen(9000,()=>{
	console.log("server is running at http://localhost:9000")
})
