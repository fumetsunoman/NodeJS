import express from "express";
import cors from "cors"; //導入跨領域模組

const whiteList = ["http://localhost:5500" , "http://127.0.0.1:5500"] //允許的名單 要和 傳遞進來的資料'origin'原始資訊去做比對，符合的話則允許傳遞資料
const corsOptions = {
	credential:true,  //類似前端使用網路請求發送一些訊息到跨領域伺服器包含用戶登入的帳號密碼，來給服務器驗證身分
	origin:function(origin,callback){ 
		if(!origin || whiteList.includes(origin)){ //origin:通常包含網域名稱，協定，port之類的訊息來紀載允許的網域名單去做比對
			callback(null,true); //意思是當沒有錯誤的時候， 'TRUE' 允許傳遞數據
		}else{
			callback(new Error("不允許傳遞資料")) //錯誤的話，則是不允許傳遞資料

		}

	}
}

const app = express();
app.use(cors(corsOptions));

app.get("/",(req,res)=>{
res.send("網站首頁") //回應到網頁瀏覽器前面"網站首頁"
})

app.post("/login",(req,res) => {
	res.json({result:"歡迎光臨"})
});

app.listen(3000, () => {
	console.log("server is running at http://localhost:3000");
})