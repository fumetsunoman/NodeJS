import {createWriteStream} from "fs" ; 

const ws  = createWriteStream("./測試連續寫入.txt");

ws.on("finish" , () => {
	console.log("全部寫入完成");
});

ws.write("1\r\n");
ws.write("2\r\n");
ws.write("3\r\n");
ws.write("4\r\n");

ws.end();

