//沒跟上
import http from 'http';
import {readFileSync} from "fs";
import {resolve} from "path";


const server  = http.createServer((request,response)=>{
	  const {method ,url} = request;
		const {pathname} = new URL(url,"http://localhost");
		const htmlContent = readFileSync(resolve(import.meta.dirname,"test01.html"))
		response.setHeader("content-type" , "text/html;charset=utf-8")
		response.end(htmlContent)
});

server.listen(9000,()=>{
	console.log("server is running at http://localhost:9000")
})
