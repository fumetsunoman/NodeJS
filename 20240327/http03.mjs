import http from 'http';

const server  = http.createServer((request,response)=>{

	//request只有post又get沒有因為post才會有送表單的問題
	let body = "";
	request.on("data",chunk =>{
		body += chunk;
	});
	request.on("end",chunk =>{
		body += chunk;
		console.log(body);
		response.setHeader("content-type" , "text/html;charset=utf-8")
	response.end("你好主機")
	})

});

server.listen(9000,()=>{
	console.log("server is running at http://localhost:9000")
})