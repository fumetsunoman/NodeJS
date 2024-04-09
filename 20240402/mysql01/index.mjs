import express from "express";
import connection from "./db.mjs";

const app = express();

app.get("/", (req, res) => {
  res.send("網站首頁");
});

app.get("/dd/:id", async (req, res) => {
  let sql = "SELECT * FROM `sort` WHERE `id` = ?";
  let dataAry = [req.params.id];
  let data = await getData(sql, dataAry).then(results => {
    if(results.length === 0){
      return undefined;
    }else{
      const {isvalid, ...others} = results[0];
      return others;
    }
  }).catch(error => undefined);
  console.log(data);
  if(data){
    res.json(data)
  }else{
    res.json({error: "找不到資料"})
  }
});

app.get("/d/:id", (req, res) => {
  let id = req.params.id;  //取得變數 :id 參數值
  connection.execute(
    "SELECT * FROM `sort` WHERE `id` = ?", // 將參數值 id 帶入 抓取 mysql 資料
    [id],
    (error, results) => {
      if (error) {
        res.json({ error }); //回應的是json，表示回覆的是物件格式 ;因為error不是物件格式所以才需要再外面加{}，是的話其實不用加
        return false;
      }
      res.json({results});
      // let data = results.map(item => {
      //     return {id: item.id, name: item.name}
      // }) => 篩選results內的結果;將不必要的資料篩選出來，不要顯示在前端頁面上
      const { isvalid, ...data } = results[0];
      res.json({ results: data });
    }
  );
});


app.listen(3000, () => {
  console.log("running at http://localhost:3000");
});

function getData(sql, dataAry) {
  return new Promise((resolve, reject) => {
    connection.execute(
      sql,
      dataAry,
      (error, results) => {
        if (error) {
          return reject(error);
        }
        return resolve(results);
        // if(results.length !== 0){
        //   const { isvalid, ...data } = results[0];
        //   return resolve(data);
        // }else{
        //   return resolve(undefined);
        // }
      }
    );
  });
}

