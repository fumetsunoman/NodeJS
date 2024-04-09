const fs = require("fs");
const file1 = "./aaa/測試寫入.txt";
const content1 = "松下問童子，言師採藥去";

fs.writeFile(file1,content1,function(error){
	if(error){
    console.log('寫入失敗');
		// return false;
	}else{
		console.log('寫入成功');
	}
});
