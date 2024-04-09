import {writeFile} from "fs";

const file1 = "./測試寫入ESM.txt";
const content1 = "松下問童子，言師採藥去";

console.log("1 寫入開始之前")

//非同步系統
writeFile(file1,content1, error=>{
	if(error){
		console.log('2 寫入失敗');
		return false;
	}
	console.log("2 寫入成功");
});

console.log('3 寫入開始之後');
