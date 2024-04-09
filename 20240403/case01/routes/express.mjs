import express from "express";
import moment from "moment";
import multer from "multer";
import connection from "../db2.mjs";
const router = express.Router();
const upload = multer();
// 這裡的multer負責解析表單


router.get("/", (req, res) => { // /代表expe根目錄
  // res.send("導向今天日期")
  const date = moment().format("YYYY-MM-DD");
  res.redirect("/expe/d/" + date);
});

router.get("/d/:date", async (req, res) => {
  // res.send("讀取指定日期的所有消費: " + req.params.date);
  let date = req.params.date;
  const sort= await connection.execute("SELECT * from `sort`").then(datas =>{
    return datas[0].map(r => {  //r=>陣列裡的每個物件
      return {id: r.id, name:r.name};
    })
  });   
  const [data] = await connection.execute(
    "SELECT * FROM `expense` WHERE `date` = ?",
    [date]).catch(error => [[],undefined])
    res.render("index", {date,sort,data});
}); //"sort"=>抓取分類 ; "data"=>抓取特定日期的資料


// 新增
router.post("/", async (req, res) => { 
  let title = req.body.title; 
  let money = parseInt(req.body.money);
  let sort = parseInt(req.body.sort);
  let date = req.body.date;
  let result = await connection.execute(  //返回的是一個非同步'Promise'所以可以用.then .catch去接資料
    "INSERT INTO `expense` (`id`, `title`, `sort`, `money`, `date`) VALUES (NULL, ?, ?, ?, ?);", //NULL表示自己不需要為id新增值由數據庫自動生成
    [title,sort,money,date]).then(results=>{
      if(results[0].insertId > 0){
        return true;
      }else{
        return false;
      }
    }).catch(error => false)
  console.log(result);
  if(result){
    res.redirect("/expe/d/"+date);
  }else{
    res.send("新增錯誤，請洽管理人員")

  }
});

// 修改
router.put("/", upload.none() ,async (req, res) => {
  // res.send("修改指定日期的消費");
  // 修改預設值
  let title = req.body.title; 
  let money = parseInt(req.body.money);
  let sort = parseInt(req.body.sort);
  let date = req.body.date;
  let id =  parseInt(req.body.id);
  let result = await connection.execute(
    "UPDATE `expense` SET `title` = ?, `sort` = ?, `money` = ?, `date` = ? WHERE `expense`.`id` = ?;",
    [title,sort,money,date,id]
  )
  .then(results => {
    if(results[0].changedRows >= 1){ //changedRows 有改變的話會回傳"true"，沒有的話會回傳"false"
      return true ;
    }else{
      return false ;
    }
  }).catch(error => false);
  console.log(result); //{result: true} |  {result: false}
  // console.log(title,money,sort,date,id);
  res.json({result});
});

// 刪除
router.delete("/",upload.none(), async (req, res) => {
  let id = parseInt(req.body.id);
  let result  = await connection.execute(
    "DELETE FROM `expense` WHERE `expense`.`id` = ?",
    [id]
  ).then( results => {
    if(results[0].affectedRows >= 1){
      return true
  }else{
    return false;
  }
}).catch(error => false)
  console.log(result);
  res.json({result});
});

// upload.none() => 由 multer 套件模組去解析 ，但不需要上傳

export default router;


