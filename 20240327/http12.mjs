import http from "http";
// import {readFileSync, readFile} from "fs";
import { readFile } from "fs/promises";
import {resolve} from "path";
const __dirname = import.meta.dirname;

// 跟講義的 12 內容不同
const server = http.createServer(async (request, response) => {
  const {url} = request;
  let {pathname} =  new URL(url, "http://localhost");
  if(pathname === "/"){
    pathname = "/index_.html"
  }

  let root = resolve(__dirname, "pages");
  // root = resolve(__dirname, "public");
  
  let filePath = resolve(root,  pathname.slice(1));
  //將取到的值用"await"的方式取得並藉由
  const data = await readFile(filePath)
  // 利用 "then" "catch" 的方式取得 result 的值或除錯 但因為"await"已被await
  .then(result => result)
  .catch(error => undefined);
  if(!data){
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

