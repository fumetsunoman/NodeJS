import http from "http";
import {readFileSync, readFile} from "fs";
import {resolve} from "path";
const __dirname = import.meta.dirname;

// 11 與12 合在一起了
const server = http.createServer((request, response) => {
  const {url} = request;
  let {pathname} =  new URL(url, "http://localhost");
  if(pathname === "/"){
    pathname = "/index_.html"
  }

  let root = resolve(__dirname, "pages");
  // root = resolve(__dirname, "public");
  
  let filePath = resolve(root,  pathname.slice(1));
  
  readFile(filePath, (error, data) => {
    if(error){
      console.log(error);
      response.statusCode = 500;
      response.setHeader("content-type", "text/html;charset=utf-8");
      response.end("<h1>500 - 文件讀取失敗</h1>");
      return false;
    }
    response.end(data);
  });
  
  // console.log(filePath);

  // if(pathname === "/test02.html"){
  //   const content = readFileSync(filePath);
  //   response.end(content);
  // }else if(pathname === "/css/test02.css"){
  //   const content = readFileSync(filePath);
  //   response.end(content);
  // }else if(pathname === "/js/test02.js"){
  //   const content = readFileSync(filePath);
  //   response.end(content);
  // }else if(pathname === "/images/bg.jpg"){
  //   const content = readFileSync(filePath);
  //   response.end(content);
  // }else{
  //   response.statusCode = 404;
  //   response.setHeader("content-type", "text/html;charset=utf-8");
  //   response.end("<h1>404 - 找不到</h1>");
  // }
});

server.listen(9000, () => {
  console.log("server is running at http://localhost:9000");
})