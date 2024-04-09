import {readFile} from "fs";
// import { text } from "stream/consumers";

let textData;


readFile("./測試寫入ESM2.txt",(error,data)=>{
	if(error){
		console.log("讀取失敗");
		return false;
	}
	// console.log(data.toString());
	textData = data.toString();
	getData();
});

const getData = () =>{
	console.log(textData);
}