import {unlink,rm} from "fs";

// unlink("./測試寫入.txt",error =>{
// 	if(error){
// 		console.log("刪除失敗");
// 		console.log(error);
// 		return false;
// 	}
// 	console.log("刪除成功")
// })

rm("./測試寫入2.txt",error =>{
	if(error){
		console.log("刪除失敗");
		console.log(error);
		return false;
	}
	console.log("刪除成功")
})