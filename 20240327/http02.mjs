import http from "http";

const server = http.createServer((request,response)=>{
	// console.log(request.httpVersion)= request;
	const {method,url,httpVersion,headers} = request;
	// 
	// console.log(url);
	// console.log(httpVersion);
	console.log(headers);
	response.setHeader("content-type" , "text/html;charset=utf-8")
	response.end("你好主機")
});

server.listen(9000,()=>{
	console.log("server is running http://localhost:9000");
})

