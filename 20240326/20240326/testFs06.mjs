import {readFileSync} from "fs";

let data = readFileSync("./測試寫入ESM2.txt");
console.log(data.toString());

