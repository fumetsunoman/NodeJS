import express from "express";
import moment from "moment";
import connection from "../db2.mjs";

const router = express.Router();


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
  console.log(sort);
  res.render("index", {date,sort})
});

router.post("/", (req, res) => {
  res.send("新增指定日期的消費");
});

router.put("/", (req, res) => {
  res.send("修改指定日期的消費");
});

router.delete("/", (req, res) => {
  res.send("刪除指定日期的消費");
});


export default router;


