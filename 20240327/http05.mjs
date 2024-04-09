import http from 'http';

const server  = http.createServer((request,response)=>{
	  const url = new URL(request.url ,"http://localhost");
		console.log(url.pathname);
		console.log(url.searchParams.get("name"));
		console.log(url.searchParams.get("pwd"));
		response.setHeader("content-type" , "text/html;charset=utf-8")
	  response.end("你好主機");
});

server.listen(9000,()=>{
	console.log("server is running at http://localhost:9000")
})

