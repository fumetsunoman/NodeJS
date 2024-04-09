import express from "express";
import cors from "cors"; //導入跨領域模組
import multer from "multer";
import session from "express-session";

const sessionOptions = {
	secret : "benbenben",
	resave:false, //數據變動的時候才會回存
	saveUninitialized:false, //客戶如果沒有登入的話，該項紀錄不會被儲存
  cookie:{
		maxAge:120000
	}
}


// users模擬資料庫 ， 藉由送表單資料的"account" "password" 去做比對
const users = {
	"ben":{
		account:"ben",
		password:"a123456",
		img:"https://randomuser.me/api/portraits/men/41.jpg"
	},
	"mary" :{
		account:"mary",
		password:"a12345",
		img:"https://randomuser.me/api/portraits/women/86.jpg"

	}
}

const upload = multer(); //為了解析表單資料



const whiteList = ["http://localhost:5500" , "http://127.0.0.1:5500"] //允許的名單 要和 傳遞進來的資料'origin'原始資訊去做比對，符合的話則允許傳遞資料
const corsOptions = {
	credentials:true,  //類似前端使用網路請求發送一些訊息到跨領域伺服器包含用戶登入的帳號密碼，來給服務器驗證身分
	origin:function(origin,callback){ 
		if(!origin || whiteList.includes(origin)){ //origin:通常包含網域名稱，協定，port之類的訊息來紀載允許的網域名單去做比對
			callback(null,true); //意思是當沒有錯誤的時候， 'TRUE' 允許傳遞數據
		}else{
			callback(new Error("不允許傳遞資料")) //錯誤的話，則是不允許傳遞資料

		}

	}
}

const app = express();
app.use(express.json()); //解析傳送json格式的資料 =>index3.html
app.use(express.urlencoded({extended:false}));
app.use(cors(corsOptions)); //處理跨領域的問題
app.use(session(sessionOptions))


app.get("/",(req,res)=>{
res.send("網站首頁") //回應到網頁瀏覽器前面"網站首頁"
})


app.post("/login",upload.none(),(req,res) => {
	//account 和 password 是抓取下來的變數
	const {account,password} = req.body;
	console.log(users[account])
	if(users[account]  && users[account].password ===password){
		const {password , ...user} = users[account];
		req.session.user = user;
		res.json({message:"歡迎光臨",user})
	}else{
		res.json({message:"不受歡迎"})
	}
	// console.log(account,password);
	// res.json({result:"歡迎光臨"})
});

//存放cookie的位置是在localhost所以你的網址位置要在localhost不然reload後，在cookie端不會有connect.sid

app.get("/checkLogin",(req,res) => {
	// console.log(req.session.user);
	const {user} = req.session;
	if(user){
		res.json({message:"歡迎再度光臨",user})
	}else{
		res.json({message:"不受歡迎"})
	}
});

app.get("/logout",(req,res) => {
	delete req.session.user;
	res.json({message:"歡迎下次光臨"})
});

app.listen(3000, () => {
	console.log("server is running at http://localhost:3000");
})