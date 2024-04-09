import express from "express";
const app = express();

app.get("/", (req, res) => {
  res.send("網站首頁")
})
// http://localhost:3000/p/CvZP-PIguWG/
// http://localhost:3000/p/CvRz0e3Awmi/

app.get("/p/:id", (req, res) => { //先將參數寫在程式碼內，最後在url中寫下要帶入的參數值
  // res.send(`IG:${req.params.id}`); //用來呈現get url輸入所帶的參數值
  let content = "";
  if(req.params.id === "CvZP-PIguWG"){
    content = "《浅草で一番おすすめしたい抹茶クレープ(The most recommended matcha crepe in Asakusa)》"
  }else if(req.params.id === "CvRz0e3Awmi"){
    content = "《ぷるんぷるんすぎるマシュマロアイス(Too plump marshmallow ice cream in Japan)》"
  }
  res.send(content)
})

app.get("/users/:userID", (req, res) => { 
  const {userID} = req.params;
  res.send(`<h1>${userID} 的首頁</h1>`);
})

app.get("/books/:categoryID/:bookID", (req, res) => { //寫入兩個參數 
  const {categoryID, bookID} = req.params;
  res.send(`分類是: ${categoryID}, 書本的編號是: ${bookID}`);
})

app.get("/user/:name?", (req, res) => { //加上"?"表示該餐數可能有可能沒有，剛剛前面所做的都是一定要填寫，不能會跳出"系統錯誤" Cannot GET/users 之類的頁面內容
  if(req.params.name){
    res.send(`你好, ${req.params.name}`);
  }else{
    res.send("你好, 訪客");
  }
})

app.get("/use/:id([0-9]+)", (req, res) => { //[0-9]+ 只能輸入數字且不只一個字
  res.send(`user id is ${req.params.id}`);
});

app.get("/files/*", (req, res) => {  
  let filePath = req.params[0]; //這是可以寫得使用方式所以才可以用
  res.send(`file path: ${filePath}`);
});


app.listen(3000, () => {
  console.log("running at http://localhost:3000");
})


