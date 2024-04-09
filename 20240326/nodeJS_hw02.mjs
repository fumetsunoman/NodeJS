import {rename, renameSync} from "fs";

const numFiles = 20;

for(let i =1;i<=numFiles ;i++ ){
	rename(`./work${i}.html`,`./work/work${i}.html` ,error=>{
		if(error){
			console.log('操作失敗');
			console.log(error);
			return false
		}
		console.log("操作成功");
	});
}

