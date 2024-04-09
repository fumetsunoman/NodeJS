import {stat} from "fs";

stat("./work",(error,stats)=>{
	if(error){
		console.log("讀取狀態失敗");
		console.log(error);
		return false;
	}
	console.log(stats);
	// console.log(stats.isFile());
	// console.log(stats.isDirectory());
});

