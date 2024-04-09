import fs from "fs";
import path from "path" ;
import {rename, renameSync} from "fs";

// console.log(resolve(import.meta.dirname,"fff.mp4"));


// Function to get current filenames 
// in directory 
fs.readdir("./work", (err, files) => { 
  if (err) 
    console.log(err); 
  else { 
    console.log("\nCurrent directory filenames:"); 
    files.forEach(file => { 
      const filename =  file.replace(".html","")
      const preName  = filename.replace("work","");
      // console.log(preName);      
      console.log(typeof parseInt(preName));
      console.log(parseInt(preName));
      if(preName < 10){
        const concatString =  "work0"+ preName.toString();
        console.log(concatString);
        rename(`./work/work${preName}.html`,`./work/${concatString}.html`,error =>{
          if(error){
            console.log('操作失敗');
            console.log(error);
            return false
          }
          console.log("操作成功");
        })
      }
    }) 
  } 
});












