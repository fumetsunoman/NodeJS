import http from 'http';
import {readFileSync} from "fs";
import {resolve} from "path";


const server  = http.createServer((request,response)=>{
	  const {url} = request;
		const {pathname} = new URL(url,"http://localhost");
		// const htmlContent = readFileSync(resolve(import.meta.dirname,"test02.html"))
		// response.setHeader("content-type" , "text/html;charset=utf-8")
		// response.end(htmlContent);
		// / -> test02.html
		// /test02.css -> test02.css
		// /test02.js -> test02.js
		if(pathname ==="/"){
			const htmlContent = readFileSync(resolve(import.meta.dirname,"test02.html"));
			response.end(htmlContent);
		}else if (pathname === "/test02.css"){
			const cssContent = readFileSync(resolve(import.meta.dirname,"test02.css"));
			response.end(cssContent);
		}else if (pathname ==="/test02.js"){
			const jsContent =readFileSync(resolve(import.meta.dirname,"test02.js"))
			response.end(jsContent)
		}else{
			response.statusCode =404;
			response.setHeader("content-type","text/html;charset=utf-8")
			response.end("<h1>404 - 找不到</h1>");
		}
});

server.listen(9000,()=>{
	console.log("server is running at http://localhost:9000")
})
