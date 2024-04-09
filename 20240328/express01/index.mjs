import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("hello express! 你好主機");
})

app.get("/login", (req, res) => {
  res.send(`<!DOCTYPE html>
  <html lang="zh-hant-TW">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
  </head>
  <body>
    <form action="/login" method="post">
      <button type="submit">送出</button>
    </form>
  </body>
  </html>`);
})

app.get("/reg", (req, res) => {
  res.send("註冊頁面");
})

app.all("/test", (req, res) => {
  res.send("符合所有的方法");
})

app.all("*",(req,res)=>{
  res.send("<h1>404 - NOT FOUND</h1>");

})

app.listen(3000, () => {
  console.log("server is running at http://localhost:3000");
})





