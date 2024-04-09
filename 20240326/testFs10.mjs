import {rename, renameSync} from "fs";

// rename("./數字.txt","./text/數字2.txt" ,error=>{
// 	if(error){
// 		console.log('操作失敗');
// 		console.log(error);
// 		return false
// 	}
// 	console.log("操作成功");
// });

renameSync("./text/數字2.txt","./text2/數字2.txt");


