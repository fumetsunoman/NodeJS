const fs  = require("fs");

const file1 = "./測試寫入2.txt";
const content1 = "松下問童子,言師採藥去";

console.log("1 寫入開始之前")
try{
	fs.writeFileSync(file1,content1);
	console.log("寫入成功");
}catch(error){
	console.log(error);
	console.log("2 寫入失敗");
}

console.log('3 寫入開始之後');

