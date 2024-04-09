import { mkdir, readdir, rm } from "fs";

// process.argv[2] 在執行檔案時 讀取參數 ex;node testFs12.mjs mk
if(process.argv[2] === "mk"){
  mkdir("./html3", {recursive: true} ,error => {
    if(error){
      console.log("建立資料夾失敗");
      console.log(error);
      return false;
    }
    console.log("建立資料夾成功");
  });
}else if(process.argv[2] === "rd"){
  readdir("./video" , (error, files) => {
    if(error){
      console.log("讀取資料夾失敗");
      console.log(error);
      return false;
    }
    console.log(files);
  });
}else if(process.argv[2] === "rm"){
  rm("./aa", {recursive: true} ,error => {
    if(error){
      console.log("刪除資料夾失敗");
      console.log(error);
      return false;
    }
    console.log("刪除資料夾成功");
  });
}

//遞迴建立
// mkdir("./aa/bb/cc",{recursive:true},error =>{
// 	if(error){
// 		console.log("建立資料夾失敗");
// 		console.log(error);
// 		return false;
// 	}
// 	console.log("建立資料夾成功");
// });